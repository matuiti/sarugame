class SceneManager {

  #scenes;       // シーンのリスト
  #currentScene; // 現在のシーン
  #els;          // シーンのDOM要素

  constructor() {
    this.#els = {
      start: document.getElementById("start"),
      play: document.getElementById("play"),
      clear: document.getElementById("clear"),
      over: document.getElementById("over")
    };
    this.#scenes = ["start", "play", "clear", "over"];
    this.#currentScene = "start"; // 初期値
  }

  update() {
    this.#hideAll();  // 全てのシーンを非表示
    this.#showScene(this.#currentScene); // 現在のシーンを表示
  }

  #hideAll() {
    Object.values(this.#els).forEach(el => {
      el.style.display = 'none';
    });
  }

  #showScene(scene) {
    if (this.#els[scene]) {
      this.#els[scene].style.display = 'block'; // 指定されたシーンを表示
    }
  }

  getScene() {
    return this.#currentScene;
  }

  setScene(scene) {
    if (this.#scenes.includes(scene)) {
      this.#currentScene = scene;
      this.update(); // シーンを設定した後に表示を更新
    } else {
      console.warn(`無効なシーン: ${scene}`); // 無効なシーンの場合は警告を表示
    }
  }
}

export default SceneManager;

