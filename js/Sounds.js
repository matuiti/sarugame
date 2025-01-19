class Sounds {
  constructor() {
    this.bgm_01 = new Audio('sound/bgm_01.mp3');
    this.banana = new Audio('sound/banana.mp3');
    this.apple = new Audio('sound/apple.mp3');
    this.unti = new Audio('sound/unti_01.mp3');
    this.appletime = new Audio('sound/mahounosutekki.mp3');
    this.move = new Audio('sound/move_02.mp3');
    this.scream = new Audio('sound/dawn_02.mp3');

    this.setVolumeBGM(0.8);
    this.setVolumeSE(0.4);
    this.apple.volume = 0.1;
  }

  // 全SEのヴォリュームを一括設定するメソッド
  setVolumeSE(volume) {
    this.banana.volume = volume;
    this.unti.volume = volume;
    this.appletime.volume = volume;
    this.move.volume = volume;
    this.scream.volume = volume;
  }
  // 全BGMのヴォリュームを一括設定するメソッド
  setVolumeBGM(volume) {
    this.bgm_01.volume = volume;
  }

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
      default:
        console.error("指定されたサウンドは見つかりません: " + se);
        return;
    }
    sound.currentTime = 0;
    sound.play();
  }

  startBGM() {
    this.bgm_01.loop = true;
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
