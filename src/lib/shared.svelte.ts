import { tick } from "svelte";
import { SvelteMap } from "svelte/reactivity";

export interface IFile {
  id: number;
  filename: string;
  markdown: string;
  active: boolean;
  edit: boolean;
  lastActiveFileId: IFile["id"] | null;
  isNew: boolean;
  // nextActiveFileId: IFile["id"] | null;
}

class MarkdownDB {
  private db: Promise<IDBDatabase>;

  constructor() {
    this.db = new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = indexedDB.open("markdown_db", 1);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains("markdownSotre")) {
          db.createObjectStore("markdownStore", { keyPath: "id" });
          console.log("Markdown store created!");
        }
      };

      request.onsuccess = (event: Event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        console.log("Database opened successfully!");
        resolve(db);
      };

      request.onerror = (event: Event) => {
        console.log("Error opening the database!");
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  public async save(data: IFile) {
    try {
      const transaction = (await this.db).transaction(
        "markdownStore",
        "readwrite"
      );
      const store = transaction.objectStore("markdownStore");
      const saveStore = store.put(data);

      saveStore.onsuccess = () => {
        console.log("File save successfully!");
      };

      saveStore.onerror = () => {
        console.log("Failed to save file!");
      };

      transaction.oncomplete = () => {
        console.log("Transaction completed!");
      };

      transaction.onerror = () => {
        console.log("Transaction failed!", transaction.error);
      };
    } catch (error) {
      console.error(error);
    }
  }

  public retrieve<T>(): Promise<T[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const transaction = (await this.db).transaction(
          "markdownStore",
          "readonly"
        );
        const store = transaction.objectStore("markdownStore");
        const data = store.getAll();

        data.onsuccess = () => {
          console.log("All data retrieved!");
          resolve(data.result as T[]);
        };

        data.onerror = () => {
          console.log("Error retrieving data!");
          reject(data.error);
        };

        transaction.oncomplete = () => {
          console.log("Transaction completed!");
        };
      } catch (error) {
        console.log(error);
      }
    });
  }

  public async newFile(file: IFile) {
    const files = await this.retrieve<IFile>();
    if (!files) {
      this.save(file);
      return;
    }

    const currentFile = files.find((file) => file.active);
    currentFile!.active = false;
    this.save(currentFile!);
    this.save(file);
  }
}

export const md: { markdown: string } = $state({ markdown: "" });

export const db = $state(new MarkdownDB());

export let files: IFile[] = $state([]);
db.retrieve<IFile>().then((objs) => {
  for (const obj of objs) {
    files.push(obj);
    if (obj.active) md.markdown = obj.markdown;
  }
});

export function editFile(field: HTMLInputElement, status: boolean): void {
  const file = files.find((file) => file.active);
  if (!file) throw new Error("File not found!");
  file.edit = status;
  if(status) tick().then(() => field.focus());
}

export function createUntitledFileName() {
  const untitled = files.reduce((accumulator: number, current) => {
    if (/Untitled-\d/.test(current.filename)) accumulator++;
    return accumulator;
  }, 0);

  return `Untitled-${untitled + 1}`;
}

export function newFile() {
  const file: IFile = {
    id: files.length,
    filename: "",
    markdown: "",
    active: true,
    edit: true,
    lastActiveFileId: null,
    isNew: true
  };

  if (files.length === 0) {
    files.push(file);
    return;
  }

  const activeFile = files.find((file) => file.active);
  if(!activeFile) throw new Error('Active file not foud!');
  activeFile.active = false;
  file.lastActiveFileId = activeFile.id;
  files.push(file);
  md.markdown = file.markdown;
}

export const filenameFields: Map<number, HTMLInputElement> = $state(new Map());
