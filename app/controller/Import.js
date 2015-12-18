Ext.define('Components.controller.Import', {
    extend: 'Ext.app.Controller',
    stores: ['Import'],
    onLaunch: function() {
        var importStore = this.getImportStore();

    }
});
