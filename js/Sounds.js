class Sounds {
  constructor(){
    this.bgm_01    = new Audio('sound/bgm_01.mp3');
    this.banana    = new Audio('sound/banana.mp3');
    this.apple     = new Audio('sound/apple.mp3');
    this.appletime = new Audio('sound/mahounosutekki.mp3');
    this.unti      = new Audio('sound/unti_01.mp3');
    this.move      = new Audio('sound/move_02.mp3');
    this.scream    = new Audio('sound/dawn.mp3');

    // ヴォリューム調整
    this.banana.volume = 0.3;
    this.unti.volume   = 0.3;
  }
  setBanana(){
    this.banana.currentTime = 0;
    this.banana.play();
  }
  setBGM(){
    this.bgm_01.loop = true;
    this.bgm_01.play();
  }
}

export default Sounds;