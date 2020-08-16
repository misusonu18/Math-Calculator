<?php
include 'layouts/header.php';
?>
<div class="container">
    <div>
        <a href="index.php" class="btn btn-info mt-2">
            <i class="fa fa-arrow-left"></i>
        </a>
    </div>

    <div class="row d-flex justify-content-center mt-3">
        <p class="h1">Perimeter Calculator</p>
    </div>
    <hr class="bg-primary"/>
    
    <div class="card mt-5">
        <div class="card-header text-dark" id="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <label class="h4 pt-2"> Shape </label>

                <div class="col-3">
                   <select class="custom-select custom-select-sm border border-info"
                        onchange="selectedShape()"
                        id="shape-select"
                    >
                        <option value="square" selected>Square</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="triangle">Triangle</option>
                        <option value="circle">Circle</option>
                        <option value="semi-circle">Semi-Circle</option>
                        <option value="sector">Sector</option>
                        <option value="ellipse">Ellipse</option>
                        <option value="trapezoid">Trapezoid</option>
                        <option value="parallelogram">Parallelogram</option>
                        <option value="rhombus">Rhombus</option>
                        <option value="kite">Kite</option>
                        <option value="annulus">Annulus (Ring)</option>
                        <option value="polygon">Polygon</option>
                    </select>
                </div>
            </div>

            <div class="mt-2 d-flex justify-content-between align-items-center invisible" id="find-given-perimeter">
                <label class="h4 pt-2" id="find-perimeter-given"> Find Perimeter Given </label>

                <div id="find-perimeter-option"> </div>
            </div>
        </div>

        <div class="card-body text-white bg-secondary">
            <p class="alert alert-danger invisible" id="alert-message"></p>

            <p class="invisible h4" id="formula"></p>

            <div class="justify-content-between" id="perimeter-image">
                <img class="img-fluid" id="image"/>
            </div>

            <div id="perimeter-calculation" class="pl-2 pt-4"></div>
        </div>
        
    </div>
</div>
<?php
include 'layouts/footer.php';
?>
<script src="js/perimeter.js"></script>