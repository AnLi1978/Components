Ext.application({
    name: 'Components',
    controllers: ['DashboardControl', 'HeaderControl', 'TreeControl'],
    stores: ['SourceStore', 'DestinationStore', 'Import', 'TreeExampleStore'],
    //views: ['Import'],
    launch: function(){
        Ext.widget('dashboard');
    }
});
