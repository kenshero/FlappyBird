var BabbyBird = BabbyBird || {};

BabbyBird.GameState = {

  init: function() {
    // จะเเก็บ barrier ไว้ในตัวแปรนี้
    this.barrierPool = this.add.group();

    //ค่าแรงโน้มถ่วง ที่ตัวเราจะตกจากพื้น
    this.game.physics.arcade.gravity.y = 1000;

    // ระยะสูงสุดที่ player จะกระโดดได้สูงสุด
    this.maxJumpDistance = 120;

    // เป็นตัวแปรตั้งค่า คียฺบอร์ด
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //ความเร็วในการเคลื่อนที่
    this.levelSpeed = 200;
  },
  create: function() {
    //moving background
    this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');
    this.background.tileScale.y = 4;
    this.background.autoScroll(-this.levelSpeed/6, 0);
    this.game.world.sendToBack(this.background);

    //create the player
    this.player = this.add.sprite(50, 140, 'player');
    this.player.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this.player);

  },
  update: function() {
  }
};