function Tree() {

    this.create = function(expression) {
        // this.root = parse(expression);
        var tokens = getTokensFrom(expression);
        this.root = parse(tokens);
    };

    this.draw = function() {
        this.root.draw(400, 50);
    }

}
