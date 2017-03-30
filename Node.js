function Node(name) {
    this.x = 250;
    this.y = 50;
    this.moveY = 50;
    this.radius_child = 13;
    this.childIs = false;
    this.ellipseDiametr = 25;
    this.name = name;
    this.kMove = 0.8;
    this.leftChild = undefined;
    this.rightChild = undefined;

    // this.addRight = function(a) {
    //   a.y = this.y + this.moveY;
    //
    //   if (!this.childIs) {
    //     this.childIs = true;
    //     tree.dx = tree.dx / 2;
    //     tree.moveX = tree.moveX / 1.5;
    //   }
    //
    //   a.x = this.x + (tree.moveX);
    //
    //   a.draw();
    //   line(a.x, a.y, this.x, this.y);
    // };
    //
    // this.addLeft = function(a) {
    //   //a.x = this.x - this.moveX;
    //   a.y = this.y + this.moveY;
    //
    //   if (!this.childIs) {
    //     this.childIs = true;
    //     //tree.dx = tree.dx / 1.5;
    //     tree.moveX = tree.moveX / 1.5;
    //     this.ellipseDiametr = this.ellipseDiametr / 2;
    //     //tree.dx = tree.dx / 2;
    //   }
    //
    //   //line(0, random(600), a.x, random(600))
    //
    //   a.x = this.x - (tree.moveX);
    //
    //   a.draw();
    //
    //   line(a.x, a.y, this.x, this.y);
    // };


    this.addLeft = function(a) {
        // a.y = this.y + 50;
        // a.x = this.x - 150 + a.y * this.kMove;
        // line(a.x, a.y ,this.x, this.y);
        // a.draw();
        this.leftChild = a;
    };

    this.addRight = function(b) {
        // b.y = this.y + 50;
        // b.x = this.x + 150 - b.y * this.kMove;
        // line(b.x, b.y ,this.x, this.y);
        // b.draw();
        this.rightChild = b;
    };


    // this.draw = function() {
    //
    //   fill(255);
    //   stroke(0);
    //   ellipse(this.x, this.y, this.ellipseDiametr, this.ellipseDiametr);
    //   fill(0);
    //
    //   if (this.name !== undefined) {
    //     text(this.name, this.x - 4, this.y + 3);
    //   }
    //
    //   // this.leftChild.y = this.y + 50;
    //   // this.leftChild.x = this.x + 150 - this
    //
    // }

    this.draw = function(x, y) {

        fill(255);
        stroke(0);
        ellipse(x, y, this.ellipseDiametr, this.ellipseDiametr);
        fill(0);

        if (this.name !== undefined) {
            text(this.name, x - 4, y + 3);
        }

        if (this.leftChild !== undefined) {
            this.leftChild.draw(x - 100 + y * this.kMove, y + 50);
            line(x - 100 + y * this.kMove, y + 50, x, y);
            // this.leftChild.ellipseDiametr = this.ellipseDiametr / 2;
        }

        if (this.rightChild !== undefined) {
            this.rightChild.draw(x + 100 - y * this.kMove, y + 50);
            line(x + 100 - y * this.kMove, y + 50, x, y);
            // this.rightChild.ellipseDiametr = this.ellipseDiametr / 2;
        }

    }

}
