/** 
 * Ranking
*/


function getInputValue(id){
    return document.getElementById(id).value
}

var submit = document.getElementById("Submit")
var rank
submit.onclick = function(){
    let acceptance = getInputValue("acceptance")
    let enrollment = getInputValue("enrollment")
    rank = 169.0812279 * acceptance/100 - 0.003424942 *enrollment + 2.553713119
    myFunction(parseInt(rank), name);
}

function myFunction(rank,name) {   
    if(rank>0){
        document.getElementById("result").innerHTML = "Your predicted ranking is "+rank;
    }
    if(rank<=0){
        document.getElementById("result").innerHTML = "Your predicted ranking is "+0;
    }

    }
