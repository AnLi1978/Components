Ext.define('Components.store.TreeExampleStore',{
    extend: 'Ext.data.TreeStore',
    //requires: 'Components.model.TreeExampleModel',
    model: 'Components.model.TreeExampleModel',
    proxy: {
        type: 'ajax',
        url: 'resources/data/tree.json',
        reader: {
            type: 'json',
            root: 'componentsTree'
        }
    },
    root: {
        text: 'Example',
        expanded: false
    },
    autoLoad: true
});
