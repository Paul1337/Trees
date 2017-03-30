function setup() {
    createCanvas(800, 800);


    input = createInput();
    input.position(0, 0);

    button = createButton('ввод');
    button.position(150, 0);
    button.mousePressed(onClicked);

    tree = new Tree();
}

function onClicked() {
    clearScreen();

    var tokens = ["asd", "asd", "asd"];

    // console.log(getRightPart('5+6-4*18-9+10/2', 1));
    // console.log(getLeftPart('5+6-4*18-9+10/2', 8));

    //'58*2+3'
    //console.log(getTokensFrom(input.elt.value));
    tree.create(input.elt.value);
    tree.draw();


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
