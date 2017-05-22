var ForagerBee = function() {
  //call Bee superclass
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  //color, food, eat are inherited
  this.canFly = true;
  this.treasureChest = [];
};

//set the prototype
ForagerBee.prototype = Object.create(Bee.prototype);

//set the constructor
ForagerBee.prototype.constructor = ForagerBee;

//write forage method
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}

