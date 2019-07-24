// アプリ起動時
ons.bootstrap()
  .controller('AppController', function($scope) {
  // エキスパンション選択画面表示時
  // 次元一覧を選択肢として取得
    $scope.exIcons = {};
    $scope.toExpansionPage = function() {
      var MC = monaca.cloud;
      var dimension = MC.Collection("dimension");
      dimension.find()
      .done(function(items, totalItems){
        $scope.options = items.items;
      })
      .fail(function(err){
        console.error(err.code);
      }).always(function() {
        $scope.selectedModifier = "none";
        $scope.navi.pushPage('expansion.html', {animation : 'slide'});
      });
      
      // 次元プルダウン変更イベント
      $scope.changeDimension = function(){
        // 一覧からエキスパンションアイコンを削除。
        var result = document.getElementById("ex-result");
        var link = result.children;
        while(result.firstChild) {
          result.removeChild(result.firstChild);
        }

        var MC = monaca.cloud;
        var ex = MC.Collection("expansion");
        ex.find('dimension == ' + this.selectedModifier, {propertyNames:["abbreviation", "name"]}).
            done(function(items, totalItems) {
              var expansions = items.items;
              for (var i = "0"; i < expansions.length; i++) {
                var tags = '<a href=""><span class="mtx-' + expansions[i].abbreviation + '"></span></a>';
                result.insertAdjacentHTML("beforeend", tags);
              }
              $scope.exIcons = items.items;
            }).
            fail(function(err) {
              console.error(err.code);
            });
      };
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