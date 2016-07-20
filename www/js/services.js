angular.module('app.services', [])

.factory('DBFactory', [function(){
    var arr = {};

    return {
        init: function () {
            var config = {
                apiKey: "AIzaSyCEgnv6pQrKVlK5ZGMtJeEb1tIUvvhZz3s",
                authDomain: "a-fro-shop.firebaseapp.com",
                databaseURL: "https://a-fro-shop.firebaseio.com",
                storageBucket: "a-fro-shop.appspot.com",
            };
            firebase.initializeApp(config);

            return firebase;
        },
        auth: function () {
            
        },
        get: function (id) {
            return (id) ? arr[id] : arr;
        },
        save: function (value, id) {
            if (id)
                arr[id] = value;
            else
                arr.push(value);

            return arr;
        },
        delete: function (id) {
            return arr.splice(id, 1);
        }
    };
}]);