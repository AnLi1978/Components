Ext.define('Components.model.Import',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'name'}
    ],
    proxy: {
        type: 'ajax',
        url: 'resources/data/import.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
