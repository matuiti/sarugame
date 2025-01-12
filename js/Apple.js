class Apple extends Obj {
  constructor() {
    super("apple");
    this.appleTime = false;
  }

  isAppleTime(){return this.appleTime;}
  setAppleTime( appleTime ){return this.appleTime = appleTime;}//アップルタイムを活性化or非活性化
}

export default Apple;