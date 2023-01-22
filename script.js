const timesClicked = {
    red : 0,
    yellow : 0,
    green : 0
};

const squares = document.querySelectorAll('.btn');
squares.forEach( square =>{
    square.onclick = () =>{
        timesClicked[square.value] += 1;
        document.getElementById(square.value).innerText = timesClicked[square.value];
    }
});

const resetAll = () =>{
    timesClicked.red = 0;
    timesClicked.yellow = 0;
    timesClicked.green = 0;
    squares.forEach(square => square.innerText = '0');
}
const clearBtn = document.getElementById('clear');
clearBtn.onclick = () => resetAll();