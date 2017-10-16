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
      if (core.input.right) this.x = this.x + 5;
      if (core.input.left) this.x = this.x - 5;
      if (core.input.up) this.y = this.y - 5;
      if (core.input.down) this.y = this.y + 5;
      // intersect
      if (this.intersect(enemy)) {
        // label.text = 'hit!';
      }
      // within
      if (this.within(enemy)){
        // 
        core.stop();
      }
    });


    // 
    let enemy = new Sprite(32,32);
    // 
    enemy.image = core.assets['../img/chara1.png'];
    // 
    enemy.x = 400;
    // 
    enemy.y = 400;
    //
    enemy.frame = 5;
    //
    enemy.addEventListener('enterframe', function(){
      // x成分とy成分の比に分ける
      let cos_theta = (bear.x - this.x) / Math.sqrt(Math.pow(bear.x - this.x,2)+Math.pow(bear.x - this.x,2));
      let sin_theta = (bear.y - this.y) / Math.sqrt(Math.pow(bear.y - this.y,2)+Math.pow(bear.y - this.y,2));
      // スピードを決める
      let speed = 4.5;

      // x座標、y座標と進む値を決める
      this.x = this.x + speed*cos_theta;
      this.y = this.y + speed*sin_theta;
    });

    let gameOverScene = new Scene();
    gameOverScene.backgroundColor = 'black';

    // 
    let label = new Label();
    // 
    label.x = 400;
    // 
    label.y = 5;
    // 
    label.color = 'red';
    // 
    label.font = '14px "Arial"';
    // 
    label.text = '0';
    // 
    label.on('enterframe', function(){
      label.text = (core.frame / core.fps).toFixed(1);
    })
    core.rootScene.addChild(bear);
    // 
    core.rootScene.addChild(label);
    // 
    core.rootScene.addChild(enemy);
  }
  // 処理を開始する
  core.start();
}

