$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
      // ハンバーガーメニューのクリックイベント
    $(".toggle_btn").on("click", function() {
        // headerにopenクラスが存在する場合
        if ($("header").hasClass("open")) {
          // openクラスを削除
          // openクラスを削除すると、openクラスのCSSがはずれるため、
          // メニューが非表示になる
        $("header").removeClass("open");
    
        // headerにopenクラスが存在しない場合
        } else {
          // openクラスを追加
          // openクラスを追加すると、openクラスのCSSが適応されるため、
          // メニューが表示される
        $("header").addClass("open");
        }
    });

        // メニューが表示されている時に画面をクリックした場合
    $(".mask , a[href^='#']").on("click", function () {

        $("header").removeClass("open");
    });
    });


/*=================================================    
  slick
===================================================*/
$(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
        breakpoint: 860,
        settings: {
        centerPadding: "50px",
        slidesToShow: 1,
        },
    },
    ],
});

/*=================================================
スムーススクロール
===================================================*/
    // クリックイベント（#で始まるボタンがクリックされた際に実行）
    $('a[href^="#"]').click(function () {


      // クリックしたaタグのリンクを取得
      let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
      let target = $(href == "#" || href == "" ? "html" : href);
      // ページトップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
  
  
      // 0.5秒かけてページトップへ移動
      $("body,html").animate({ scrollTop: position },500 , "swing");
      // イベントが親要素へ伝播しないための記述
      // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
      return false;
  });
