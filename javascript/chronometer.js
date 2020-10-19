class Chronometer {
    
  constructor() {
    this.currentTime =0;
    this.intervalId = 0;
    this.timeoutId = 0;
    let start = false;
    // ... your code goes here
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>this.currentTime++ ,1000);
        // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
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
    // ... your code goes here
  }
  stopClick() {
    this.intervalId = clearInterval(this.intervalId);
    
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    if (!this.start){
      this.startClick(this.splitClick);
    }else
    {
      this.stopClick();
    } 
    // ... your code goes here
  }
}
