// 起動時
ons.bootstrap()
  .controller('AppController', function($scope) {
    this.pushes = 0;
    this.pops = 0;
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

var ex = [
];

function add_stock() {
  var MC = monaca.cloud;
  var expansion = MC.Collection("expansion");
  expansion.find()
  .done(function(items, totalItems){console.log(JSON.stringify(items))})
  .fail(function(err){
    console.error(err.code);
  });
}

function add_ex() {
  var MC = monaca.cloud;
  var expansion = MC.Collection("expansion");
  for(var i in ex){
    var json = ex[i];
    expansion.insert(json)
      .done(function(inserted){
        console.log('Insert is success!');
      })
      .fail(function(err){
        console.log(json.name + "is failed:code " + err.code);
      });
  };
}