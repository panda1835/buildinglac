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
    let endowmentpercap = getInputValue("endowmentpercap")
    let sfratio = getInputValue("sfratio")
    let fulltimefaculty = getInputValue("fulltimefaculty")
    let emfulltimeundergrat = getInputValue("emfulltimeundergrat")
    let peerassess = getInputValue("peerassess")
    let age = getInputValue("age")
    let fewerthan20 = getInputValue("fewerthan20")
    let socmob = getInputValue("socmob")

    rank = 275.396 + 30.664*acceptance/100  + 8.92501E-06*endowmentpercap 
    +  2.006/sfratio - 0.009*socmob 
    - 4.11*emfulltimeundergrat/100 - 62.175*peerassess - 0.07*age - 
    28.232*fewerthan20/100 + 0.0106*fulltimefaculty

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
