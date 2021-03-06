Ext.define('Components.view.Dashboard',{
    extend: 'Ext.container.Viewport',
    requires: [
        'Components.view.Header',
        'Components.store.Import',
        'Components.store.TreeExampleStore',
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
                title: 'Пример загрузки из json файла в grid',
                store: 'Import',
                columns: [
                    {text: 'Id', dataIndex: 'id'},
                    {text: 'Name', dataIndex: 'name'}
                ]
            },{
                region: 'west',
                xtype: 'treepanel',
                title: 'Пример загрузки из json файла в дерево',
                store: 'TreeExampleStore',
                rootVisible: false,
                width: 270,
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
            itemId: 'buttonAdd',
            tooltip: 'Добавить компонент'
        },{
            xtype: 'tbseparator'
        },{
            xtype: 'button',
            text: 'Удалить',
            tooltip: 'Удалить выбранный компонент'
        },{
            xtype: 'tbseparator'
        },{
            xtype: 'button',
            text: 'Настройки',
            tooltip: 'Настройки компонентов'
        },{
            xtype: 'tbseparator'
        },{
            xtype: 'button',
            text: 'Удалить все',
            tooltip: 'Очистить дерево элементов'
        }]
    },{
        xtype: 'tabpanel',
        width: 250,
        region: 'east',
        title: 'Доступные компоненты',
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
