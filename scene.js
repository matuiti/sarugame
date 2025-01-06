class Scene {
  #els;    //シーンのDOM要素
  #current;//現在のシーン管理
  constructor() {
    this.#els = {
      start: document.getElementById("start"),
      play : document.getElementById("play" ),
      clear: document.getElementById("clear"),
      over : document.getElementById("over" )
    };
    this.#current = {
      start :  true,
      play  : false,
      clear : false,
      toOver: false,//プレイヤーがやられてからゲームオーバー画面に移る直前までの間
      over  : false
    };
  }
  update( setScene ){
    this.#hideAllScenes();  //全てのシーンを非表示
    this.#setScene( setScene );//現在のシーンをセット
  }
  draw( scene ){
    this.#els.
  }
  #hideAllScenes(){
    Object.values(this.#els).forEach(el => {
      el.style.display = 'none';
    });
  }
  #setScene( scene ){
    this.#current.scene = true;
  }
}