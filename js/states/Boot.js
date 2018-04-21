var BabbyBird = BabbyBird || {};
BabbyBird.BootState = {
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
    // ทำให้ หน้าจออยู่กลางจอ
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    // กำหนดเกมส์ใช้ system arcade
  },
  preload: function() {
  },
  create: function() {
    this.state.start('Preload')
    // ให้ State Preload ทำงานต่อเลย
  }
};