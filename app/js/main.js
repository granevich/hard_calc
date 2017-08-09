/**
 * Created by granevich on 06.05.2016.
 */

/**
 * You must include the dependency on 'ngMaterial'
 */

var app = angular.module('App', ['ngMaterial'
]);


app.controller('rootCtrl' ,function ($scope, $http) {

    $http.get('json.txt').success(function(data) {
        $scope.data = data;
        console.log($scope.data)
    });

    document.addEventListener('click', function () {
        var arralem =  this.querySelectorAll('.ua');
        var prises = [];
        var sumel=0;
        arralem.forEach(function (i, item) {
          prises.push(+i.innerText);
          sumel = prises.reduce(add, 0);
          function add(a, b) {
              return a + b;
          }

      });

        document.getElementById('summua').innerHTML = sumel;
        document.getElementById('summpl').innerHTML = sumel;


    });
    $scope.is = function () {
        $scope.item ='';
        var allelem =    document.querySelectorAll('.clear');

        allelem.forEach(function (i, item) {
            i.innerHTML = '';

        })
    };
    $scope.cpusnum = function (item) {

    };
    $scope.$watch('chasis', function () {
        if($scope.chasis){
            $scope.rams = new Array(+$scope.chasis.ram_q);
            $scope.cpus = new Array(+$scope.chasis.cpu_count);
            $scope.hdds = new Array(+$scope.chasis.hdd_qty);
            $scope.ssds = new Array(+$scope.chasis.ssd_qty);
            $scope.socket = $scope.chasis.socket;
            $scope.priceChasis = $scope.chasis.price;




            $scope.updateCpu = function (cpu, index) {
                $scope.showram = 'true';
                    if(cpu!==undefined){
                        console.log(cpu);
                        document.querySelector('.cpu_summary').innerHTML =  cpu.name + ' ('+cpu.core_count+' core, '+cpu.frequency+ ', '+ cpu.socket+')';
                        var arrcpu =   document.querySelectorAll('.itemCpu'+index);
                        arrcpu.forEach(function (i, item) {
                            i.innerHTML = cpu.price;
                        });
                    }
                    else{


                        document.querySelector('.cpu_summary').innerHTML =  ' ';

                        arrcpu =   document.querySelectorAll('.itemCpu'+index);
                        arrcpu.forEach(function (i, item) {
                            i.innerHTML = 0;
                        });
                    }


            };





            $scope.updateHdd = function (hdd, index) {

                if(hdd!==undefined){
                    var arrhdd =   document.querySelectorAll('.itemHdd'+index);
                    arrhdd.forEach(function (i, item) {
                        i.innerHTML =hdd.price;
                    });
                }
                else{
                    arrhdd =   document.querySelectorAll('.itemHdd'+index);
                    arrhdd.forEach(function (i, item) {
                        i.innerHTML = 0;
                    });
                }

            };


            $scope.updateSsd = function (ssd, index) {
                   // var arrssd =   document.querySelectorAll('.itemSsd'+index);
                   // arrssd.forEach(function (i, item) {
                   //
                   //     i.innerHTML = ssd.price;
                   // });
                if(ssd!==undefined){
                    var arrssd =   document.querySelectorAll('.itemSsd'+index);
                    arrssd.forEach(function (i, item) {
                        i.innerHTML = ssd.price;
                    });
                }
                else{
                    arrssd =   document.querySelectorAll('.itemSsd'+index);
                    arrssd.forEach(function (i, item) {
                        i.innerHTML = 0;
                    });
                }

            };
            $scope.updateRam= function (ram_model, ram) {

               $scope.ramPrice =  ram *ram_model.price

            }
        }


    });



});



