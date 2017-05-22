var Bee = function() {
  //create the object using Grub as it's superclass
  Grub.call(this);
  this.age =  5;
  this.color =  'yellow';
  //food, eat inherited from Grub
  this.job = 'keep on growing';
};

//subclass extends superclass

//set prototype
Bee.prototype = Object.create(Grub.prototype);
//set constructor
Bee.prototype.constructor = Bee;



