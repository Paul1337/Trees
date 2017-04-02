/**
 * Created by new on 18/03/2017.
 */
// function parse(str) {
//     var node = new Node();
//     var counterZ = 0;
//     var parts = 0;
//     var xZ = 0;
//     var strLeft = "";
//     var strRight = "";
//     var posRightZ = 0;
//     var counterNested = 0;
//     var beganParsing = false;
//
//     var a = new Node();
//     var b = new Node();
//     var c = new Node();
//     var g = new Node();
//     var h = new Node();
//     var u = new Node();
//     var y = new Node();
//     var o = new Node();
//
//     for (var i = 0; i < str.length; i++) {
//         var x = str[i];
//
//         switch (x) {
//             case ",":
//                 if (counterNested == 1) {
//                     strLeft = stringAfterPrevBracket(i, str);
//                     strRight = stringUpToNextBracket(i, str);
//
//                     beganParsing = true;
//
//                     if (strLeft != '') {
//                         var left = parse(strLeft);
//                         node.addLeft(left);
//                     }
//
//                     if (strRight != '') {
//                         var right = parse(strRight);
//                         node.addRight(right);
//                     }
//
//                     return node;
//                 }
//
//                 break
//
//             case ")":
//                 counterNested --;
//                 if (counterNested == 0) {
//                     var prevPrevName = str[i - 2];
//
//                     if (prevPrevName == '(') {
//
//                         var prevName = str[i - 1];
//                         // node.name = prevName;
//                         var x = node.x;
//                         var y = node.y;
//                         var kMove = node.kMove;
//
//                         node.addLeft(parse(prevName));
//
//                         return node;
//                     }
//                 }
//                 break
//
//             case "(": counterNested ++;
//                 break
//
//             default:
//
//                 if (node.name == undefined)
//                     node.name = x;
//
//                 if (x == str)
//                     return node;
//
//
//                 continue;
//
//
//         }
//
//     }
// }

// function parse(tokens) {
//     var node = new Node();
//     var rightString = '';
//     var leftString = '';
//     var a = '';
//     var b = '';
//     var leftPartFound = false;
//
//     for (var i = 0; i < tokens.length; i ++) {
//         var x = tokens[i];
//
//         if (isNaN(tokens[i])) {
//
//             if ((isNaN(x)) && ((x == '+') || (x == '-'))) {
//                 leftPartFound = true;
//             } else {
//                 leftString += x;
//
//                 if (leftPartFound) {
//                     rightString += x;
//                 }
//             }
//
//             if (i == tokens.length - 1) {
//                 if (leftString != '')
//                     node.addLeft(parse(leftString));
//                 if (rightString != '')
//                     node.addRight(parse(rightString));
//             }
//         }
//
//
//
//     }
//
//     return node;
//
//
//
// }

function parse(tokens) {
    var node = new Node();
    var node2 = new Node();
    var leftNode = new Node();
    var rightNode = new Node();
    var leftPart = '';
    var rightPart = '';

    for (var i = 0; i < tokens.length; i ++) {
        var x = tokens[i];

        if (tokens.length == 1) {
            node.name = x;
            // return node;
            // console.log(1);
        }

        if ((x == "+") || (x == "-")) {
            leftNode = Object.assign({}, node);

            node.name = x;

            // console.log(leftNode.name);

            leftPart = getLeftPart(tokens, i);
            rightPart = getRightPart(tokens, i);


            if (leftNode.name == undefined) {
                leftNode = parse(getTokensFrom(leftPart));
            }

            rightNode = parse(getTokensFrom(rightPart));

            node.addLeft(leftNode);
            node.addRight(rightNode);

            return node;
        }

        if ((x == "*") || (x == "/")) {
            // node2 = Object.assign({}, node);

            node.name = x;

            leftPart = getLeftPart(tokens, i);
            rightPart = getRightPart(tokens, i);

            leftNode = parse(getTokensFrom(leftPart));
            rightNode = parse(getTokensFrom(rightPart));

            node.addLeft(leftNode);
            node.addRight(rightNode);

            // return node;

            // node.addRight(node2)
        }





    }

    return node;



}

function getRightPart(tokens, i) {
    var txt = '';

    for (var j = i + 1; j < tokens.length; j ++) {
        if ((tokens[j] != '-') && (tokens[j] != '+') && (tokens[i] !== undefined)) {
            txt += tokens[j];
        } else {
            break;
        }
    }

    return txt;


}

function getLeftPart(tokens, i) {
    var txt = '';
    var array = [];
    var c = 0;

    for (var j = i - 1; j >= 0; j --) {
        if ((tokens[j] != '-') && (tokens[j] != '+')) {
            // txt += tokens[j];
            array[j] = tokens[j];
            c = j;
        } else {
            break;
        }
    }

    for (var j = c; j < array.length; j ++) {
        txt += array[j];
    }

    return txt;
}


function getTokensFrom(str) {
    var node = new Node();
    var tokens = [];
    var counter = 0;
    var txt = '';

    for (var i = 0; i < str.length; i ++) {
        tokens[i] = '';
    }

    for (var i = 0; i < str.length; i ++) {
        var x = str[i];

        if (!isNaN(x)) {
            tokens[counter] += x;
        } else {
            counter ++;
            tokens[counter] += x;
            counter ++;

        }



    }

    for (var i = 0; i < str.length; i ++) {
        var x = tokens[i];

        if (x == "") {
            tokens.splice(i, 1);
        }


    }

    // for (var i = 0; i < tokens.length; i ++) {
    //     var x = tokens[i] + ' ';
    //     txt += x;
    // }

    return tokens;


}