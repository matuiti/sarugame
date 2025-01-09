//テスト

class DownAnimation {
  constructor() {
    this.rope = document.querySelector('.rope');
    this.saru = document.querySelector('.saru');
    this.downAnimationFlag = false;
  }

  setAnimationFlag(value) {
    this.downAnimationFlag = value;
    if (this.downAnimationFlag) {
      this.runAnimations();
    }
  }

  animateRopeFall() {
    return new Promise((resolve) => {
      console.log("Rope fall animation started");
      this.rope.classList.add('fall');
      setTimeout(() => {
        console.log("Rope fall animation finished");
        resolve();
      }, 1000); // 1秒後に終了
    });
  }

  animateSaruJump() {
    return new Promise((resolve) => {
      console.log("Saru jump animation started");
      this.saru.style.transform = "translateY(-200px)";
      setTimeout(() => {
        console.log("Saru jump animation finished");
        resolve();
      }, 1000); // 1秒後に終了
    });
  }

  animateSaruFall() {
    return new Promise((resolve) => {
      console.log("Saru fall animation started");
      this.saru.style.transform = "translateY(400px)";
      setTimeout(() => {
        console.log("Saru fall animation finished");
        resolve();
      }, 2000); // 2秒後に終了
    });
  }

  async runAnimations() {
    if (!this.downAnimationFlag) return; // フラグがfalseなら実行しない
    await this.animateRopeFall();
    await this.animateSaruJump();
    await this.animateSaruFall();
    console.log("All animations finished");
  }
}

// インスタンスを作成
const downAnimation = new DownAnimation();

// フラグをtrueにしてアニメーションを開始する
downAnimation.setAnimationFlag(true);
