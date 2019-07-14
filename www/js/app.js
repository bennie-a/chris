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
  {
    dimension: "mor",
    abbreviation: "mh1",
    name: "モダンホライゾン"
  },
  {
    dimension: "rav",
    abbreviation: "war",
    name: "灯争大戦"
  },
  {
    dimension: "rav",
    abbreviation: "rna",
    name: "ラヴニカの献身"
  },
  {
    dimension: "rav",
    abbreviation: "grn",
    name: "ラヴニカのギルド"
  },
  {
    dimension: "dom",
    abbreviation: "dom",
    name: "ドミナリア"
  },
  {
    dimension: "xln",
    abbreviation: "xln",
    name: "イクサラン"
  },
  {
    dimension: "xln",
    abbreviation: "rix",
    name: "イクサランの相克"
  },
  {
    dimension: "akh",
    abbreviation: "akh",
    name: "アモンケット"
  },
  {
    dimension: "akh",
    abbreviation: "hou",
    name: "破滅の刻"
  },
  {
    dimension: "kld",
    abbreviation: "kld",
    name: "カラデシュ"
  },
  {
    dimension: "kld",
    abbreviation: "aer",
    name: "霊気紛争"
  },
  {
    dimension: "isd",
    abbreviation: "soi",
    name: "イニストラードを覆う影"
  },
  {
    dimension: "isd",
    abbreviation: "emn",
    name: "異界月"
  },
  {
    dimension: "zen",
    abbreviation: "bfz",
    name: "戦乱のゼンディカー"
  },
  {
    dimension: "zen",
    abbreviation: "ogw",
    name: "ゲートウォッチの誓い"
  },
  {
    dimension: "ktk",
    abbreviation: "ktk",
    name: "タルキール覇王譚"
  },
  {
    dimension: "ktk",
    abbreviation: "frf",
    name: "運命再編"
  },
  {
    dimension: "ktk",
    abbreviation: "dtk",
    name: "タルキール龍紀伝"
  },
  {
    dimension: "ths",
    abbreviation: "ths",
    name: "テーロス"
  },
  {
    dimension: "ths",
    abbreviation: "bng",
    name: "神々の軍勢"
  },
  {
    dimension: "ths",
    abbreviation: "jou",
    name: "ニクスへの旅"
  },
  {
    dimension: "rav",
    abbreviation: "rtr",
    name: "ラヴニカへの回帰"
  },
  {
    dimension: "rav",
    abbreviation: "gtc",
    name: "ギルド門侵犯"
  },
  {
    dimension: "rav",
    abbreviation: "dgm",
    name: "ドラゴンの迷路"
  },
  {
    dimension: "isd",
    abbreviation: "isd",
    name: "イニストラード"
  },
  {
    dimension: "isd",
    abbreviation: "dka",
    name: "闇の隆盛"
  },
  {
    dimension: "isd",
    abbreviation: "avr",
    name: "アヴァシンの帰還"
  },
  {
    dimension: "mrd",
    abbreviation: "som",
    name: "ミラディンの傷跡"
  },
  {
    dimension: "mrd",
    abbreviation: "mbs",
    name: "ミラディン包囲戦"
  },
  {
    dimension: "mrd",
    abbreviation: "nph",
    name: "新たなるファイレクシア"
  },
  {
    dimension: "zen",
    abbreviation: "zen",
    name: "ゼンディカー"
  },
  {
    dimension: "zen",
    abbreviation: "wwk",
    name: "ワールドウェイク"
  },
  {
    dimension: "zen",
    abbreviation: "roe",
    name: "エルドラージ覚醒"
  },
  {
    dimension: "ala",
    abbreviation: "ala",
    name: "アラーラの断片"
  },
  {
    dimension: "ala",
    abbreviation: "con",
    name: "コンフラックス"
  },
  {
    dimension: "ala",
    abbreviation: "arb",
    name: "アラーラ再誕"
  },
  {
    dimension: "shm",
    abbreviation: "shm",
    name: "シャドウムーア"
  },
  {
    dimension: "shm",
    abbreviation: "eve",
    name: "イーブンタイド"
  },
  {
    dimension: "lrw",
    abbreviation: "lrw",
    name: "ローウィン"
  },
  {
    dimension: "lrw",
    abbreviation: "mor",
    name: "モーニングタイド"
  },
  {
    dimension: "tsp",
    abbreviation: "tsp",
    name: "時のらせん"
  },
  {
    dimension: "tsp",
    abbreviation: "tsb",
    name: "時のらせんタイムシフト"
  },
  {
    dimension: "tsp",
    abbreviation: "plc",
    name: "次元の混乱"
  },
  {
    dimension: "tsp",
    abbreviation: "fut",
    name: "未来予知"
  },
  {
    dimension: "rav",
    abbreviation: "rav",
    name: "ラヴニカ：ギルドの都"
  },
  {
    dimension: "rav",
    abbreviation: "gpt",
    name: "ギルドパクト"
  },
  {
    dimension: "rav",
    abbreviation: "dis",
    name: "ディセンション"
  },
  {
    dimension: "kam",
    abbreviation: "chk",
    name: "神河物語"
  },
  {
    dimension: "kam",
    abbreviation: "bok",
    name: "神河謀叛"
  },
  {
    dimension: "kam",
    abbreviation: "sok",
    name: "神河救済"
  },
  {
    dimension: "mrd",
    abbreviation: "mrd",
    name: "ミラディン"
  },
  {
    dimension: "mrd",
    abbreviation: "dst",
    name: "ダークスティール"
  },
  {
    dimension: "mrd",
    abbreviation: "5dn",
    name: "フィフス・ドーン"
  },
  {
    dimension: "ons",
    abbreviation: "ons",
    name: "オンスロート"
  },
  {
    dimension: "ons",
    abbreviation: "lgn",
    name: "レギオン"
  },
  {
    dimension: "ons",
    abbreviation: "scg",
    name: "スカージ"
  },
  {
    dimension: "ody",
    abbreviation: "ody",
    name: "オデッセイ"
  },
  {
    dimension: "ody",
    abbreviation: "tor",
    name: "トーメント"
  },
  {
    dimension: "ody",
    abbreviation: "jud",
    name: "ジャッジメント"
  },
  {
    dimension: "inv",
    abbreviation: "inv",
    name: "インベイジョン"
  },
  {
    dimension: "inv",
    abbreviation: "pls",
    name: "プレーンシフト"
  },
  {
    dimension: "inv",
    abbreviation: "apc",
    name: "アポカリプス"
  },
  {
    dimension: "core",
    abbreviation: "m20",
    name: "基本セット2020"
  },
  {
    dimension: "core",
    abbreviation: "m19",
    name: "基本セット2019"
  },
  {
    dimension: "ori",
    abbreviation: "ori",
    name: "マジック・オリジン"
  },
  {
    dimension: "core",
    abbreviation: "m15",
    name: "基本セット2015"
  },
  {
    dimension: "core",
    abbreviation: "m14",
    name: "基本セット2014"
  },
  {
    dimension: "core",
    abbreviation: "m13",
    name: "基本セット2013"
  },
  {
    dimension: "core",
    abbreviation: "m12",
    name: "基本セット2012"
  },
  {
    dimension: "core",
    abbreviation: "m11",
    name: "基本セット2011"
  },
  {
    dimension: "core",
    abbreviation: "m10",
    name:"基本セット2010"
  }
];


function add_stock() {
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