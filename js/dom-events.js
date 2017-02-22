//console.dir(document);

start(); // runs the below code
//manipulating the html button using javascript. className adds a CSS class.

function start() {
    var button = document.querySelector('button');
    button.className = 'round';

    button.addEventListener('mouseover', function(e) {
        if (button.className === 'round') {
            button.className = 'circle';
    }
    
    else {
        button.className = 'round';
    }
    });
}

// bubbling - creating broad code, and then creating conditions
function start() {
    document.addEventListener('click', function(e) {
        alert(e.target.innerText);
    });
}

function start() {
    document.addEventListener('click', function(e) {
         if (e.target.innerText === 'Dog') {
            e.target.style.backgroundColor = 'brown';
            e.target.style.color = 'lightSkyBlue';
            e.target.style.fontSize = '40px';
        }
        else if (e.target.innerText === 'Mouse') {
            e.target.style.backgroundColor = 'grey';
            e.target.style.fontSize = '8px';
        }
        else if (e.target.innerText === 'Lion') {
            e.target.style.backgroundColor = 'orange';
        }
        else if (e.target.innerText === 'Bird') {
            e.target.style.backgroundColor = 'pink';
            e.target.style.color = 'red';
        }
        else if (e.target.innerText === 'Fish') {
            e.target.style.backgroundColor = 'yellow';
        }
        else if (e.target.innerText === 'Prairie Dog') {
            e.target.style.backgroundColor = 'tan';
        }
        else if (e.target.innerText === 'Rhino') {
            e.target.style.fontSize = '60px';
        }
    });
}


