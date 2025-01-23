class Sounds {
  constructor() {
    //音素材の読み込み
    this.bgm_01 = new Audio('sound/bgm_01.mp3');
    this.banana = new Audio('sound/banana.mp3');
    this.apple = new Audio('sound/apple.mp3');
    this.unti = new Audio('sound/unti_01.mp3');
    this.appletime = new Audio('sound/mahounosutekki.mp3');
    this.move = new Audio('sound/move_03.mp3');
    this.scream = new Audio('sound/dawn_01.mp3');
    this.falling = new Audio('sound/falling.mp3');
    this.clear = new Audio('sound/clear.mp3');
    this.win = new Audio('sound/win.mp3');
    this.click = new Audio('sound/click.mp3');
    this.standup = new Audio('sound/standup.mp3');
    this.se_bgm = new Audio('sound/se_bgm.wav');
    //音量調整（共通）
    this.setVolumeBGM(0.8);
    this.setVolumeSE(0.4);
    //音量調整（個別）
    this.apple.volume = 0.1;
    this.click.volume = 0.2;
  }

  // SEのヴォリュームを一律に設定
  setVolumeSE(volume) {
    this.banana.volume = volume;
    this.unti.volume = volume;
    this.appletime.volume = volume;
    this.scream.volume = volume;
    this.falling.volume = volume;
    this.standup.volume = volume;
    this.move.volume = volume;
  }
  // BGMのヴォリュームを一律に設定するメソッド
  setVolumeBGM(volume) {
    this.bgm_01.volume = volume;
  }
  // 指定された効果音を再生
  se(se) {
    let sound;
    switch (se) {
      case "banana":
        sound = this.banana;
        break;
      case "apple":
        sound = this.apple;
        break;
      case "appleTime":
        sound = this.appletime;
        break;
      case "unti":
        sound = this.unti;
        break;
      case "scream":
        sound = this.scream;
        break;
      case "falling":
        sound = this.falling;
        break;
      case "clear":
        sound = this.clear;
        break;
      case "win":
        sound = this.win;
        break;
      case "click":
        sound = this.click;
        break;
      case "move":
        sound = this.move;
        break;
      case "standup":
        sound = this.standup;
        break;
      case "se_bgm":
        sound = this.se_bgm;
        break;
      default:
        console.error("指定されたサウンドは見つかりません: " + se);
        return;
    }
    sound.currentTime = 0;
    sound.play();
  }

  startBGM() {
    this.bgm_01.loop = true;//ループ再生
    this.bgm_01.play();
  }

  stopBGM() {
    if (this.bgm_01) {
      this.bgm_01.pause();
      this.bgm_01.currentTime = 0;
    } else {
      console.error('bgm_01が定義されていません');
    }
  }
}

export default Sounds;
