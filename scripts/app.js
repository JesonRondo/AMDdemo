define([
    'scripts/user'
], function(User) {
    return {
        initialize: function() {
            var UserPanel = Backbone.View.extend({
                el: $('#userpanel'),
                initialize: function() {
                    _.bindAll(this, 'render', 'changeName', 'changeTel');
                    this.model.bind('change', this.render);
                    this.render();
                },
                events: {
                    'click input#changeName': 'changeName',
                    'click input#changeTel': 'changeTel'
                },
                changeName: function() {
                    this.model.set({name: 'Rondo'});
                },
                changeTel: function() {
                    this.model.set({tel: 'OOXX***'});
                },
                render: function() {
                    var template = _.template($('#userpaneltpl').html(), this.model.toJSON());
                    $(this.el).html(template);
                }
            });

            var user = new User({name: 'Longzhou', tel: '***XXOO'});
            var userpanel = new UserPanel({model: user});
        }
    };
});