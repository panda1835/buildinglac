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
    let faculty = getInputValue("faculty")
    rank = 132.1804327 + 161.1186168 * acceptance/100 - 149.527712 * faculty/100
    
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
