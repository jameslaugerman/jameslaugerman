// P1 = true, 1, and YELLOW; P2 = false , 2, and RED
var turn = true;
var head = $(".head");
var game = $(".game");
var img = $("img");
var steps = [];
var testIt = [];
var startingSquares = [];
var width = 7;
var height = 6;
var clickTime = [5, 5, 5, 5, 5, 5, 5];




function clicked(cell){
   turnOver(cell);
   turn = !turn;
   upperClass();
   masterTest();
}

function turnOver(cell){
    if(turn===true){
        fallDownP1(cell);
       } else {
        fallDownP2(cell);
       }
}

function reset(){
    var i;
    for(i=0; i<game.length; i++){
       img[i].src = "white.png";
        game[i].value = 0;
        clickTime = [5, 5, 5, 5, 5, 5, 5];  
    }
    turn = true;
    resetClass();
}

function fallDownP1(cell){
    // game[cell+(clickTime[cell]*width)].classList.add("yellow");
    // game[cell+(clickTime[cell]*width)].classList.remove("game");
    // head.classList.add("p1");
    img[cell+(clickTime[cell]*width)].src = "yellow.png";
    game[cell+(clickTime[cell]*width)].value = 1;
    clickTime[cell]=clickTime[cell]-1;
}

function fallDownP2(cell){
    // game[cell+(clickTime[cell]*width)].classList.add("red");
    // game[cell+(clickTime[cell]*width)].classList.remove("game");
    img[cell+(clickTime[cell]*width)].src = "red.png";
    game[cell+(clickTime[cell]*width)].value = -1;
    clickTime[cell]=clickTime[cell]-1;
}

function resetClass(){
    for(var i=0; i<head.length; i++){
        head[i].classList.add('p1')
    }
}

function upperClass(){
    for(var i=0; i<head.length; i++){
        head[i].classList.toggle('p1')
    }
}

function winConditions(test){
    startingSquares = [];
    switch(test){

    // horizontal
    case 0: 
        for(var i=0; i<height; i++){
            for(var j=0; j<width-3; j++){
                var row = j + (i*width);
                startingSquares.push(row)
            }
        }
        break;

    // vertical
    case 1:
        // 0, 1, 2, 3, 4, 5, 6 ... 7, 8, 9, 10, 11, 12, 13 ... 14, 15, 16, 17, 18, 19, 20
        for(var i=0; i<width*3; i++){
            // var row = i;
            startingSquares.push(i);
        }
        break;

    // diagonal up
    case 2:
        // 21, 22, 23,24 ... 28, 29, 30, 31 ... 35, 36, 37, 38
        for(var i=3; i<height; i++){
            for(var j=0; j<width-3; j++){
                var row = (i*width)+j;
                startingSquares.push(row);
            }
        }
        break;

    // diagonal down
    case 3: 
    // 0, 1, 2, 3 ... 7, 8, 9, 10 ... 14, 15, 16, 17
        for(var i=0; i<height-3; i++){
            for(var j=0; j<width-3; j++){
                var row = j+(i*width);
                startingSquares.push(row);
            }
        }
        break;
        
    default:
            console.log("type not found");
        break;
    }   
}

function calcSteps(start, type){
    steps = [];
    switch(type){
        // horizontal
        case 0:
            steps.push(start, start+1, start+2, start+3);
            // console.log(steps)
            break;
        // vertical
        case 1:
            steps.push(start, start+width, start+(2*width), start+(3*width));
            // console.log(steps)
            break;
        // diag up
        case 2:
            steps.push(start, start-(width-1), start-((width-1)*2), start-((width-1)*3));
            // console.log(steps)
            break;
        // diag down
        // 0, 8, 16, 24
        case 3:
            steps.push(start, start+(width+1), start+((width+1)*2), start+((width+1)*3));
            // console.log(steps)
            break;
    }
}

function testWin(){
    if(Number(game[steps[0]].value) + (Number(game[steps[1]].value))+ (Number(game[steps[2]].value)) + (Number(game[steps[3]].value)) == 4) 
    { alert("YELLOW WINS");
    alert("Play Again?");
    reset();
    }
    else if(Number(game[steps[0]].value) + (Number(game[steps[1]].value))+ (Number(game[steps[2]].value)) + (Number(game[steps[3]].value)) == -4) 
    { alert("RED WINS");
    alert("Play Again?");
    reset();}
}

function masterTest(){
        // SET UP LOOP TO ITERATE THROUGH LINE TYPES
        for(var i=0; i<4; i++)
        // 0 = HORIZONTAL; 1 = VERTICAL; 2- DIAG DOWN; 3 - 
                {
                // FIGURE OUT THE SQUARES WE NEED TO TEST
                winConditions(i);
        
            // SET UP A LOOP TO TEST THOSE SQUARES
                for(z=0; z<startingSquares.length; z++) {
                  
            // FIGURE OUT THE APPROPRIATE TWO SQUARES TO TEST ALONG WITH THE SQUARE FOR THIS ITERATION;
                calcSteps(startingSquares[z], i);
            // LOOP THROUGH AND TEST SQUARES FOR WIN CONDITIONS USING DETERMINE "OTHER 2" SQUARES;
                testWin();
            // IF(WIN), INFORM USER
                }
            }
        };



    