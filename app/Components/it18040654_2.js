angular
    .module('mwl.calendar.docs')
    .factory('alert', function($uibModal) {

        function show(action, event) {
            return $uibModal.open({
                templateUrl: 'modalContent.html',
                controller: function() {
                    var afs= this;
                    afs.action = action;
                    afs.event = event;
                },
                controllerAs: 'afs'
            });
        }

        return {
            show: show
        };

    });
