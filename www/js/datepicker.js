angular
    .module('datepickerApp', [
        'ngMaterial',
        'ngMessages',
        'am.date-picker',
    ])
  .config( function($mdThemingProvider, amDatePickerConfigProvider) {
       $mdThemingProvider.theme('default')
            .primaryPalette('teal')
        amDatePickerConfigProvider.setOptions({
            calendarIcon: 'https://raw.githubusercontent.com/unmade/am-date-picker/master/dist/images/icons/ic_today_24px.svg',
            clearIcon: 'https://raw.githubusercontent.com/unmade/am-date-picker/master/dist/images/icons/ic_close_24px.svg',
            nextIcon: 'https://raw.githubusercontent.com/unmade/am-date-picker/master/dist/images/icons/ic_chevron_right_18px.svg',
            prevIcon: 'https://raw.githubusercontent.com/unmade/am-date-picker/master/dist/images/icons/ic_chevron_left_18px.svg'
        })
    })
    .controller('MainCtrl', 
        function ($scope) {
            var today = new Date();
            $scope.to = new Date(today.setDate(today.getDate() + 1));
            $scope.from = new Date('2015-11-05');
            $scope.date = null;
            $scope.onChange = function(date) {
                console.log('date was changed to', date);
            };
        }
    );