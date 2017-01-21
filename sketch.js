function setup() {
    createCanvas(600, 600);

    input = createInput();
    input.position(0, 0);
    button = createButton('ввод');
    button.position(150, 0);
    button.mousePressed(onClicked);

    moveX = 150;
    dx = 100;
    ellipseRadius = 25;

    tree = new Tree();
}

function onClicked() {
    // clearScreen();
    // tree.create(input.elt.value);
    // tree.draw();
    tests();
}

function tests() {
    teststringAfterPrevBracket();
}

function teststringAfterPrevBracket() {
    var tests = [
        {
            args: [10, "a(b,c(d(f),h(j,o)))"],
            expected: "d(f)"
        },
        {
            args: [3, "a(b,c(d(f),h(j,o)))"],
            expected: "b"
        },
        {
            args: [2, "(a,b)"],
            expected: "a"
        },
        {
            args: [20, "(a(b,c(d(f),h(j,o))),bla)"],
            expected: "a(b,c(d(f),h(j,o)))"
        },
    ];
    tests.forEach(function(test) {
        var result = stringAfterPrevBracket.apply(null, test.args);
        var expected = test.expected;
        console.log(result == expected);
        if (result != expected) {
            throw "stringAfterPrevBracket's test failed!!! result≠expected: " + result + "≠" + expected
        }
    }
    );

    console.log("Test passed 😎")
}


function clearScreen() {
    background(255);
}

function parse(str) {
    // var x = "";
    var node = new Node();
    var counterZ = 0;
    var parts = 0;
    var xZ = 0;
    var strLeft = "";
    var strRight = "";
    var posRightZ = 0;

    for (i = 0; i < str.length; i++) {
        var x = str[i];

        switch (x) {
            case ",":
                if (i == posRightZ) {
                    strLeft = stringAfterPrevBracket(i, str);
                }

                break

            case ")":
                break

            case "(":
                break

            default:

                node.name = x;
                continue;


        }

        if (xZ < j) {
            str2 += a;
        } else {
            str1 += a;
        }
        counterZ++;
        //continue;


        // if (x != ',' && x != ')' && x != '(') {
        //     node.name = x;
        // }
        //

        //     if (x == ',' || x == ')') {
        //         console.log("found '" + x + "'")
        //     } else
        //         console.log("missing token")
        // }
        //
        // continue;


    }
    if (x == '(') {
    }
}

function stringAfterPrevBracket(position, string) {
    console.log('start');
    var str = "";
    var counterUnNested = 0;
    var positionStart = 0;

    for (var i = position; i >= 0 && counterUnNested != -1; i --) {
        var a = string[i];

        if (a == ")") {
            counterUnNested ++;
        } else if (a == "(") {
            counterUnNested --;
        }
    }

    positionStart = i + 2;

    console.log('stop');

    for (var i = positionStart; i < position - 0; i ++) {
        var a = string[i];
        str += a;
    }


    return str;
}

