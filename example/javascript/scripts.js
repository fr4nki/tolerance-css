(function(){
    'use strict';

    var gridShower = document.getElementById('debug-grid-shower');
    var blockShower = document.getElementById('debug-block-shower');
    var gridContainer = document.getElementById('debug-grid-container');

    var generateGrid = function(){
        var gridSize = 14;
        var bodyHeight = document.body.offsetHeight;
        var linesCount = parseInt(bodyHeight / gridSize, 10);

        for(var i = 0; linesCount > i; i++) {
            gridContainer.appendChild(document.createElement('div'));
        }
    }

    gridShower.addEventListener('click', function(){
        gridContainer.classList.toggle('show')
    }, false);

    blockShower.addEventListener('click', function(){
        document.body.classList.toggle('debug-blocks')
    })

    generateGrid();
}());