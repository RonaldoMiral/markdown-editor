const heading_regex = /^#+ /;
const isHeading = (token) => token.match(heading_regex);

const paragraph_regex = /^[a-zA-Z]/;
const isParagraph = (token) => token.match(paragraph_regex);

const ordered_list_regex = /^\d[.] /;
const isOrderedList = (token) => token.match(ordered_list_regex);

const unordered_list_regex = /^- /;
const isUnOrderedList = (token) => token.match(unordered_list_regex);

const block_quote_regex = /^> /;
const isBlockQuote = (token) => token.match(block_quote_regex);

const code_block_regex =  /^```[\s\S]*/;
const isCodeBlock = (token) => token.match(code_block_regex);

export { 
  heading_regex, paragraph_regex, ordered_list_regex,
  unordered_list_regex, block_quote_regex, code_block_regex,
  isHeading, isParagraph, isOrderedList,
  isUnOrderedList, isBlockQuote, isCodeBlock
};
