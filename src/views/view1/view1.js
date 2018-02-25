(function () {
    angular
        .module('pranaFront')
        .controller('View1Ctrl',agregarGeneralCtrl);

    agregarGeneralCtrl.inject = ['$scope', 'URL_API','clienteFactory'];
    function agregarGeneralCtrl($scope,URL_API,clienteFactory) {

        var vm = this;
        init();
        function init() {
            clienteFactory.obtenerClientes().then(resultado);
        }

        function resultado(response){
            console.log(response);
        }
    }
})();