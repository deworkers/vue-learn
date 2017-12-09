
    
    var xhr = new XMLHttpRequest();

    var getPrice = function(typeId) {
        getUrl = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=RUB'

        xhr.open('GET', getUrl, false);
        xhr.send();

        if (xhr.status != 200) {
          // обработать ошибку
          return xhr.status; // пример вывода: 404: Not Found
        } else {
          // вывести результат
         return JSON.parse(xhr.responseText); // responseText -- текст ответа.
        }
    }


var get = new Vue({
    el: '#price',
    data: {
        price: getPrice()[0].price_rub
    }
})


var calc = new Vue({
    el: '#calc',
    data: {
        quant: 0.0002,
        price: getPrice()[0].price_rub
    },
    computed: {
        result: function() {
            return this.quant*this.price
        }
    }
})


