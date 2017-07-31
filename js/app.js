
var apiURL = 'http://www.json-generator.com/api/json/get/cqTiirHeKW?indent=2';

const home = { template: '' }


Vue.component('list-elem', {
    props: ['list'],
    template: '<li><a v-bind:href="list.index">{{ list.name }}</a></li>'
})


var apiList = new Vue({

    el: '#app',

    data: {
        items: null
    },

    created: function () {
        this.fetchData();
    },

    methods: {
        fetchData: function () {
            var self = this;
            $.get( apiURL, function( data ) {
                self.items = data;
            });
        }
    }



});
