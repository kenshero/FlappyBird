var BabbyBird = BabbyBird || {};
BabbyBird.GameState = {
init: function() {
    // จะเก็บ barrier ไว้ในตัวแปรนี้
    this.barrierPool = this.add.group()
// เป็นตัวแปรไว้ตั้งค่า keyboard
    this.cursors = this.game.input.keyboard.createCursorKeys();
//ความเร็วในการเคลื่อนที่
    this.levelPlayerSpeed = 150
// ความเร็วตอนกระโดด
    this.levelJumpSpeed = 150
  },
  create: function() {
    //moving background
    this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background')
    this.background.tileScale.y = 4
    this.background.autoScroll(-this.levelPlayerSpeed/6, 0)
    this.game.world.sendToBack(this.background)
    //create the player
    this.player = this.add.sprite(50, this.game.world.centerY, 'player')
    this.player.anchor.setTo(0.5)
    this.game.physics.arcade.enable(this.player)
    this.player.body.gravity.y = 400
this.timer = this.game.time.events.loop(2500, this.createBarrier, this)
  },
  update: function() {
    if(this.player.alive) {
      this.game.physics.arcade.overlap(this.player, this.barrierPool, this.gameOver, null, this)
      if(this.cursors.up.isDown || this.game.input.activePointer.isDown) {
        this.playerJump()
      }
      if(this.player.top >= this.game.world.height || this.player.left <= 0 || this.player.top < -10) {
        this.gameOver()
      }
}
  },
  playerJump: function(){
    this.player.body.velocity.y = -this.levelJumpSpeed;
  },
  createBarrier: function() {
    let yBarrier = 20
    var hole = Math.floor(Math.random() * 5 + 1)
    for(let i=0; i < 7; i++) {
      if(i != hole) {
        var barrier = this.add.sprite(300, yBarrier, 'barrier')
        this.barrierPool.add(barrier)
        this.game.physics.arcade.enable(barrier)
        barrier.body.velocity.x = -150
        barrier.checkWorldBounds = true
        barrier.outOfBoundsKill = true
      }
      yBarrier += 100
    }
  },
  gameOver: function() {
    this.player.kill()
    var style = {font: '30px Arial', fill: '#fff'}
    this.add.text(this.game.width/2, this.game.height/2, 'GAME OVER', style).anchor.setTo(0.5)
    this.game.input.onDown.addOnce(this.restart, this)
  },
  restart: function(){
    this.game.state.start('Game')
  }
};