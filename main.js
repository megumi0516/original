$(function () {
  
  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 300) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
      // 0.5秒かけてページトップへ移動
      $("body,html").animate({ scrollTop: 0 }, 500);

      // イベントが親要素へ伝播しないための記述
      // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
      return false;
    });
});

 /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/.
  $(".slick-area").slick({
    arrows: false,
    // arrows: false：矢印ナビゲーションを非表示にします。
    //autoplay: true は、スライドを自動的に切り替える設定
    //dots: trueは スライドショーにドットナビゲーション（現在のスライドを示すドット）が表示されます。今何番目のスライドかが分かりやすくなります。

    centerMode: true,
    // centerMode: true：現在のスライドを中央に配置します。
    centerPadding: "100px",
    // centerPadding: "100px"：中央に配置されたスライドの左右の余白を指定します。
    slidesToShow: 3,
    // slidesToShow: 3：表示するスライドの数を指定します（1度に表示されるスライドの数）。
    autoplay: true,
    // autoplay: true：自動再生を有効にします。
    autoplaySpeed: 3000,
    // autoplaySpeed: 3000：自動再生の速度を指定します（ミリ秒単位）。
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
          centerPadding: "100px",
          slidesToShow: 2,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
      {
        breakpoint: 700,
        settings: {
          // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
          centerPadding: "100px",
          slidesToShow: 1,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },

    ],
  });
  
  
    /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle-btn").on("click", function () {
    // .toggle_btnをクリックしたときに実行する
    //  function:実行する

    $("#header").toggleClass("open");
  });
  // headerに対してopenクラスを追加または削除する。
  // クラスの追加と削除は、ハンバーガーメニューの表示と非表示を切り替えるために使用される。

  // toggleClassメソッドを使用することで、hamburgerクラスにopenクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる


  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("#header").toggleClass("open");

  });

  // メニュー内のリンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $("#header").toggleClass("open");
  });

