var app = ons.bootstrap();
// 数量減ボタン
app.directive('plusSpinner', function() {
  return {
    restrict : 'E',
    template : '<ons-button><ons-icon icon="md-plus"></ons-icon></ons-button>',
    scope:{
      count:'@',
      limit:'@',
      model:'=?'
    },
    link:function(scope, elem, attrs) {
      elem.bind('click', function() {
        scope.$apply(function() {
          if (!scope.model) {
            scope.model = 0;
          }
          var model = parseInt(scope.model);
          var count = parseInt(scope.count);
          var limit = parseInt(scope.limit);
          if (model < limit) {
            scope.model = model + count;
          }
        });
      });
    }
  };
});

// 数量減ボタン
app.directive('minusSpinner', function() {
  return {
    restrict : 'E',
    template : '<ons-button><ons-icon icon="md-minus" ></ons-icon></ons-button>',
    scope:{
      count:'@',
      limit:'@',
      model:'=?'
    },
    link:function(scope, elem, attrs) {
      elem.bind('click', function() {
        scope.$apply(function() {
          var model = parseInt(scope.model);
          var count = parseInt(scope.count);
          var limit = parseInt(scope.limit);
          if (model > limit) {
            scope.model = model - count;
          }
        });
      });
    }
  };
});
app.controller('AppController', function($scope) {
    // 新規商品画面表示
    $scope.toAddStockPage = function() {
      $scope.stock = {amount : 0, foil:false};
      $scope.navi.pushPage('add_stock.html', {animation : 'slide'});
    }

    // エキスパンション選択画面表示
    // 次元一覧を選択肢として取得
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
        if (angular.isUndefined($scope.selectedModifier)) {
          $scope.selectedModifier = "none";
        } else if (angular.isDefined($scope.stock.dimension)) {
          $scope.selectedModifier = $scope.stock.dimension;
        }
        $scope.navi.pushPage('expansion.html', {animation : 'slide'});
      });
    }

    // 次元プルダウン変更イベント
    $scope.changeDimension = function(){
      var MC = monaca.cloud;
      var ex = MC.Collection("expansion");
      ex.find('dimension == ' + this.selectedModifier, {propertyNames:["abbreviation", "name"]}).
          done(function(items, totalItems) {
            $scope.$apply(function() {
              $scope.expansions = items.items;
            });
          }).
          fail(function(err) {
            console.error(err.code);
          }
        )
    };

  // エキスパンション選択イベント
    $scope.clickExpansion = function(name, abbr) {
      $scope.stock.exName = name;
      $scope.stock.exAbbr = abbr;
      $scope.stock.dimension = this.selectedModifier;
      $scope.navi.popPage();

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