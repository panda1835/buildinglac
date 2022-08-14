/** 
 * Ranking
*/
function getInputValue(id){
    return document.getElementById(id).value
}

var submit = document.getElementById("Submit")
var schoolvalue
submit.onclick = function(){
    let sfratio = getInputValue("sfratio")
    let fewerthan20 = getInputValue("fewerthan20")
    let fulltimefaculty = getInputValue("fulltimefaculty")
    let faculty = getInputValue("faculty")
    let tuition = getInputValue("tuition")
    let acceptance = getInputValue("acceptance")
    let needmet = getInputValue("needmet")


    schoolvalue = 1.335822467/sfratio + fewerthan20 * 6.797870907/100 + 
    fulltimefaculty* 0.037626728 - faculty * 89.54004469/100 + 
    tuition* 3.21598E-05 - needmet* 9.271302931/100 + acceptance/100* 94.39446066 + 73.4034247959271
    myFunction(parseInt(schoolvalue));
}

function myFunction(schoolvalue) {   
    if(schoolvalue>0){
        document.getElementById("result").innerHTML = "Your predicted school value ranking among US Liberal Arts colleges is "+schoolvalue;
    }
    if(schoolvalue<=0){
        document.getElementById("result").innerHTML = "Your predicted school value ranking among US Liberal Arts colleges is "+0;
    }

    }
