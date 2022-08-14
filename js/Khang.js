/** 
 * Ranking
*/


function getInputValue(id){
    return document.getElementById(id).value
}

var submit = document.getElementById("Submit")
var rank
submit.onclick = function(){
    let tuition = getInputValue("tuition")
    let enrollment = getInputValue("enrollment")
    let salary = getInputValue("salary")
    let fourygrad = getInputValue("4ygrad")
    let acceptance = getInputValue("acceptance")

    rank = 208 - 0.001*tuition + 0.004*enrollment + 72.53*acceptance/100  - 169.43*fourygrad/100 - 0.00016*salary
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
