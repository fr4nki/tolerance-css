(function(){
    'use strict';

    var gridShower = document.getElementById('debug-grid-shower');
    var gridContainer = document.getElementById('debug-grid-container');

    var generateGrid = function(){
        var gridSize = 8;
        var bodyHeight = document.body.offsetHeight;
        var linesCount = parseInt(bodyHeight / gridSize, 10) + 1;

        for(var i = 0; linesCount > i; i++) {
            gridContainer.appendChild(document.createElement('div'));
        }
    }

    gridShower.addEventListener('click', function(){
        gridContainer.classList.toggle('show')
    }, false);

    generateGrid();
}());