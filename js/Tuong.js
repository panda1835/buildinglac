/** 
 * Ranking
*/


function getInputValue(id){
    return document.getElementById(id).value
}

var submit = document.getElementById("Submit")
var rank
submit.onclick = function(){
    let endowmentpercap = getInputValue("endowmentpercap")
    let tuition = getInputValue("tuition")
    rank = 323.2948112 - 0.00005*endowmentpercap - 0.00325*tuition
    myFunction( parseInt(rank), name);
}

function myFunction(rank,name) {   
    if(rank>0){
        document.getElementById("result").innerHTML = "Your predicted ranking is "+rank;
    }
    if(rank<=0){
        document.getElementById("result").innerHTML = "Your predicted ranking is "+0;
    }

    }
