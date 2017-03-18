/**
 * Created by new on 18/03/2017.
 */
function parse(str) {
    var node = new Node();
    var counterZ = 0;
    var parts = 0;
    var xZ = 0;
    var strLeft = "";
    var strRight = "";
    var posRightZ = 0;
    var counterNested = 0;
    var beganParsing = false;

    var a = new Node();
    var b = new Node();
    var c = new Node();
    var g = new Node();
    var h = new Node();
    var u = new Node();
    var y = new Node();
    var o = new Node();

    for (var i = 0; i < str.length; i++) {
        var x = str[i];

        switch (x) {
            case ",":
                if (counterNested == 1) {
                    strLeft = stringAfterPrevBracket(i, str);
                    strRight = stringUpToNextBracket(i, str);

                    beganParsing = true;

                    if (strLeft != '') {
                        var left = parse(strLeft);
                        node.addLeft(left);
                    }

                    if (strRight != '') {
                        var right = parse(strRight);
                        node.addRight(right);
                    }

                    return node;
                }

                break

            case ")":
                counterNested --;
                if (counterNested == 0) {
                    var prevPrevName = str[i - 2];

                    if (prevPrevName == '(') {

                        var prevName = str[i - 1];
                        // node.name = prevName;
                        var x = node.x;
                        var y = node.y;
                        var kMove = node.kMove;

                        node.addLeft(parse(prevName));

                        return node;
                    }
                }
                break

            case "(": counterNested ++;
                break

            default:

                if (node.name == undefined)
                    node.name = x;

                if (x == str)
                    return node;


                continue;


        }

    }
}