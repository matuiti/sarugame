class Saru {
  constructor(){
    this.reset();
  }
  reset(){
    this.saru_t = saruType[0][0];
    this.saru_x = START_X;
    this.saru_y = START_Y;
    this.dir_r = true;
    this.appleTime = false;
  }

  isAppleTime() { return this.appleTime; }
  switchAppleTime( isAppleTime ) { return this.appleTime = isAppleTime; }//アップルタイム状態を切り替え
}