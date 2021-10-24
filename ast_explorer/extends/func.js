function Person() {
  this.name = '';
  this.age = 0;
}

Person.prototype.getName = function () {
  console.log(this.name);
  return this.name;
};

function Children() {}

Children.prototype = Object.create(Person.prototype);
Children.prototype.getClassName = function () {
  console.log('Children');
  return 'Children';
};

const jack = new Person();

const tom = new Children();

jack.getName();

tom.getName();

tom.getClassName();
