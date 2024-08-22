<script>
	export let token;
	export let heading_regex;

	$: level = token.match(/^#+/)[0].length;
	$: heading = token.replace(heading_regex, '');
</script>

{#if level === 1}
	<h1>{heading}</h1>
{:else if level === 2}
	<h2>{heading}</h2>
{:else if level === 3}
	<h3>{heading}</h3>
{:else if level === 4}
	<h4>{heading}</h4>
{:else if level === 5}
	<h5>{heading}</h5>
{:else if level === 6}
	<h6>{heading}</h6>
{/if}

<style>
  h1 { font-size: 32px; }
  h2 { font-size: 28px; }
  h3 { font-size: 24px; }
  h4 { font-size: 20px; }
  h5 { font-size: 14px; }
</style>
