var RetiredForagerBee = function() {
  //call the ForagerBee superclass
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  //food and eat inherited from grub.  treasureChest inherited from ForagerBee
};

//set prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

//set constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

//methods
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}