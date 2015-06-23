(function() {

angular.module('optc').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('main',{
            url: '/',
            templateUrl: 'views/content.html',
            controller: 'MainCtrl'
        })

        .state('main.pick',{
            views: {
                popup: {
                    templateUrl: 'views/popup/picker.html',
                    controller: 'PickerCtrl'
                }
            },
            params: { slot: 0 }
        })

        .state('main.defense',{
            views: {
                popup: {
                    templateUrl: 'views/popup/defense.html',
                    controller: 'DefenseCtrl'
                }
            }
        })

        .state('main.loadSlot',{
            views: {
                popup: {
                    templateUrl: 'views/popup/loadslot.html',
                    controller: 'SlotsCtrl'
                }
            }
        })

        .state('main.saveSlot',{
            views: {
                popup: {
                    templateUrl: 'views/popup/saveSlot.html',
                    controller: 'SlotsCtrl'
                }
            }
        })

        .state('main.reset',{
            views: {
                popup: {
                    templateUrl: 'views/popup/reset.html',
                    controller: function($scope, $state) {
                        $scope.resetStorage = function() {
                            localStorage.removeItem('team');
                            for (var i=0;i<6;++i) $scope.resetSlot(i);
                            $state.go('^');
                        }
                    }
                }
            }
        });

});

})();
