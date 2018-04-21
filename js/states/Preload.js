var BabbyBird = BabbyBird || {};
BabbyBird.PreloadState = {
  init: function() {
    var style = {font: '32px Arial', fill: '#fff'}
    this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Loading ...", style).anchor.setTo(0.5)
    // ใส่คำว่า Loading ไว้ถ้าโค้ดทำงงานที่ไฟล์ Preload
  },
  preload: function() {
    this.load.image('barrier', 'assets/barrier.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('background', 'assets/background.png');
  },
  create: function() {
    this.state.start('Game');
  }
};