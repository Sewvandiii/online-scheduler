angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module']);

angular.module('mwl.calendar.docs')
       .controller('onlineOrganizer', function(moment, alert, calendarConfig) {

        var afs = this;
        afs.monthlyview = 'month';
        afs.modifydate = new Date();
        var actions = [{
        }];


        afs.onlineschedularopen = false;

        afs.addEvent = function() {
            afs.events.push({
                startsAt: moment().startOf('day').toDate(),
                endsAt: moment().endOf('day').toDate(),
                color: calendarConfig.colorTypes.important,
                draggable: false,
                resizable: false
            });
        };

        //Expire Events

        // $scope.timeout  = function(){
        //    for (let x = $scope.event.length - 1; x >= 0; x--) {
        //        if (($scope.event[x].Qd.getCurrentTime()) < ($scope.today.getCurrentTime())) {
        //            $scope.expiredEvent.push({expireQd:$scope.event[i].Qd , exdate:$scope.event[i].exdate});
        //            $scope.event.splice(x, 1);
        //        }
        //     }
        //     Events.event = $scope.event;
        //     Events.expiredEvent = $scope.expiredEvent;
        // };
        // $scope.timeout();
  
        
        // Remaining days and time

        
        // $interval(function () {
        //     do {
        //         let currentDate = date.now();
        //         let eDate = new date(eDate).getTime();
        //         console.log(currentDate);
        //         console.log(eDate);
        // function remainTime(currentDate, eDate) {
        //     let remainTime = Math.floor(minutes / 60);
        //     return remainTime;
        //         }
        // }while ($scope.event().equals == null)

        afs.eventTimesChanged = function(event) {
            alert.show('Dropped or resized', event);
        };

        afs.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };

        afs.eventDeleted = function(event) {
            alert.show('Deleted', event);
        };
     
        afs.timespanClicked = function(date, cell) {

            if (afs.monthlyview  === 'month') {
                if ((afs.onlineschedularopen && moment(date).startOf('day').isSame(moment(afs.modifydate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
                    afs.onlineschedularopen = false;
                } else {
                    afs.onlineschedularopen = true;
                    afs.modifydate = date;
                }
            } else if (afs.monthlyview  === 'year') {
                if ((afs.onlineschedularopen && moment(date).startOf('month').isSame(moment(afs.modifydate).startOf('month'))) || cell.events.length === 0) {
                    afs.onlineschedularopen = false;
                } else {
                    afs.onlineschedularopen = true;
                    afs.modifydate = date;
                }
            }

        };

        

    });
