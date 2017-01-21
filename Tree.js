function Tree() {

  this.create = function(expression) {
    dx = 50;
    // root = new Node();
    root = parse(expression);
    
  };

  this.draw = function() {
    root.draw();
  }

}
