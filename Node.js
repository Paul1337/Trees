function Node(name) {
  this.x = 250;
  this.y = 50;
  this.moveY = 50;
  this.radius_child = 13;
  this.childIs = false;

  this.addRight = function(a) {
    // a.x = this.x + this.moveX;
    a.y = this.y + this.moveY;

    if (!this.childIs) {
      this.childIs = true;
      dx = dx / 2;
      moveX = moveX / 1.5;
    }

    a.x = this.x + (moveX);

    a.draw();
    line(a.x, a.y, this.x, this.y);
  }

  this.addLeft = function(a) {
    //a.x = this.x - this.moveX;
    a.y = this.y + this.moveY;

    if (!this.childIs) {
      this.childIs = true;
      //dx = dx / 1.5;
      moveX = moveX / 1.5;
      ellipseRadius = ellipseRadius / 2;
      //dx = dx / 2;
    } 

    //line(0, random(600), a.x, random(600))

    a.x = this.x - (moveX);
    
    a.draw();

    line(a.x, a.y, this.x, this.y);
  }


  this.draw = function() {

    fill(255);
    stroke(0);
    ellipse(this.x, this.y, 25, 25);
    fill(0);

    if (name !== undefined) {
      text(name, this.x - 4, this.y + 3);
    }

  }

}
