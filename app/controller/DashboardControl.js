Ext.define('Components.controller.DashboardControl',{
    extend: 'Ext.app.Controller',
    requires: ['Ext.panel.Panel'],
    views: ['Components.view.Dashboard'],
    init: function(application){
        this.control({
            "dashboard button#buttonAdd": {
                click: this.onButtonAddClick
            }
        });
    },
    onButtonAddClick: function(button, e, options){
        console.log('Была нажата кнопка Добавить');
        button.up('dashboard').down('tabpanel#centerTabPanel').add({
            title: 'PanelNew',
            html: 'PanelNew Content',
            closable: true
        });
        button.up('dashboard').down('container#westContainer').add({
            xtype: 'panel',
            title: 'Внутренняя западная панель новая',
            html: 'Контент внутренней западной панели новой',
            flex: 1,
            height: 50,
            closable: true
        })
    }
});