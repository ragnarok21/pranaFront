(function() {
    'use strict';
    angular.module('pranaFront')
        .factory('clienteFactory', clienteFactory)
    ;

    clienteFactory.$inject = ['$http', 'URL_API'];
    function clienteFactory($http, URL_API) {
        return {
            obtenerClientes: obtenerClientes
        };

        function obtenerClientes() {
            return $http({
                url: URL_API + '/prana/cliente/all',
                dataType: 'json',
                handleError:false,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(resultadoObtenerCartolaTransferencias);

            function resultadoObtenerCartolaTransferencias(result){
                return result;
            }
        }
    }
})();