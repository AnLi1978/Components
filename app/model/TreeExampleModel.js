Ext.define('Components.model.TreeExampleModel',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'text'}
    ],
    proxy: {
        type: 'ajax',
        url: 'resources/data/tree.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
