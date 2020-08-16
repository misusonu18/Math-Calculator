var body = document.getElementsByTagName('body')[0];
body.setAttribute('onload', 'selectedShape()');


function selectedShape() {
    var selectedShape = document.getElementById('shape-select').value;
    var findGivenPerimeterDiv = document.getElementById('find-given-perimeter');
    document.getElementById('find-perimeter-option').innerHTML = "";
    findGivenPerimeterDiv.classList.add("invisible");

    switch (selectedShape) {
        case 'square':
            inputTags(1, 'Square Perimeter', 'square-', 'perimeter', 'findSquarePerimeter', 0, ['a'], 0, 'square.svg');
            break;
        case 'rectangle':
            inputTags(2, 'Rectangle Perimeter', 'rectangle-', 'perimeter', 'findRectanglePerimeter', 0, ['a', 'b'], 0, 'rectangle.svg');
            break;
        case 'triangle':
            var select = document.createElement("select");

            select.setAttribute("id", "triangle-option");
            select.setAttribute("class", "custom-select custom-select-sm inline border border-info");
            select.setAttribute('onchange', 'triangleOption()');

            select.options.add(new Option("Three Sides (SSS)", "threeSides", true, true));
            select.options.add(new Option("Two Sides + Angle Between Them (SSA)", "twoSideAngle", false, false));
            select.options.add(new Option("Two Angle + Side Between Them (SAA)", "twoAngleSide", false, false));

            findGivenPerimeterDiv.classList.remove("invisible");
            document.getElementById('find-perimeter-option').appendChild(select);

            triangleOption();
            break;
        case 'circle':
            inputTags(1, 'Circle Perimeter', 'circle-', 'perimeter', 'findCirclePerimeter', 0, ['r'], 0, 'circle.svg');
            break;
        case 'semi-circle':
            inputTags(1, 'Semi-Circle Perimeter', 'semi-circle-', 'perimeter', 'findSemiCirclePerimeter', 0, ['r'], 0, 'semicircle.svg');
            break;
        case 'ellipse':
            inputTags(2, 'Ellipse Perimeter', 'ellipse-', 'perimeter', 'findEllipsePerimeter', 0, ['a', 'b'], 0, 'ellipse.svg');
            break;
        case 'trapezoid':
            inputTags(4, 'Trapezoid Perimeter', 'trapezoid-', 'perimeter', 'findTrapezoidPerimeter', 0, ['a', 'b', 'c',
            'd'], 0, 'trapezoid.svg');
            break;
        case 'parallelogram':
            var select = document.createElement("select");

            select.setAttribute("id", "parallelogram-option");
            select.setAttribute("class", "custom-select custom-select-sm inline border border-info");
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
            select.setAttribute("class", "custom-select custom-select-sm  inline border border-info");
            select.setAttribute('onchange', 'rhombusOption()');

            select.options.add(new Option("Side And Height", "sideAndHeight", true, true));
            select.options.add(new Option("Diagonals", "diagonal", false, false));
            select.options.add(new Option("Side and Any Angle", "sideAndAngle", false, false));

            findGivenPerimeterDiv.classList.remove("invisible");
            document.getElementById('find-perimeter-option').appendChild(select);

            rhombusOption();
            break;
        case 'kite':
            inputTags(2, 'Kite Perimeter', 'kite-', 'perimeter', 'findKitePerimeter', 0, ['e', 'f'], 0, 'kite3.svg');
            break;
        case 'pentagon':
            inputTags(1, 'Pentagon Perimeter', 'pentagon-', 'perimeter', 'findPentagonPerimeter', 0, ['a'], 0, 'pentagon.svg');
            break;
        case 'hexagon':
            inputTags(1, 'Hexagon Perimeter', 'hexagon-', 'perimeter', 'findHexagonPerimeter', 0, ['a'], 0, 'hexagon.svg');
            break;
        case 'octagon':
            inputTags(1, 'Octagon Perimeter', 'octagon-', 'perimeter', 'findOctagonPerimeter', 0, ['a'], 0, 'octagon.svg');
            break;
        case 'annulus':
            inputTags(2, 'Annulus Perimeter', 'annulus-', 'perimeter', 'findAnnulusPerimeter', 0, ['R', 'r'], 0, 'annulus.svg');
            break;
        case 'quadrilateral':
            inputTags(2, 'Quadrilateral Perimeter', 'quadrilateral-', 'perimeter', 'findQuadrilateralPerimeter', 1, ['e', 'f'], ['α'], 'quadrilateral.svg');
            break;
        case 'polygon':
            inputTags(2, 'Polygon Perimeter', 'polygon-', 'perimeter', 'findPolygonPerimeter', 0, ['Numbers Of Sides','a'], 0, 'polygon.svg');
            break;
        default:
            break;
    }
}

// 1.NumberOfInputsBox, 2.TotalInputBoxName, 3.NumberOfInputBoxId, 4.TotalInputBoxId, 5.FunctionName, 6.NumberOfInputBoxOfAngle, 7.NameOfInputBox, 8.NameOfInputBoxOfAnle, 9.ImageName; 
function inputTags(totalInputBox, 
    totalInputBoxName, 
    inputBoxId, 
    totalInputBoxId, 
    functionName, 
    inputBoxOfAngle, 
    variableName, 
    variableAngleName, 
    imageName
) {
    var perimeterCalculation = document.getElementById("perimeter-calculation");
    var perimeterImage = document.getElementById("perimeter-image");
    var image = document.getElementById("image");

    if (imageName) {
        image.setAttribute('src', 'images/' + imageName);
    } else {
        image.setAttribute('src', '');
        image.setAttribute('alt', totalInputBoxId);   
    }
    perimeterImage.appendChild(image);

    while (perimeterCalculation.hasChildNodes()) {
        perimeterCalculation.removeChild(perimeterCalculation.lastChild);
    }
    var i = 0, j = 0;
    do {
        var inputBox = document.createElement("input");
        var variableLabelName = document.createElement("p");
        variableLabelName.setAttribute('class', 'h4');

        variableLabelName.innerText = variableName[i];
        inputBox.type = "text";
        inputBox.setAttribute('id', inputBoxId + String.fromCharCode(65 + i));
        inputBox.setAttribute('class', 'form-control form-control-sm d-inline mb-3 text-right col-3');
        inputBox.setAttribute('onkeypress', "return restrictAlphabets(event)");
        inputBox.setAttribute('onkeyup', functionName + '()');
        perimeterCalculation.appendChild(variableLabelName);
        perimeterCalculation.appendChild(inputBox);
        unitName(inputBoxId, String.fromCharCode(65 + i));
        perimeterCalculation.appendChild(document.createElement("br"));
        i++;
    } while (i < totalInputBox);

    for (let j = 0; j < inputBoxOfAngle; j++) {
        var angleInputBox = document.createElement("input");
        var angleLabelName = document.createElement("p");
        angleLabelName.setAttribute('class', 'h4');

        angleLabelName.innerText = 'Angle ' + variableAngleName[j];
        angleInputBox.type = "text";
        angleInputBox.setAttribute('id', inputBoxId + String.fromCharCode(65 + j + i));
        angleInputBox.setAttribute('class', 'form-control form-control-sm d-inline mb-3 text-right col-3');
        angleInputBox.setAttribute('onkeypress', "return restrictAlphabets(event)");
        angleInputBox.setAttribute('onkeyup', functionName + '()');
        perimeterCalculation.appendChild(angleLabelName);
        perimeterCalculation.appendChild(angleInputBox);
        angleName(inputBoxId, String.fromCharCode(65 + j + i));
        perimeterCalculation.appendChild(document.createElement("br"));
    }

    var totalLabelName = document.createElement("p");
    totalLabelName.setAttribute('class', 'h4');

    totalLabelName.innerText = totalInputBoxName;
    var perimeterInput = document.createElement("input");
    perimeterInput.type = "text";
    perimeterInput.setAttribute('id', totalInputBoxId);
    perimeterInput.setAttribute('class', 'form-control form-control-sm d-inline text-right col-3');
    perimeterCalculation.appendChild(totalLabelName);
    perimeterCalculation.appendChild(perimeterInput);
    unitSquareName(totalInputBoxId);
}

function unitName(inputIdName, dataAttributeVariableName) {
    var frag = document.createDocumentFragment();
    var select = document.createElement("select");
    select.setAttribute("id", "unit-select-" + dataAttributeVariableName);
    select.setAttribute("data-" + dataAttributeVariableName, inputIdName + dataAttributeVariableName);
    select.setAttribute("class", "custom-select custom-select-sm inline col-2-custom select-custom border border-light text-white bg-secondary");
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
    select.setAttribute("class", "custom-select custom-select-sm inline col-2-custom select-custom border border-light text-white bg-secondary");
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
    select.setAttribute("class", "custom-select custom-select-sm inline col-2-custom select-custom border border-light text-white bg-secondary");
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
                case 'side':
                    findRhombusPerimeter(inputA, selectedUnitA, selectedUnit2);
                    break;
                case 'diagonal':
                    findRhombusPerimeter(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
                    break;
                default:
                    break;
            }
            break;
        case 'kite':
            var inputA = document.getElementById("kite-A").getAttribute('data-a');
            var inputB = document.getElementById("kite-B").getAttribute('data-b');

            findKitePerimeter(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
            break;
        case 'annulus':
            var inputA = document.getElementById("annulus-A").getAttribute('data-a');
            var inputB = document.getElementById("annulus-B").getAttribute('data-b');
            findAnnulusPerimeter(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
            break;
        case 'polygon':
            var inputA = document.getElementById("polygon-A").getAttribute('data-a');
            var inputB = document.getElementById("polygon-B").getAttribute('data-b');
            findPolygonPerimeter(inputA, inputB, selectedUnitA, selectedUnitB, selectedUnit2);
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
        var formula = document.getElementById('formula');

        formula.classList.remove('invisible');
        formula.innerHTML = "Formula of Square Perimerter: <u> a * 4 </u>";
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
            inputTags(3, 'Triangle Perimeter', 'triangle-', 'perimeter', 'findTrianglePerimeter', 0, ['a', 'b', 'c'], 0, 'triangle2.svg');
            break;
        case 'twoSideAngle':
            inputTags(2, 'Triangle Perimeter', 'triangle-', 'perimeter', 'findTrianglePerimeter', 1, ['a', 'b'], ['γ'], 'triangle3.svg');
            break;
        case 'twoAngleSide':
            inputTags(1, 'Triangle Perimeter', 'triangle-', 'perimeter', 'findTrianglePerimeter', 2, ['a'], ['β', 'γ'], 'triangle4.svg');
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
            inputTags(2, 'Parallelogram Perimeter', 'parallelogram-', 'perimeter', 'findParallelogramPerimeter', 0, ['a', 'b'], 0, 'parallelogram4.svg');
            break;
        case 'oneSideAndDiagonal':
            inputTags(3, 'Parallelogram Perimeter', 'parallelogram-', 'perimeter', 'findParallelogramPerimeter', 0, ['b', 'e', 'f'], 0, 'parallelogram5.svg');
            break;
        case 'baseHeightAndAngle':
            inputTags(2, 'Parallelogram Perimeter', 'parallelogram-', 'perimeter', 'findParallelogramPerimeter', 1, ['b', 'h'], ['α'], 'parallelogram6.svg');
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
                var selectedUnitValueC = variableUnitChange(variableC, selectedUnitC);

                if (selectedUnitValueA !== null && selectedUnitValueB !== '' && selectedUnitValueC !== '') {
                    perimeter = (2 * (selectedUnitValueA * selectedUnitValueA)) + Math.sqrt(Number(2 * (selectedUnitValueB * selectedUnitValueB) + Number(2 * (selectedUnitValueC * selectedUnitValueC))) - 4 * (selectedUnitValueA * selectedUnitValueA));
                } else
                    perimeter = 0;
                break;
            case 'baseHeightAndAngle':
                var selectedUnitValueC = variableAngleChange(variableC, selectedUnitC);

                if (selectedUnitValueA !== '' && selectedUnitValueB !== '' && selectedUnitValueC !== 0) {
                    console.log(selectedUnitValueA + '\n' + selectedUnitValueB + '\n' + selectedUnitValueC);
                    perimeter = 2 * ((Number(selectedUnitValueA) + Number(selectedUnitValueB) / Math.sin(selectedUnitValueC)));
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
        case 'side':
            inputTags(1, 'Rhombus Perimeter', 'rhombus-', 'perimeter', 'findRhombusPerimeter', 0, ['a'], 0, 'rhombus4.svg');
            break;
        case 'diagonal':
            inputTags(2, 'Rhombus Perimeter', 'rhombus-', 'perimeter', 'findRhombusPerimeter', 0, ['e', 'f'], 0 , 'rhombus2.svg');
            break;
        default:
            break;
    }
}

function findRhombusPerimeter(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
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
            case 'side':
                var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
                perimeter =  4 * selectedUnitValueA;
                break;
            case 'diagonal':
                var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);
                perimeter = 2 * Math.sqrt((selectedUnitValueA * selectedUnitValueA) + (selectedUnitValueB * selectedUnitValueB));
                break;
            default:
                break;
        }
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findKitePerimeter(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
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

        perimeter = 2 * (Number(selectedUnitValueA) + Number(selectedUnitValueB));
        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findAnnulusPerimeter(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
    if (variableA === undefined && 
        variableB === undefined && 
        selectedUnitA === undefined && 
        selectedUnitB === undefined && 
        selectedUnit2 === undefined
    ) {
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
            var perimeter = (2 * 3.14) * (Number(selectedUnitValueA) + Number(selectedUnitValueB));
        } else if (selectedUnitValueB > selectedUnitValueA) {
            document.getElementById('alert-message').classList.remove("invisible");
            document.getElementById('alert-message').innerHTML = "R Should Be Greater Than r";
            perimeter = 0;
        } else {
            document.getElementById('alert-message').classList.remove("invisible");
            document.getElementById('alert-message').innerHTML = "R Should Be Greater Than r";
            perimeter = 0;
        }

        var selectedUnit2Value = perimeterUnitChange(perimeter, selectedUnit2);
        document.getElementById('perimeter').value = selectedUnit2Value;
    }
}

function findPolygonPerimeter(variableA, variableB, selectedUnitA, selectedUnitB, selectedUnit2) {
    if (variableA === undefined && 
        variableB === undefined && 
        selectedUnitA === undefined && 
        selectedUnitB === undefined && 
        selectedUnit2 === undefined
    ) {
        var polygonValueA = document.getElementById('polygon-A').value;
        var polygonValueB = document.getElementById('polygon-B').value;

        document.getElementById('polygon-A').setAttribute('data-a', polygonValueA);
        document.getElementById('polygon-B').setAttribute('data-b', polygonValueB);
        unitChange();
    } else {
        var selectedUnitValueA = variableUnitChange(variableA, selectedUnitA);
        var selectedUnitValueB = variableUnitChange(variableB, selectedUnitB);

        console.log(selectedUnitValueA);

        if (selectedUnitValueA >= 3 && selectedUnitValueA !== '' && selectedUnitValueB !== '') {
            document.getElementById('alert-message').classList.add("invisible");
            var perimeter = (selectedUnitValueA * selectedUnitValueB);
        } else {
            if (selectedUnitValueA < 3) {
                document.getElementById('alert-message').classList.remove("invisible");
                document.getElementById('alert-message').innerHTML = "You Can't Construct Such Polygon";
            } else {
                document.getElementById('alert-message').classList.add("invisible");
            }
            perimeter = 0;
        }

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
