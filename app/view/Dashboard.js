Ext.define('Components.view.Dashboard',{
    extend: 'Ext.container.Viewport',
    requires: [
        'Components.view.Header',
        'Components.store.Import',
        'Components.view.PanelDestination',
        'Components.view.PanelSource',
        'Ext.panel.Panel',
        'Ext.tab.Panel',
        'Ext.button.Button',
        'Ext.data.*',
        'Ext.tree.*'
    ],
    alias: 'widget.dashboard',
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'panel',
        region: 'west',
        itemId: 'westContainer',
        collapsible: true,
        split: true,
        width: 250,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'paneldestination',
            flex: 1
        }]
    },{
        xtype: 'appheader',
        region: 'north'
    },{
        xtype: 'tabpanel',
        itemId: 'centerTabPanel',
        region: 'center',
        items: [{
            title: 'Редактор формы',
            html: 'Контент редактора форм',
            bodyStyle:'background:transparent url(\'resources/images/bg.gif\') repeat'
        },{
            title: 'Настройки формы',
            bodyStyle:'background:transparent url(\'resources/images/bg.gif\') repeat',
            html: 'Контент настроек'
        },{
            title: 'Предварительный просмотр',
            xtype: 'container',
            layout: {
                type: 'border'
            },
            items: [{
                region: 'center',
                xtype: 'grid',
                title: 'Inner panel center',
                store: 'Import',
                columns: [
                    {text: 'Id', dataIndex: 'id'},
                    {text: 'Name', dataIndex: 'name'}
                ]
            },{
                region: 'west',
                xtype: 'panel',
                title: 'Inner panel west',
                width: 150,
                collapsible: true,
                split: true
            }]
        }]
    },{
        xtype: 'toolbar',
        region: 'south',
        height: 40,
        items: [{
            xtype: 'button',
            text: 'Добавить',
            itemId: 'buttonAdd'
        },{
            xtype: 'button',
            text: 'Удалить'
        },{
            xtype: 'button',
            text: 'Настройки'
        }]
    },{
        xtype: 'tabpanel',
        width: 250,
        region: 'east',
        tabPosition: 'bottom',
        collapsible: true,
        split: true,
        layout : {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panelsource',
            flex: 1
        },{
            title: 'Свойства',
            flex: 1
        }]
    }]
});
