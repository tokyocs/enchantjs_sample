// enchantjs（ゲームエンジン）を利用する
enchant();

// ウィンドウが開かれたら開始する
window.onload = function(){
  // 画面のサイズを決める
  let core = new Core(480,480);
  // 事前にキャラクターをロードしておく
  core.preload('../img/chara1.png');
  // 画面が表示されたら行う処理
  core.onload = function(){
    // 
    let bear = new Sprite(32,32);
    // 
    bear.image = core.assets['../img/chara1.png'];
    // 
    bear.x = 0;
    // 
    bear.y = 0;

    // 
    bear.addEventListener('enterframe', function(){
      if (core.input.left) this.x -= 5;
      if (core.input.right) this.x += 5;
      if (core.input.up) this.y -= 5;
      if (core.input.down) this.y += 5;
    });
    // 
    core.rootScene.on('touchstart',function(e){
      bear.x = e.x;
      bear.y = e.y;
    });
    core.rootScene.addChild(bear);
  }
  // 処理を開始する
  core.start();
}

