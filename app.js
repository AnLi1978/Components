Ext.application({
    name: 'Components',
    controllers: ['DashboardControl', 'HeaderControl', 'TreeControl'],
    stores: ['SourceStore', 'DestinationStore'],
    launch: function(){
        Ext.widget('dashboard');
    }
});
