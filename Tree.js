function Tree() {

  this.create = function(expression) {
    this.root = parse(expression);
  };

  this.draw = function() {
    this.root.draw(400, 50);
  }

}
