require({
    baseUrl: './'
});

require([
    'scripts/jquery-1.8.2.min',
    'scripts/underscore-min',
    'scripts/backbone-min',
    'scripts/app'
], function() {
    App = _.last(arguments);
    App.initialize();
});