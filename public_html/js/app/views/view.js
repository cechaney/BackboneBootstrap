define(
    ['jquery', 'underscore', 'backbone', 'app/models/model', 'text!app/templates/template.html'], 
    function($, _, Backbone, model, template){

        var View = Backbone.View.extend({
            
            el: '#headline',
            
            initialize: function(){

                this.model = new model({
                    message: 'Backbone / Bootstrap Starter App'
                });
        
                this.template = _.template( template, {model: this.model.toJSON()});

            },

            render: function(){
                $(this.el).append( this.template );
            }
        });

    return new View();

});