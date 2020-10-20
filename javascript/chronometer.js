class Chronometer {
    
  constructor() {
    this.currentTime =0;
    this.intervalId = 0;
    this.timeoutId = 0;
    let start = false;
    
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>this.currentTime++ ,1000);
      
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    
  }
  getSeconds() {
    return this.currentTime % 60;
    
  }
  twoDigitsNumber() {
    let secondsToReturn;
    let minutesToReturn;
    let timeToReturn;
    if(this.getSeconds()<10)
    {
      secondsToReturn = '0'+ this.getSeconds();      
    }else{
      secondsToReturn = this.getSeconds();
    }
    if(this.getMinutes()<10)
    {
      minutesToReturn = '0'+this.getMinutes();
    }else{
      minutesToReturn = this.getMinutes();
    }
    timeToReturn = minutesToReturn +' : '+secondsToReturn;

    return timeToReturn;
    
  }
  stopClick() {
    this.intervalId = clearInterval(this.intervalId);
    
    
  }
  resetClick() {
    this.currentTime = 0;
    
  }
  splitClick() {
    if (!this.start){
      this.startClick(this.splitClick);
    }else
    {
      this.stopClick();
    } 
    
  }
}
