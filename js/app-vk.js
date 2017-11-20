
    
    var xhr = new XMLHttpRequest();

    var getPrice = function(typeId) {
        getUrl = 'https://api.evemarketer.com/ec/marketstat/json?typeid=' + typeId + '&usesystem=30000142'

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


var buy = new Vue({
    el: '#buy',
    data: {
        max: getPrice(16651)[0].buy.max,
        min: getPrice(16651)[0].buy.min
    }
})

var sell = new Vue({
    el: '#sell',
    data: {
        max: getPrice(16651)[0].sell.max,
        min: getPrice(16651)[0].sell.min
    }
})
