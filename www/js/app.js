// 起動時
ons.bootstrap()
  .controller('AppController', function($scope) {
    this.pushes = 0;
    this.pops = 0;
    $scope.login = function(username, password) {
      console.log(username);
      console.log(password);
    };
  });
  ons.ready(function() {
      console.log("Onsen UI is ready!");
  });

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

function registCard() {
  alert("!!!");
}
