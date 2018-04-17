var BabbyBird = BabbyBird || {};

BabbyBird.game = new Phaser.Game(360, 640, Phaser.AUTO);
// กำหนดขนาดหน้าจอ 360 * 640 และ set auto คือ ถ้า Web Browser รองรับ WebGL ก็จะใช้ WebGL ถ้าไม่รองรับจะใช้ Canvas

BabbyBird.game.state.add('Boot', BabbyBird.BootState);
BabbyBird.game.state.add('Preload', BabbyBird.PreloadState);
BabbyBird.game.state.add('Game', BabbyBird.GameState);
// add State หะลักๆชองเกมส์ ณ ที่นี้มี 3 state จะมาจากไฟล์ Boot Preload Game

BabbyBird.game.state.start('Boot');
// เเริ่ม Start จาก State Boot