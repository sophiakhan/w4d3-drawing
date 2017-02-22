enableDrawing();
growBoxes();

function enableDrawing() {
    document.addEventListener('mousedown', function(e) { 
        var red = Math.ceil(Math.random() * 255);
        var green = Math.ceil(Math.random() * 255);
        var blue = Math.ceil(Math.random() * 255);
        var box = document.createElement('div'); // creates a div in the html 
        box.style.position = 'absolute';
        box.style.top = e.clientY + 'px'; // starts the mouse at the top of the browser
        box.style.left = e.clientX + 'px'; // starts the mouse at the left side of the browser
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // allows js to read the variable we want to plug in 

        document.body.appendChild(box);
    });

}

function growBoxes() {
    document.addEventListener('mousedown', function(e) { // why doesn't it work with 'click' ?? 
            if (e.target.nodeName === 'DIV') {
                e.target.style.width = '15px';
                e.target.style.height = '15px';
            }

        console.log(e.target.style.width)
            console.log(e.target.style.height)

    });
}
