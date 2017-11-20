
var apiURL = 'https://api.vk.com/method/users.get?user_ids=23432521&fields=bdate&v=5.68';

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
