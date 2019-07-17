// アプリ起動時
ons.bootstrap()
  .controller('AppController', function($scope) {
  // エキスパンション選択画面表示時
  // 次元一覧を選択肢として取得
    $scope.toExpansionPage = function() {
      // var MC = monaca.cloud;
      // var dimension = MC.Collection("dimension");
      // dimension.find()
      // .done(function(items, totalItems){
      //   $scope.options = items.items;
      // })
      // .fail(function(err){
      //   console.error(err.code);
      // }).always(function() {
      //   $scope.navi.pushPage('expansion.html', {animation : 'slide'});
      // });
        $scope.navi.pushPage('expansion.html', {animation : 'slide'});
    }
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
  var expansion = MC.Collection("dimension");
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