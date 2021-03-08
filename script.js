const searchClient = algoliasearch('0RYS7MAV9N','aa927576644533e65a4f9fa98ec31ab2');

const search = instantsearch({
indexName: 'Email-Index',
searchClient,
});

search.addWidgets([
instantsearch.widgets.searchBox({
container: '#searchbox',
}),

instantsearch.widgets.configure({
hitsPerPage: 16
}),

instantsearch.widgets.hits({
container: '#hits',
templates: {
item: `
<div>
<div class="hit-name">
{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
</div>
</div>
`,
},
}),

instantsearch.widgets.pagination({
container: '#pagination',
}),
]);

search.start();
