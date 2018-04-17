var BabbyBird = BabbyBird || {};

BabbyBird.GameState = {

  init: function() {
    // จะเเก็บ barrier ไว้ในตัวแปรนี้
    this.barrierPool = this.add.group();

    //ความเร็วที่ตัวเราจะตกลงพื้น
    this.game.physics.arcade.gravity.y = 400;

    // เป็นตัวแปรไว้ตั้งค่า keyboard
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //ความเร็วในการเคลื่อนที่
    this.levelPlayerSpeed = 200;

    // ความเร็วตอนกระโดด
    this.levelJumpSpeed = 200;
  },
  create: function() {
    //moving background
    this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');
    this.background.tileScale.y = 4;
    this.background.autoScroll(-this.levelPlayerSpeed/6, 0);
    this.game.world.sendToBack(this.background);
    //create the player
    this.player = this.add.sprite(50, this.game.world.centerY, 'player');
    this.player.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.player);
  },
  update: function() {
  }
};