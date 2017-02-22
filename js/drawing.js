enableDrawing();

function enableDrawing() {
    document.addEventListener('mousedown', function(e) { 
        var red = Math.ceil(Math.random() * 255);
        var green = Math.ceil(Math.random() * 255);
        var blue = Math.ceil(Math.random() * 255);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.clientY + 'px';
        box.style.left = e.clientX + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        document.body.appendChild(box);
    });
}

