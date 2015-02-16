/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "reglesTypo",
        defaults = {
            // propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        // list the words for different functions
        prepositions = ['à','devant','passé','après','devers','pendant','attendu','Dixit','pico-','au-dedans','durant','pour','au-dehors','emmi','près','au-delà de','en','proto-','au-dessous de','endéans','quant à','au-dessus de','entre','revoici','au-devant de','envers','revoilà','auprès de','ès','rez','autour de','excepté','sans','aux environs de','fors','sauf','avant','hormis','selon','avec','hors','sous','centi-','juridique nonobstant','sub','chez','jusque','suivant','concernant','lès','sur','contre','lez','vers','d\'','malgré','versus','dans','moyennant','via','de','nonobstant','vis-à-vis','depuis','outre','voici','derrière','par','voilà','des','parmi'],
        pronoms = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
        pronomsToniques = ['moi', 'toi', 'lui', 'elle', 'nous', 'soi', 'vous', 'eux'];
        pronomsRelatifsIndefinis = ['qui', 'que', 'quoi', 'dont', 'où'];
        articlesPronominaux = ['se'];
        conjonctions = ['mais','ou', 'et', 'donc', 'or', 'ni', 'car'];
        articles = ['le', 'la', 'les', 'un', 'une', 'du', 'de la', 'des', 'au', 'aux'];
        deterDemons = ['ce', 'cet', 'cette', 'ces'];
        deterPoss = ['mon', 'ton', 'son', 'ma', 'ta', 'sa', 'mes', 'tes', 'ses', 'notre', 'votre', 'leur', 'nos', 'vos', 'leurs'];

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).
            var self = this;
            var p = $(this.element).find("p");
            
            p.each(function(){
                self.fixSmallWords($(this));
            });

        },

        fixSmallWords: function(el) {
            el
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );