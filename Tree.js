function Tree() {

  this.create = function(expression) {
    this.dx = 50;
    this.moveX = 150;
    this.root = parse(expression);
  };

  this.draw = function() {
    this.root.draw();
  }

}
