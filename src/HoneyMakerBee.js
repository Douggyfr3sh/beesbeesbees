var HoneyMakerBee = function() {
  //call the Bee superclass
  Bee.call(this);
  //set age to 10
  this.age = 10;
  //set job to 'make honey'
  this.job = 'make honey';
  //color is inherited from Bee, food and eat inherited from Grub
  //(nothing to code for this)

  //create honeyPot property equal to 0
  this.honeyPot = 0;

};

//set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//makeHoney method - increment honeyPot
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}

//giveHoney method, decrement honeyPot
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot > 0 ? this.honeyPot-- : this.honeyPot = this.honeyPot;
}

