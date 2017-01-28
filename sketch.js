function setup() {
    createCanvas(600, 600);

    input = createInput();
    input.position(0, 0);

    button = createButton('ввод');
    button.position(150, 0);
    button.mousePressed(onClicked);

    tree = new Tree();
}

function onClicked() {
    clearScreen();
    tree.create(input.elt.value);
    tree.draw();
    tests();
}

function tests() {
    teststringAfterPrevBracket();
    teststringUpNextToBracket();
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
        }
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

function teststringUpNextToBracket() {
  var tests = [
      {
          args: [3, "a(b,c(d))"],
          expected: "c(d)"
      },
      {
          args: [12, "a(b,c(d(a,b),g(c(d)))"],
          expected: "g(c(d))"
      },
      {
          args: [7, "a(b,c(d,t))"],
          expected: "t"
      },
      {
          args: [11, "a(b,c(d,t(r,h))"],
          expected: "h"
      }
  ];

  tests.forEach(function(test) {
      var result = stringUpToNextBracket.apply(null, test.args);
      var expected = test.expected;
      console.log(result == expected);
      if (result != expected) {
          throw "stringAfterPrevBracket's test failed!!! result≠expected: " + result + "≠" + expected
      }
  });


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
    var counterNested = 0;

    for (i = 0; i < str.length; i++) {
        var x = str[i];

        switch (x) {
            case ",":
                if (counterNested == 1) {
                    strLeft = stringAfterPrevBracket(i, str);
                    strRight = stringUpToNextBracket(i, str);

                    if (strLeft != '') {
                        node.addLeft(parse(strLeft))
                    }

                    if (strRight != '') {
                        node.addRight(parse(strRight))
                    }

                    return node;
                }

                break

            case ")": counterNested --;
                break

            case "(": counterNested ++;
                break

            default:

                node.name = x;
                continue;


        }

        // if (xZ < j) {
        //     strRight += a;
        // } else {
        //     strLeft += a;
        // }
        //
        // counterZ++;
        // //continue;


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

    for (var i = positionStart; i < position; i ++) {
        var a = string[i];
        str += a;
    }


    return str;
}

function stringUpToNextBracket(position, string) {

    console.log('start');
    var str = "";
    var counterUnNested = 0;
    var positionStart = 0;
    var positionEnd = 0;

    for (var i = position; i <= string.length && counterUnNested != -1; i ++) {
        var a = string[i];

        if (a == "(") {
            counterUnNested ++;
        } else if (a == ")") {
            counterUnNested --;
        }
    }

    positionEnd = i - 1;
    positionStart = position + 1;

    console.log('stop');

    for (var i = positionStart; i < positionEnd; i ++) {
        var a = string[i];
        str += a;
    }

    return str;
}
