var body = document.getElementsByTagName('body')[0];
body.setAttribute('onload', 'selectedShape()');


function selectedShape() {
    var selectedShape = document.getElementById('shape-select').value;
    var findGivenPerimeterDiv = document.getElementById('find-given-perimeter');
    document.getElementById('find-perimeter-option').innerHTML = "";
    findGivenPerimeterDiv.classList.add("invisible");

    switch (selectedShape) {
        case 'square':
            inputTags(1, 'Square Perimeter', 'square-', 'perimeter', 'findSquarePerimeter', 0, ['a'], 0);
            break;
        case 'rectangle':
            inputTags(2, 'Rectangle Perimeter', 'rectangle-', 'perimeter', 'findRectanglePerimeter', 0, ['a', 'b'], 0);
            break;
        case 'triangle':
            var select = document.createElement("select");

            select.setAttribute("id", "triangle-option");
            select.setAttribute("class", "custom-select custom-select-sm inline border border-dark");
            select.setAttribute('onchange', 'triangleOption()');

            select.options.add(new Option("Three Sides (SSS)", "threeSides", true, true));
            select.options.add(new Option("Two Sides + Angle Between Them (SSA)", "twoSideAngle", false, false));
            select.options.add(new Option("Two Angle + Side Between Them (SAA)", "twoAngleSide", false, false));

            findGivenPerimeterDiv.classList.remove("invisible");
            document.getElementById('find-perimeter-option').appendChild(select);

            triangleOption();
            break;
        case 'circle':
            inputTags(1, 'Circle Perimeter', 'circle-', 'perimeter', 'findCirclePerimeter', 0, ['r'], 0);
            break;
        case 'semi-circle':
            inputTags(1, 'Semi-Circle Perimeter', 'semi-circle-', 'perimeter', 'findSemiCirclePerimeter', 0, ['r'], 0);
            break;
        case 'ellipse':
            inputTags(2, 'Ellipse Perimeter', 'ellipse-', 'perimeter', 'findEllipsePerimeter', 0, ['a', 'b'], 0);
            break;
        case 'trapezoid':
            inputTags(4, 'Trapezoid Perimeter', 'trapezoid-', 'perimeter', 'findTrapezoidPerimeter', 0, ['a', 'b', 'c',
            'd'], 0);
            break;
        case 'parallelogram':
            var select = document.createElement("select");

            select.setAttribute("id", "parallelogram-option");
            select.setAttribute("class", "custom-select custom-select-sm inline border border-dark");
            select.setAttribute('onchange', 'parallelogramOption()');

            select.options.add(new Option("Sides", "side", true, true));
            select.options.add(new Option("One Sides And Diagonals", "oneSideAndDiagonal", false, false));
            select.options.add(new Option("Base, Height + Any Parallelogram Angle", "baseHeightAndAngle", false, false));

            findGivenPerimeterDiv.classList.remove("invisible");
            document.getElementById('find-perimeter-option').appendChild(select);

            parallelogramOption();
            break;
        case 'rhombus':
            var select = document.createElement("select");

            select.setAttribute("id", "rhombus-option");
            select.setAttribute("class", "custom-select custom-select-sm inline border border-dark");
            select.setAttribute('onchange', 'rhombusOption()');

            select.options.add(new Option("Side And Height", "sideAndHeight", true, true));
            select.options.add(new Option("Diagonals", "diagonal", false, false));
            select.options.add(new Option("Side and Any Angle", "sideAndAngle", false, false));

            findGivenPerimeterDiv.classList.remove("invisible");
            document.getElementById('find-perimeter-option').appendChild(select);

            rhombusOption();
            break;
        case 'kite':
            var select = document.createElement("select");

            select.setAttribute("id", "kite-option");
            select.setAttribute("class", "custom-select custom-select-sm inline border border-dark");
            select.setAttribute('onchange', 'kiteOption()');

            select.options.add(new Option("Diagonals", "diagonal", true, true));
            select.options.add(new Option("Two Unequal Sides + Angle Between Them", "unequalSideAndAngle", false, false));

            findGivenPerimeterDiv.classList.remove("invisible");
            document.getElementById('find-perimeter-option').appendChild(select);

            kiteOption();
            break;
        case 'pentagon':
            inputTags(1, 'Pentagon Area', 'pentagon-', 'perimeter', 'findPentagonArea', 0, ['a'], 0);
            break;
        case 'hexagon':
            inputTags(1, 'Hexagon Area', 'hexagon-', 'perimeter', 'findHexagonArea', 0, ['a'], 0);
            break;
        case 'octagon':
            inputTags(1, 'Octagon Area', 'octagon-', 'perimeter', 'findOctagonArea', 0, ['a'], 0);
            break;
        case 'annulus':
            inputTags(2, 'Annulus Area', 'annulus-', 'perimeter', 'findAnnulusArea', 0, ['R', 'r'], 0);
            break;
        case 'quadrilateral':
            inputTags(2, 'Quadrilateral Area', 'quadrilateral-', 'perimeter', 'findQuadrilateralArea', 1, ['e', 'f'], ['Alpha']);
            break;
        case 'polygon':
            inputTags(2, 'Polygon Area', 'polygon-', 'perimeter', 'findPolygonArea', 0, ['a'], 0);
            break;
        default:
            break;
    }
}

function inputTags(totalInputBox, totalInputBoxName, inputBoxId, totalInputBoxId, functionName, inputBoxOfAngle, variableName, variableAngleName) {
    var div = document.getElementById("perimeter-calculation");

    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }
    var i = 0, j = 0;
    do {
        div.appendChild(document.createTextNode(variableName[i]));
        div.appendChild(document.createElement("br"));
        var a = document.createElement("input");
        a.type = "text";
        a.setAttribute('id', inputBoxId + String.fromCharCode(65 + i));
        a.setAttribute('class', 'form-control form-control-sm d-inline mb-3 text-right col-3');
        a.setAttribute('onkeypress', "return restrictAlphabets(event)");
        a.setAttribute('onkeyup', functionName + '()');
        div.appendChild(a);
        unitName(inputBoxId, String.fromCharCode(65 + i));
        div.appendChild(document.createElement("br"));
        i++;
    } while (i < totalInputBox);

    for (let j = 0; j < inputBoxOfAngle; j++) {
        div.appendChild(document.createTextNode('Angle ' + variableAngleName[j]));
        div.appendChild(document.createElement("br"));
        var a = document.createElement("input");
        a.type = "text";
        a.setAttribute('id', inputBoxId + String.fromCharCode(65 + j + i));
        a.setAttribute('class', 'form-control form-control-sm d-inline mb-3 text-right col-3');
        a.setAttribute('onkeyup', functionName + '()');
        div.appendChild(a);
        angleName(inputBoxId, String.fromCharCode(65 + j + i));
        div.appendChild(document.createElement("br"));
    }

    div.appendChild(document.createTextNode(totalInputBoxName));
    div.appendChild(document.createElement("br"));
    var perimeter = document.createElement("input");
    perimeter.type = "text";
    perimeter.setAttribute('id', totalInputBoxId);
    perimeter.setAttribute('class', 'form-control form-control-sm d-inline text-right col-3');
    div.appendChild(perimeter);
    unitSquareName(totalInputBoxId);
}

function unitName(inputIdName, dataAttributeVariableName) {
    var frag = document.createDocumentFragment();
    var select = document.createElement("select");
    select.setAttribute("id", "unit-select-" + dataAttributeVariableName);
    select.setAttribute("data-" + dataAttributeVariableName, inputIdName + dataAttributeVariableName);
    select.setAttribute("class", "custom-select custom-select-sm inline col-2-custom select-custom border border-light text-white bg-dark");
    select.setAttribute('onchange', 'unitChange()');
    document.getElementById('perimeter-calculation').appendChild(select);

    select.options.add(new Option("Centimeter", "centimeter", true, true));
    select.options.add(new Option("Meter", "meter", false, false));
    select.options.add(new Option("Kilometer", "kilometer", false, false));
    select.options.add(new Option("Feet", "feet", false, false));
    select.options.add(new Option("Yard", "yard", false, false));
    select.options.add(new Option("Inches", "inches", false, false));
    select.options.add(new Option("Millimeter", "millimeter", false, false));
    select.options.add(new Option("Miles", "miles", false, false));

    frag.appendChild(select);
    document.getElementById('perimeter-calculation').appendChild(frag);
}

function unitSquareName(inputIdName) {
    var frag = document.createDocumentFragment();
    var select = document.createElement("select");
    select.setAttribute("id", "unit-2-select");
    select.setAttribute("class", "custom-select custom-select-sm inline col-2-custom select-custom border border-light text-white bg-dark");
    select.setAttribute("data-perimeter", inputIdName);
    select.setAttribute('onchange', 'unitChange()');
    document.getElementById('perimeter-calculation').appendChild(select);

    select.options.add(new Option("Centimeter2", "centimeter2", true, true));
    select.options.add(new Option("Meter2", "meter2", false, false));
    select.options.add(new Option("Kilometer2", "kilometer2", false, false));
    select.options.add(new Option("Feet2", "feet2", false, false));
    select.options.add(new Option("Yard2", "yard2", false, false));
    select.options.add(new Option("Inches2", "inches2", false, false));
    select.options.add(new Option("Millimeter2", "millimeter2", false, false));
    select.options.add(new Option("Miles2", "miles2", false, false));

    frag.appendChild(select);

    document.getElementById('perimeter-calculation').appendChild(frag);
}

function angleName(inputIdName, dataAttributeVariableName) {
    var frag = document.createDocumentFragment();
    var select = document.createElement("select");
    select.setAttribute("id", "angle-select-" + dataAttributeVariableName);
    select.setAttribute("data-" + dataAttributeVariableName, inputIdName + dataAttributeVariableName);
    select.setAttribute("class", "custom-select custom-select-sm inline col-2-custom select-custom border border-light text-white bg-dark");
    select.setAttribute('onchange', 'unitChange()');
    document.getElementById('perimeter-calculation').appendChild(select);

    select.options.add(new Option("Degree", "degree", true, true));
    select.options.add(new Option("Radian", "radian", false, false));

    frag.appendChild(select);
    document.getElementById('perimeter-calculation').appendChild(frag);
}

function unitChange() {
    var selectedShape = document.getElementById('shape-select').value;
    var selectedUnitA = document.getElementById('unit-select-A').value;
    var selectedUnit2 = document.getElementById('unit-2-select').value;

    if (document.getElementById('unit-select-B') !== null) {
        var selectedUnitB = document.getElementById('unit-select-B').value;
    }

    if (document.getElementById('unit-select-C') !== null) {
        var selectedUnitC = document.getElementById('unit-select-C').value;
    }

    if (document.getElementById('unit-select-D') !== null) {
        var selectedUnitD = document.getElementById('unit-select-D').value;
    }

    if (document.getElementById('angle-select-B') !== null) {
        var selectedAngleB = document.getElementById('angle-select-B').value;
    }

    if (document.getElementById('angle-select-C') !== null) {
        var selectedAngleC = document.getElementById('angle-select-C').value;
    }

    switch (selectedShape) {
        case 'square':
            var inputA = document.getElementById("square-A").getAttribute('data-a');
            findSquarePerimeter(inputA, selectedUnitA, selectedUnit2);
            break;
        case 'rectangle':
            var inputA = document.getElementById("rectangle-A").getAttribute('data-a');
            var inputB = document.getElementById("rectangle-B").getAttribute('data-b');
            findRectanglePerimeter(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
            break;
        case 'triangle':
            var triangleOption = document.getElementById('triangle-option').value;
            var inputA = document.getElementById("triangle-A").getAttribute('data-a');
            var inputB = document.getElementById("triangle-B").getAttribute('data-b');

            switch (triangleOption) {
                case 'threeSides':
                    var inputC = document.getElementById("triangle-C").getAttribute('data-c');
                    findTrianglePerimeter(inputA, inputB, inputC, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnit2);
                    break;
                case 'twoSideAngle':
                    var inputC = document.getElementById("triangle-C").getAttribute('data-c');
                    findTrianglePerimeter(inputA, inputB, inputC, selectedUnitA, selectedUnitB, selectedAngleC, selectedUnit2);
                    break;
                case 'twoAngleSide':
                    var inputC = document.getElementById("triangle-C").getAttribute('data-c');
                    findTrianglePerimeter(inputA, inputB, inputC, selectedUnitA, selectedAngleB, selectedAngleC, selectedUnit2);
                    break;
                default:
                    break;
            }
            break;
        case 'circle':
            var inputA = document.getElementById("circle-A").getAttribute('data-a');
            findCirclePerimeter(inputA, selectedUnitA, selectedUnit2);
            break;
        case 'semi-circle':
            var inputA = document.getElementById("semi-circle-A").getAttribute('data-a');
            findSemiCirclePerimeter(inputA, selectedUnitA, selectedUnit2);
            break;
        case 'ellipse':
            var inputA = document.getElementById("ellipse-A").getAttribute('data-a');
            var inputB = document.getElementById("ellipse-B").getAttribute('data-b');
            findEllipsePerimeter(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
            break;
        case 'trapezoid':
            var inputA = document.getElementById("trapezoid-A").getAttribute('data-a');
            var inputB = document.getElementById("trapezoid-B").getAttribute('data-b');
            var inputC = document.getElementById("trapezoid-C").getAttribute('data-c');
            var inputD = document.getElementById("trapezoid-D").getAttribute('data-d');
            findTrapezoidPerimeter(inputA, inputB, inputC, inputD, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnitD, selectedUnit2);
            break;
        case 'parallelogram':
            var parallelogramOption = document.getElementById('parallelogram-option').value;
            var inputA = document.getElementById("parallelogram-A").getAttribute('data-a');
            var inputB = document.getElementById("parallelogram-B").getAttribute('data-b');

            switch (parallelogramOption) {
                case 'side':
                    findParallelogramPerimeter(inputA, inputB, null, selectedUnitA, selectedUnitB, null, selectedUnit2);
                    break;
                case 'oneSideAndDiagonal':
                    var inputC = document.getElementById("parallelogram-C").getAttribute('data-c');
                    findParallelogramPerimeter(inputA, inputB, inputC, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnit2);
                    break;
                case 'baseHeightAndAngle':
                    var inputC = document.getElementById("parallelogram-C").getAttribute('data-c');
                    findParallelogramPerimeter(inputA, inputB, inputC, selectedUnitA, selectedUnitB, selectedAngleC, selectedUnit2);
                    break;
                default:
                    break;
            }
            break;
        case 'rhombus':
            var rhombusOption = document.getElementById('rhombus-option').value;
            var inputA = document.getElementById("rhombus-A").getAttribute('data-a');
            var inputB = document.getElementById("rhombus-B").getAttribute('data-b');

            switch (rhombusOption) {
                case 'sideAndHeight':
                    findRhombusArea(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
                    break;
                case 'diagonal':
                    findRhombusArea(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
                    break;
                case 'sideAndAngle':
                    findRhombusArea(inputA, inputB, selectedUnitA, selectedAngleB, selectedUnit2);
                    break;
                default:
                    break;
            }
            break;
        case 'kite':
            var kiteOption = document.getElementById('kite-option').value;
            var inputA = document.getElementById("kite-A").getAttribute('data-a');
            var inputB = document.getElementById("kite-B").getAttribute('data-b');

            switch (kiteOption) {
                case 'diagonal':
                    console.log(inputA + '\n' + inputB);
                    findKiteArea(inputA, inputB, null, selectedUnitA, selectedUnitB, null, selectedUnit2);
                    break;
                case 'unequalSideAndAngle':
                    var inputC = document.getElementById("kite-C").getAttribute('data-c');
                    findKiteArea(inputA, inputB, inputC, selectedUnitA, selectedUnitB, selectedAngleC, selectedUnit2);
                    break;
                default:
                    break;
            }
            break;
        case 'pentagon':
            var inputA = document.getElementById("pentagon-A").getAttribute('data-a');
            findPentagonArea(inputA, selectedUnitA, selectedUnit2);
            break;
        case 'hexagon':
            var inputA = document.getElementById("hexagon-A").getAttribute('data-a');
            findHexagonArea(inputA, selectedUnitA, selectedUnit2);
            break;
        case 'octagon':
            var inputA = document.getElementById("octagon-A").getAttribute('data-a');
            findOctagonArea(inputA, selectedUnitA, selectedUnit2);
            break;
        case 'annulus':
            var inputA = document.getElementById("annulus-A").getAttribute('data-a');
            var inputB = document.getElementById("annulus-B").getAttribute('data-b');
            findAnnulusArea(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
            break;
        case 'quadrilateral':
            var inputA = document.getElementById("quadrilateral-A").getAttribute('data-a');
            var inputB = document.getElementById("quadrilateral-B").getAttribute('data-b');
            var inputC = document.getElementById("quadrilateral-C").getAttribute('data-C');
            findQuadrilateralArea(inputA, inputB, inputC, selectedUnitA, selectedUnitB, selectedAngleC, selectedUnit2);
            break;
        case 'polygon':
            var inputA = document.getElementById("polygon-A").getAttribute('data-a');
            var inputB = document.getElementById("polygon-B").getAttribute('data-b');
            findAnnulusArea(inputA, selectedUnitA, selectedUnit2);
            break;
        default:
            break;
    }
}

function variableUnitChange(variableA, selectedUnit) {
    var selectedUnitValue;
    switch (selectedUnit) {
        case 'centimeter':
            selectedUnitValue = variableA;
            break;
        case 'meter':
            selectedUnitValue = variableA * 100;
            break;
        case 'kilometer':
            selectedUnitValue = variableA * 100000;
            break;
        case 'feet':
            selectedUnitValue = variableA * 30.48;
            break;
        case 'yard':
            selectedUnitValue = variableA * 91.44;
            break;
        case 'inches':
            selectedUnitValue = variableA * 2.54;
            break;
        case 'millimeter':
            selectedUnitValue = variableA / 10;
            break;
        case 'miles':
            selectedUnitValue = variableA * 160934;
            break;
        default:
            break;
    }

    return selectedUnitValue;
}

function variableAngleChange(variableA, selectedAngle) {
    var selectedAngleValue;
    switch (selectedAngle) {
        case 'degree':
            selectedAngleValue = variableA * (3.14 / 180) ;
            break;
        case 'radian':
            selectedAngleValue = variableA;
            break;
        default:
            break;
    }

    return selectedAngleValue;
}

function perimeterUnitChange(perimeter, selectedUnit2) {
    var selectedUnit2Value;
    switch (selectedUnit2) {
        case 'centimeter2':
            selectedUnit2Value = perimeter;
            break;
        case 'meter2':
            selectedUnit2Value = perimeter / 10000;
            break;
        case 'kilometer2':
            selectedUnit2Value = perimeter / 10000000000;
            break;
        case 'feet2':
            selectedUnit2Value = perimeter / 929;
            break;
        case 'yard2':
            selectedUnit2Value = perimeter / 8361;
            break;
        case 'inches2':
            selectedUnit2Value = perimeter / 6.452;
            break;
        case 'millimeter2':
            selectedUnit2Value = perimeter * 10;
            break;
        case 'miles2':
            selectedUnit2Value = perimeter / 2.59e+10;
            break;
        default:
            break;
    }
    return selectedUnit2Value;
}

function findSquarePerimeter(variableA, selectedUnitA, selectedUnit2) {
    if (variableA === undefined && selectedUnitA === undefined && selectedUnit2 === undefined) {
        var squareValue = document.getElementById('square-A').value;
        document.getElementById('square-A').setAttribute('data-a', squareValue);
        unitChange();
    } else {
        var selectedUnitValue = variableUnitChange(variableA, selectedUnitA);
        var perimeter = selectedUnitValue * 4;
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findRectanglePerimeter(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
    if (
        variableA === undefined &&
        variableB === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnit2 === undefined
    ) {
        var inputTagValueA = document.getElementById('rectangle-A').value;
        var inputTagValueB = document.getElementById('rectangle-B').value;
        document.getElementById('rectangle-A').setAttribute('data-a', inputTagValueA);
        document.getElementById('rectangle-B').setAttribute('data-b', inputTagValueB);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        var perimeter;

        if (selectedUnitValueA != '' && selectedUnitValueB !== '') {
            perimeter = (Number(selectedUnitValueA) + Number(selectedUnitValueB)) * 2;
        } else {
            perimeter = 0;
        }
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function triangleOption() {
    var triangleOption = document.getElementById('triangle-option').value;
    switch (triangleOption) {
        case 'threeSides':
            inputTags(3, 'Triangle Perimeter', 'triangle-', 'perimeter', 'findTrianglePerimeter', 0, ['a', 'b', 'c'], 0);
            break;
        case 'twoSideAngle':
            inputTags(2, 'Triangle Perimeter', 'triangle-', 'perimeter', 'findTrianglePerimeter', 1, ['a', 'b'], ['Gamma']);
            break;
        case 'twoAngleSide':
            inputTags(1, 'Triangle Perimeter', 'triangle-', 'perimeter', 'findTrianglePerimeter', 2, ['a'], ['Beta', 'Gamma']);
            break;
        default:
            break;
    }
}

function findTrianglePerimeter(variableA, variableB, variableC, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnit2) {
    if (
        variableA === undefined &&
        variableB === undefined &&
        variableC === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnitC === undefined &&
        selectedUnit2 === undefined
    ) {
        var inputTagValueA = document.getElementById('triangle-A').value;
        var inputTagValueB = document.getElementById('triangle-B').value;
        var inputTagValueC = document.getElementById('triangle-C').value;

        document.getElementById('triangle-A').setAttribute('data-a', inputTagValueA);
        document.getElementById('triangle-B').setAttribute('data-b', inputTagValueB);
        document.getElementById('triangle-C').setAttribute('data-c', inputTagValueC);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var perimeter;

        var triangleOption = document.getElementById('triangle-option').value;
        switch (triangleOption) {
            case 'threeSides':
                var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
                var selectedUnitValueC = variableUnitChange(variableC, selectedUnitC);

                if (selectedUnitValueA !== null && selectedUnitValueB !== '' && selectedUnitValueC !== '') {
                    perimeter = (Number(selectedUnitValueA) + Number(selectedUnitValueB) + Number(selectedUnitValueC));
                } else
                    perimeter = 0;
                break;
            case 'twoSideAngle':
                console.log("A:" + variableA + "B:" + variableB + "C:" + variableC);
                var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
                var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);
                console.log("A:" + selectedUnitValueA);
                console.log("B:" + selectedUnitValueB);
                console.log("C:" + selectedUnitValueC);
                if (selectedUnitValueA !== null && selectedUnitValueB !== null && selectedUnitValueC !== 0) {
                    perimeter = Number(selectedUnitValueA) + Number(selectedUnitValueB) +
                        Math.sqrt(Number(selectedUnitValueA * selectedUnitValueA) + Number(selectedUnitValueB * selectedUnitValueB) - Number(2 * selectedUnitValueA * selectedUnitValueB) *
                        Math.cos(selectedUnitValueC));
                } else
                    perimeter = 0;
                break;
            case 'twoAngleSide':
                var selectedUnitValueB = variableAngleChange(variableB, selectedUnitB);
                var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);
                console.log("A:" + selectedUnitValueA);
                console.log("B:" + selectedUnitValueB);
                console.log("C:" + selectedUnitValueC);

                if (selectedUnitValueA !== null && selectedUnitValueB !== null && selectedUnitValueC !== 0) {
                    perimeter = Number(selectedUnitValueA) + (selectedUnitValueA / Math.sin(Number(selectedUnitValueB) + Number(selectedUnitValueC)) * (Math.sin(selectedUnitValueB) + Math.sin(selectedUnitValueC)));
                } else
                    perimeter = 0;
                break;
            default:
                break;
        }

        if (variableC == null) {

        }

        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }

}

function findCirclePerimeter(variableA, selectedUnitA, selectedUnit2) {
    if (variableA === undefined && selectedUnitA === undefined && selectedUnit2 === undefined) {
        var circleValue = document.getElementById('circle-A').value;
        document.getElementById('circle-A').setAttribute('data-a', circleValue);
        unitChange();
    } else {
        var selectedUnitValue = variableUnitChange(variableA, selectedUnitA);
        var perimeter = selectedUnitValue * 3.14 * 2;
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findSemiCirclePerimeter(variableA, selectedUnitA, selectedUnit2) {
    if (variableA === undefined && selectedUnitA === undefined && selectedUnit2 === undefined) {
        var semiCircleValue = document.getElementById('semi-circle-A').value;
        document.getElementById('semi-circle-A').setAttribute('data-a', semiCircleValue);
        unitChange();
    } else {
        var selectedUnitValue = variableUnitChange(variableA, selectedUnitA);
        var perimeter = (selectedUnitValue * 3.14) + (2 * selectedUnitValue);
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findEllipsePerimeter(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
    if ( variableA === undefined &&
        variableB === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnit2 === undefined
    ) {
        var ellipseValueA = document.getElementById('ellipse-A').value;
        var ellipseValueB = document.getElementById('ellipse-B').value;
        document.getElementById('ellipse-A').setAttribute('data-a', ellipseValueA);
        document.getElementById('ellipse-B').setAttribute('data-b', ellipseValueB);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        var perimeter;

        if (selectedUnitValueA !== null && selectedUnitValueB !== '') {
            perimeter = 3.14 * [(3 * (Number(selectedUnitValueA) + Number(selectedUnitValueB)) - Math.sqrt(((3 * Number(selectedUnitValueA)) + Number(selectedUnitValueB)) * (Number(selectedUnitValueA) + (3 * Number(selectedUnitValueB)))))];
        } else {
            perimeter = 0;
        }

        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findTrapezoidPerimeter(variableA, variableB, variableC, variableD, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnitD, selectedUnit2) {
    if (
        variableA === undefined &&
        variableB === undefined &&
        variableC === undefined &&
        variableD === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnitC === undefined &&
        selectedUnitD === undefined &&
        selectedUnit2 === undefined
    ) {
        var inputTagValueA = document.getElementById('trapezoid-A').value;
        var inputTagValueB = document.getElementById('trapezoid-B').value;
        var inputTagValueC = document.getElementById('trapezoid-C').value;
        var inputTagValueD = document.getElementById('trapezoid-D').value;

        document.getElementById('trapezoid-A').setAttribute('data-a', inputTagValueA);
        document.getElementById('trapezoid-B').setAttribute('data-b', inputTagValueB);
        document.getElementById('trapezoid-C').setAttribute('data-c', inputTagValueC);
        document.getElementById('trapezoid-D').setAttribute('data-d', inputTagValueD);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        var selectedUnitValueC = variableUnitChange(variableC, selectedUnitC);
        var selectedUnitValueD = variableUnitChange(variableD, selectedUnitD);
        var perimeter;

        if (selectedUnitValueA !== "" && selectedUnitValueB !== "" && selectedUnitValueC !== "" && selectedUnitValueD !== "") {
            perimeter = (Number(selectedUnitValueA) + Number(selectedUnitValueB) + Number(selectedUnitValueC) + Number(selectedUnitValueD));
        } else {
            perimeter = 0;
        }

        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function parallelogramOption() {
    var parallelogramOption = document.getElementById('parallelogram-option').value;
    switch (parallelogramOption) {
        case 'side':
            inputTags(2, 'Parallelogram Perimeter', 'parallelogram-', 'perimeter', 'findParallelogramPerimeter', 0, ['a', 'b'], 0);
            break;
        case 'oneSideAndDiagonal':
            inputTags(3, 'Parallelogram Perimeter', 'parallelogram-', 'perimeter', 'findParallelogramPerimeter', 0, ['b', 'e', 'f'], 0);
            break;
        case 'baseHeightAndAngle':
            inputTags(2, 'Parallelogram Perimeter', 'parallelogram-', 'perimeter', 'findParallelogramPerimeter', 1, ['b', 'h'], ['Alpha']);
            break;
        default:
            break;
    }
}

function findParallelogramPerimeter(variableA, variableB, variableC, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnit2) {
    if (
        variableA === undefined &&
        variableB === undefined &&
        variableC === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnitC === undefined &&
        selectedUnit2 === undefined
    ) {
        var inputTagValueA = document.getElementById('parallelogram-A').value;
        var inputTagValueB = document.getElementById('parallelogram-B').value;

        if (document.getElementById('parallelogram-C')) {
            var inputTagValueC = document.getElementById('parallelogram-C').value;
            document.getElementById('parallelogram-C').setAttribute('data-c', inputTagValueC);
        }

        document.getElementById('parallelogram-A').setAttribute('data-a', inputTagValueA);
        document.getElementById('parallelogram-B').setAttribute('data-b', inputTagValueB);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        var perimeter;

        var parallelogramOption = document.getElementById('parallelogram-option').value;
        switch (parallelogramOption) {
            case 'side':
                if (selectedUnitValueA !== '' && selectedUnitValueB !== '') {
                    perimeter = (Number(selectedUnitValueA) + Number(selectedUnitValueB)) * 2;
                } else {
                    perimeter = 0;
                }
                break;
            case 'oneSideAndDiagonal':
                var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);
                if (selectedUnitValueA !== null && selectedUnitValueB !== '' && selectedUnitValueC !== '') {
                    perimeter = 2 * (selectedUnitValueA * selectedUnitValueA) + Math.sqrt(2 * (selectedUnitValueB * selectedUnitValueB) + (2 * (selectedUnitValueC * selectedUnitValueC)) - 4 * (selectedUnitValueA * selectedUnitValueA));
                } else
                    perimeter = 0;
                break;
            case 'baseHeightAndAngle':
                var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);
                if (selectedUnitValueA !== null && selectedUnitValueB !== '' && selectedUnitValueC !== '') {
                    perimeter = (selectedUnitValueA * selectedUnitValueB) * Math.sin(selectedUnitValueC);
                } else
                    perimeter = 0;
                break;
            default:
                break;
        }

        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function rhombusOption() {
    var rhombusOption = document.getElementById('rhombus-option').value;
    switch (rhombusOption) {
        case 'sideAndHeight':
            inputTags(2, 'Rhombus Area', 'rhombus-', 'perimeter', 'findRhombusArea', 0, ['a', 'h'], 0);
            break;
        case 'diagonal':
            inputTags(2, 'Rhombus Area', 'rhombus-', 'perimeter', 'findRhombusArea', 0, ['e', 'f'], 0);
            break;
        case 'sideAndAngle':
            inputTags(1, 'Rhombus Area', 'rhombus-', 'perimeter', 'findRhombusArea', 1, ['a'], ['Alpha']);
            break;
        default:
            break;
    }
}

function findRhombusArea(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
    if (variableA === undefined &&
        variableB === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnit2 === undefined
    ) {
        var rhombusValueA = document.getElementById('rhombus-A').value;
        var rhombusValueB = document.getElementById('rhombus-B').value;
        document.getElementById('rhombus-A').setAttribute('data-a', rhombusValueA);
        document.getElementById('rhombus-B').setAttribute('data-b', rhombusValueB);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var perimeter;

        var rhombusOption = document.getElementById('rhombus-option').value;
        switch (rhombusOption) {
            case 'sideAndHeight':
                var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
                perimeter = (selectedUnitValueA * selectedUnitValueB);
                break;
            case 'diagonal':
                var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
                perimeter = (selectedUnitValueA * selectedUnitValueB) / 2;
                break;
            case 'sideAndAngle':
                var selectedUnitValueB = variableAngleChange(variableB, selectedUnitB);
                perimeter = (selectedUnitValueA * selectedUnitValueA) * Math.sin(selectedUnitValueB);
                break;
            default:
                break;
        }
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function kiteOption() {
    var kiteOption = document.getElementById('kite-option').value;
    switch (kiteOption) {
        case 'diagonal':
            inputTags(2, 'Kite Area', 'kite-', 'perimeter', 'findKiteArea', 0, ['e', 'f'], 0);
            break;
        case 'unequalSideAndAngle':
            inputTags(2, 'Kite Area', 'kite-', 'perimeter', 'findKiteArea', 1, ['a', 'b'], ['Alpha']);
            break;
        default:
            break;
    }
}

function findKiteArea(variableA, variableB, variableC, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnit2) {
    if (variableA === undefined &&
        variableB === undefined &&
        variableC === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnitC === undefined &&
        selectedUnit2 === undefined
    ) {
        var kiteValueA = document.getElementById('kite-A').value;
        var kiteValueB = document.getElementById('kite-B').value;

        document.getElementById('kite-A').setAttribute('data-a', kiteValueA);
        document.getElementById('kite-B').setAttribute('data-b', kiteValueB);

        if (document.getElementById('kite-C')) {
            var kiteValueC = document.getElementById('kite-C').value;
            document.getElementById('kite-C').setAttribute('data-c', kiteValueC);
        }
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        var perimeter;

        var kiteOption = document.getElementById('kite-option').value;
        switch (kiteOption) {
            case 'diagonal':
                perimeter = (selectedUnitValueA * selectedUnitValueB) / 2;
                break;
            case 'unequalSideAndAngle':
                console.log("Variable C:-" + variableC);
                console.log("Selected Unit C:-" + selectedUnitC);
                var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);
                console.log(selectedUnitValueA + '\n' + selectedUnitValueB + '\n' + selectedUnitValueC);
                if (selectedUnitValueA !== '' && selectedUnitValueB !== '' && selectedUnitValueC !== undefined) {
                    perimeter = ((selectedUnitValueA * selectedUnitValueB) * selectedUnitValueC);
                } else {
                    perimeter = 0;
                }
                break;
            default:
                break;
        }
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findPentagonArea(variableA, selectedUnitA, selectedUnit2) {
    if (variableA === undefined && selectedUnitA === undefined && selectedUnit2 === undefined) {
        var pentagonValue = document.getElementById('pentagon-A').value;
        document.getElementById('pentagon-A').setAttribute('data-a', pentagonValue);
        unitChange();
    } else {
        var selectedUnitValue = variableUnitChange(variableA, selectedUnitA);
        var perimeter = (selectedUnitValue * selectedUnitValue) * Math.sqrt(25 + (10 * Math.sqrt(5))) / 4;
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findHexagonArea(variableA, selectedUnitA, selectedUnit2) {
    if (variableA === undefined && selectedUnitA === undefined && selectedUnit2 === undefined) {
        var hexagonValue = document.getElementById('hexagon-A').value;
        document.getElementById('hexagon-A').setAttribute('data-a', hexagonValue);
        unitChange();
    } else {
        var selectedUnitValue = variableUnitChange(variableA, selectedUnitA);
        var perimeter = (selectedUnitValue * selectedUnitValue) * 3/2 * Math.sqrt(3);
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findOctagonArea(variableA, selectedUnitA, selectedUnit2) {
    if (variableA === undefined && selectedUnitA === undefined && selectedUnit2 === undefined) {
        var octagonValue = document.getElementById('octagon-A').value;
        document.getElementById('octagon-A').setAttribute('data-a', octagonValue);
        unitChange();
    } else {
        var selectedUnitValue = variableUnitChange(variableA, selectedUnitA);
        var perimeter = (selectedUnitValue * selectedUnitValue) * 2 * (1 + Math.sqrt(2));
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findAnnulusArea(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
    if (variableA === undefined && variableB === undefined && selectedUnitA === undefined && selectedUnitB === undefined && selectedUnit2 === undefined) {
        var annulusValueA = document.getElementById('annulus-A').value;
        var annulusValueB = document.getElementById('annulus-B').value;
        document.getElementById('annulus-A').setAttribute('data-a', annulusValueA);
        document.getElementById('annulus-B').setAttribute('data-b', annulusValueB);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        if (selectedUnitValueA > selectedUnitValueB && selectedUnitValueA !== '' && selectedUnitValueB !== '') {
            document.getElementById('alert-message').classList.add("invisible");
            var perimeter = 3.14 * ((selectedUnitValueA * selectedUnitValueA) - (selectedUnitValueB * selectedUnitValueB));
        } else if (selectedUnitValueB > selectedUnitValueA) {
            document.getElementById('alert-message').classList.remove("invisible");
            document.getElementById('alert-message').innerHTML = "A Should Be Greater Than B";
            perimeter = 0;
        } else {
            document.getElementById('alert-message').classList.remove("invisible");
            document.getElementById('alert-message').innerHTML = "A Should Be Greater Than B";
            perimeter = 0;
        }

        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findQuadrilateralArea(variableA, variableB, variableC, selectedUnitA, selectedUnitB, selectedUnitC, selectedUnit2) {
    if (variableA === undefined &&
        variableB === undefined &&
        variableC === undefined &&
        selectedUnitA === undefined &&
        selectedUnitB === undefined &&
        selectedUnitC === undefined &&
        selectedUnit2 === undefined
    ) {
        var quadrilateralValueA = document.getElementById('quadrilateral-A').value;
        var quadrilateralValueB = document.getElementById('quadrilateral-B').value;
        var quadrilateralValueC = document.getElementById('quadrilateral-C').value;

        document.getElementById('quadrilateral-A').setAttribute('data-a', quadrilateralValueA);
        document.getElementById('quadrilateral-B').setAttribute('data-b', quadrilateralValueB);
        document.getElementById('quadrilateral-C').setAttribute('data-c', quadrilateralValueC);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
        var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);
        var perimeter;
        perimeter = selectedUnitValueA * selectedUnitValueB * Math.sin(selectedUnitValueC);
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57) || x == 46)
        return true;
    else
        return false;
}
