'use strict';
var loanapplication = angular.module('LoanApplicationModel', ['multiform.config']);

loanapplication.factory('LoanApplicationModel', [
    '$http',
    'CONFIG',
    'AbstractFactory',
    function($http, CONFIG, AbstractFactory) {
        var abstractFactory = new AbstractFactory();
        var loanapplicationModel = function() {
            var _loanapplication = this;
            var request = $http(abstractFactory.getUrl('getApplicationID'));
            request.then(function(response) {
                console.log(response);
                _loanapplication.data = response.data;
                console.log(_loanapplication);
            });
        };
        loanapplicationModel.prototype = {
            getAllloanapplication: function() {
                return this;
            }
        };
        return loanapplicationModel;
    }
]);