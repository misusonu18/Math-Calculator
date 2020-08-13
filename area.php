<?php
include 'layouts/header.php';
?>
<div class="container">
    <div>
        <a href="index.php" class="btn btn-info mt-2">
            <i class="fa fa-arrow-left"></i>
        </a>
    </div>

    <div class="row justify-content-center mt-3">
        <label class="h1">Area Calculator </label>
    </div>
    <div class="card mt-5">
        <div class="card-header text-dark" id="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div> Shape </div>

                <div>
                   <select class="custom-select custom-select-sm border border-dark" onchange="selectedShape()" id="shape-select">
                        <option value="square" selected>Square</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="triangle">Triangle</option>
                        <option value="circle">Circle</option>
                        <option value="semi-circle">Semi-Circle</option>
                        <option value="sector">Sector</option>
                        <option value="ellipse">Ellipse</option>
                        <option value="trapezoid">Trapezoid</option>
                        <option value="ellipse">Ellipse</option>
                    </select>
                </div>
            </div>

            <div class="mt-2 d-flex justify-content-between align-items-center invisible" id="find-given-area">
                <div id="find-area-given"> Find Area Given </div>

                <div id="find-area-option"> </div>
            </div>
        </div>

        <div class="card-body text-white bg-dark justify-content-center">
            <div id="area-calculation"> </div>
        </div>
    </div>
</div>
<?php
include 'layouts/footer.php';
