/** 
 * Ranking
*/
var tuition = getInputValue("tuition")
var endowment = getInputValue("endowment")
var salary = getInputValue("salary")
var sfratio = getInputValue("sfratio")
var firstgen = getInputValue("firstgen")
var clubs = getInputValue("clubs")
var SAT = getInputValue("SAT")


function getInputValue(id){
    return document.getElementById(id).value
}

function getCheckbox(id){
    return document.getElementById(id).checked
}

var submit = document.getElementById("see_ranking")
//var checkBox1 = document.querySelector('.object1:checked').value;

submit.onclick = function(){

    // var node = document.createElement("LI");                 
    // var textnode = document.createTextNode("Water");  
    // node.appendChild(textnode);
    // var ranking = document.getElementById("ranking")
    // ranking.removeChild(ranking.childNodes[0])
    // ranking.appendChild(node);

    
    // var textByLine = fs.readFileSync('content/urls.txt').toString().split("\n");
    // alert(textByLine[0])
    // alert(
    //     "Student-to-faculty ratio: "+getInputValue("sfratio")+"\n"+
    //     "Tuition: "+getInputValue("tuition")+"\n"+
    //     "GPA: "+getInputValue("gpa")+"\n"+
    //     "Class size: "+getInputValue("classsize")+"\n"+
    //     "Checkbox 1 checked: "+getCheckbox("object1")+"\n"+
    //     "Checkbox 2 checked: "+getCheckbox("object2")+"\n"+
    //     "Checkbox 3 checked: "+getCheckbox("object3")+"\n"+
    //     "Checkbox 4 checked: "+getCheckbox("object4")+"\n"
    //     )
    var rank = 216;
    var name = "Fulbright University Vietnam"
    myFunction(arr, rank, name);
}

function myFunction(arr,rank,name) {
    var out = "";
    var i;
    
    for(i = 0; i < arr.length/3; i++) {
        if(rank>arr[3*(i-1)+1] && rank<=arr[3*i+1]){
            out+='<a>' + 
            rank +"-"+name + '</a><br>';
        }
        out += '<a href="' + arr[3*i+2] + '">' + 
        arr[3*i+1] +"-"+arr[3*i] + '</a><br>';
    }
    
    if(rank>arr[arr.length-2]){
        out+='<a>' + rank +"-"+name + '</a><br>';
    }
    document.getElementById("ranking").innerHTML = out;
    }


var arr = ['Williams College',1,'https://www.usnews.com/best-colleges/williams-college-2229'
,'Amherst College',2,'https://www.usnews.com/best-colleges/amherst-college-2115'
,'Swarthmore College',3,'https://www.usnews.com/best-colleges/swarthmore-college-3370'
,'Wellesley College',3,'https://www.usnews.com/best-colleges/wellesley-college-2224'
,'Pomona College',5,'https://www.usnews.com/best-colleges/pomona-college-1173'
,'Bowdoin College',6,'https://www.usnews.com/best-colleges/bowdoin-college-2038'
,'Carleton College',7,'https://www.usnews.com/best-colleges/carleton-college-2340'
,'Claremont McKenna College',7,'https://www.usnews.com/best-colleges/claremont-mckenna-college-1170'
,'Middlebury College',7,'https://www.usnews.com/best-colleges/middlebury-college-3691'
,'Washington and Lee University',10,'https://www.usnews.com/best-colleges/washington-and-lee-3768'
,'Colby College',11,'https://www.usnews.com/best-colleges/colby-college-2039'
,'Haveford College',11,'https://www.usnews.com/best-colleges/haverford-college-3274'
,'Smith College',11,'https://www.usnews.com/best-colleges/smith-college-2209'
,'Grinnel College',14,'https://www.usnews.com/best-colleges/grinnell-college-1868'
,'Hamliton College',14,'https://www.usnews.com/best-colleges/hamilton-college-2728'
,'Colgate College',17,'https://www.usnews.com/best-colleges/colgate-university-2701'
,'United State Naval Academy ',17,'https://www.usnews.com/best-colleges/united-states-naval-academy-2101'
,'Wesleyan University ',17,'https://www.usnews.com/best-colleges/wesleyan-university-1424'
,'Bates College',21,'https://www.usnews.com/best-colleges/bates-college-2036'
,'United States Military Academy ',21,'https://www.usnews.com/best-colleges/west-point-2893'
,'Harvey Mudd College',23,'https://www.usnews.com/best-colleges/harvey-mudd-college-1171'
,'University of Richmond',23,'https://www.usnews.com/best-colleges/bryn-mawr-college-3237'
,'Barnard College',25,'https://www.usnews.com/best-colleges/barnard-college-2708'
,'Macalester College',25,'https://www.usnews.com/best-colleges/macalester-college-2358'
,'Bryn Mawr College',27,'https://www.usnews.com/best-colleges/bryn-mawr-college-3237'
,'College of the Holy Cross',27,'https://www.usnews.com/best-colleges/holy-cross-2141'
,'Colorado College',27,'https://www.usnews.com/best-colleges/colorado-college-1347'
,'Kenyon College',27,'https://www.usnews.com/best-colleges/kenyon-college-3065'
,'Soka University of America',27,'https://www.usnews.com/best-colleges/soka-university-of-america-38144'
,'Mount Holyoke College',32,'https://www.usnews.com/best-colleges/mount-holyoke-college-2192'
,'Oberlin College',33,'https://www.usnews.com/best-colleges/oberlin-college-3086'
,'Scripps College',33,'https://www.usnews.com/best-colleges/scripps-college-1174'
,'Bucknell University',35,'https://www.usnews.com/best-colleges/bucknell-university-3238'
,'Pitzer College',35,'https://www.usnews.com/best-colleges/pitzer-college-1172'
,'Thomas Aquinas College',35,'https://www.usnews.com/best-colleges/thomas-aquinas-college-10448'
,'Franklin and Marshall College',38,'https://www.usnews.com/best-colleges/franklin-and-marshall-college-3265'
,'Lafayette College',39,'https://www.usnews.com/best-colleges/lafayette-college-3284'
,'Occidental College',39,'https://www.usnews.com/best-colleges/occidental-college-1249'
,'Skidmore College',39,'https://www.usnews.com/best-colleges/skidmore-college-2814'
,'United States Air Force Academy',39,'https://www.usnews.com/best-colleges/united-states-air-force-academy-1369'
,'Denison University',43,'https://www.usnews.com/best-colleges/denison-university-3042'
,'The University of the South',43,'https://www.usnews.com/best-colleges/the-university-of-the-south-3534'
,'Union College',45,'https://www.usnews.com/best-colleges/union-college-new-york-2889'
,'Berea College',46,'https://www.usnews.com/best-colleges/berea-college-1955'
,'Connecticut College',46,'https://www.usnews.com/best-colleges/connecticut-college-1379'
,'DePauw University',46,'https://www.usnews.com/best-colleges/depauw-university-1792'
,'Dickinson College',46,'https://www.usnews.com/best-colleges/dickinson-college-3253'
,'Furman University',46,'https://www.usnews.com/best-colleges/furman-university-3434'
,'Trinity College',46,'https://www.usnews.com/best-colleges/trinity-college-1414'
,'Whitman College',46,'https://www.usnews.com/best-colleges/whitman-college-3803'
,'Centre College',53,'https://www.usnews.com/best-colleges/centre-college-1961'
,'Gettysburg College',53,'https://www.usnews.com/best-colleges/gettysburg-college-3268'
,'Rhodes College',53,'https://www.usnews.com/best-colleges/rhodes-college-3519'
,'Wabash College',53,'https://www.usnews.com/best-colleges/wabash-college-1844'
,'Spelman College',53,'https://www.usnews.com/best-colleges/spelman-college-1594'
,'Agnes Scott College',58,'https://www.usnews.com/best-colleges/agnes-scott-college-1542'
,'Lawrence University',58,'https://www.usnews.com/best-colleges/lawrence-university-3856'
,'St. Lawrence University',58,'https://www.usnews.com/best-colleges/st-lawrence-university-2829'
,'Wheaton College',58,'https://www.usnews.com/best-colleges/wheaton-college-1781'
,'Bard College',62,'https://www.usnews.com/best-colleges/bard-college-2671'
,'St. Olaf College',62,'https://www.usnews.com/best-colleges/st-olaf-college-2382'
,'Hillsdale College',64,'https://www.usnews.com/best-colleges/hillsdale-college-2272'
,'St. John College',64,'https://www.usnews.com/best-colleges/st-johns-college-maryland-2092'
,'College of Wooster',66,'https://www.usnews.com/best-colleges/college-of-wooster-3037'
,'Knox College',66,'https://www.usnews.com/best-colleges/knox-college-1704'
,'Cornell College',68,'https://www.usnews.com/best-colleges/cornell-college-1856'
,'Reed College',68,'https://www.usnews.com/best-colleges/reed-college-3217'
,'Sarah Lawrence College',68,'https://www.usnews.com/best-colleges/sarah-lawrence-2813'
,'Willamette University',68,'https://www.usnews.com/best-colleges/willamette-3227'
,'Hobart and William Smith College',72,'https://www.usnews.com/best-colleges/hobart-and-william-2731'
,'Kalamazoo College',72,'https://www.usnews.com/best-colleges/kalamazoo-college-2275'
,'Lewis & Clark College',72,'https://www.usnews.com/best-colleges/lewis--clark-college-3197'
,'Muhlenberg College',72,'https://www.usnews.com/best-colleges/muhlenberg-college-3304'
,'St. John_s College',72,'https://www.usnews.com/best-colleges/st-johns-college-new-mexico-2093'
,'Transylvania University',72,'https://www.usnews.com/best-colleges/transylvania-university-1987'
,'Virginia Military Institute',72,'https://www.usnews.com/best-colleges/vmi-3753'
,'Wofford College',72,'https://www.usnews.com/best-colleges/wofford-college-3457'
,'Earlham College',80,'https://www.usnews.com/best-colleges/earlham-college-1793'
,'Illinois Wesleyan University',80,'https://www.usnews.com/best-colleges/illinois-wesleyan-university-1696'
,'Allegheny College',82,'https://www.usnews.com/best-colleges/allegheny-college-3230'
,'Beloit College',82,'https://www.usnews.com/best-colleges/beloit-college-3835'
,'College of St. Benedict',82,'https://www.usnews.com/best-colleges/college-of-st-benedict-2341'
,'College of the Atlantic',82,'https://www.usnews.com/best-colleges/college-of-the-atlantic-11385'
,'Juniata College',82,'https://www.usnews.com/best-colleges/juniata-college-3279'
,'Ursinus College ',82,'https://www.usnews.com/best-colleges/ursinus-3385'
,'Wheaton College',82,'https://www.usnews.com/best-colleges/wheaton-college-massachusetts-2227'
,'Bennington College',89,'https://www.usnews.com/best-colleges/bennington-college-3682'
,'Gustavus Adolphus College',89,'https://www.usnews.com/best-colleges/gustavus-college-2353'
,'University of Puget Sound',89,'https://www.usnews.com/best-colleges/university-of-puget-sound-3797'
,'Augustana College',92,'https://www.usnews.com/best-colleges/augustana-college-1633'
,'Hendrix College',92,'https://www.usnews.com/best-colleges/hendrix-college-1099'
,'Lake Forest College',92,'https://www.usnews.com/best-colleges/lake-forest-college-1706'
,'Ohio Wesleyan University',92,'https://www.usnews.com/best-colleges/ohio-wesleyan-3109'
,'Southwestern University',92,'https://www.usnews.com/best-colleges/southwestern-university-3620'
,'St. John_s University',92,'https://www.usnews.com/best-colleges/st-johns-university-minnesota-2379'
,'St. Mary_s College of Maryland',92,'https://www.usnews.com/best-colleges/st-marys-college-2095'
,'Washington and Jefferson College',92,'https://www.usnews.com/best-colleges/washington-and-jefferson-college-3389'
,'Luther College',100,'https://www.usnews.com/best-colleges/luther-college-1874'
,'Principia College',100,'https://www.usnews.com/best-colleges/principia-college-1744'
,'Hollins University',102,'https://www.usnews.com/best-colleges/hollins-university-3715'
,'New College of Florida',102,'https://www.usnews.com/best-colleges/new-college-of-florida-153704'
,'Saint Mary_s College',102,'https://www.usnews.com/best-colleges/saint-marys-college-1836'
,'Elizabethtown College',105,'https://www.usnews.com/best-colleges/elizabethtown-college-3262'
,'Hanover College',105,'https://www.usnews.com/best-colleges/hanover-college-1801'
,'Hope College',105,'https://www.usnews.com/best-colleges/hope-college-2273'
,'Ripon College',105,'https://www.usnews.com/best-colleges/ripon-college-3884'
,'Washington College',105,'https://www.usnews.com/best-colleges/washington-college-maryland-2108'
,'Whittier College',105,'https://www.usnews.com/best-colleges/whittier-college-1342'
,'Goucher College',111,'https://www.usnews.com/best-colleges/goucher-college-2073'
,'Hampden-Sydney College',111,'https://www.usnews.com/best-colleges/hampden-sydney-3713'
,'Randolph-Macon College',111,'https://www.usnews.com/best-colleges/randolph-macon-college-3733'
,'Grove City College',114,'https://www.usnews.com/best-colleges/grove-city-college-3269'
,'St. Anselm College',114,'https://www.usnews.com/best-colleges/st-anselm-college-2587'
,'Westminster College',114,'https://www.usnews.com/best-colleges/westminster-college-pennsylvania-3392'
,'Austin College',117,'https://www.usnews.com/best-colleges/austin-college-3543'
,'College of Idaho',117,'https://www.usnews.com/best-colleges/college-of-idaho-1617'
,'Drew University',117,'https://www.usnews.com/best-colleges/drew-university-2603'
,'Linfield College',117,'https://www.usnews.com/best-colleges/linfield-college-3198'
,'Lycoming College',117,'https://www.usnews.com/best-colleges/lycoming-college-3293'
,'Susquehanna University',117,'https://www.usnews.com/best-colleges/susquehanna-university-3369'
,'Westmont College',117,'https://www.usnews.com/best-colleges/westmont-college-1341'
,'Houghton College',124,'https://www.usnews.com/best-colleges/houghton-college-2734'
,'Millsaps College',124,'https://www.usnews.com/best-colleges/millsaps-college-2414'
,'Monmouth College',124,'https://www.usnews.com/best-colleges/monmouth-college-1725'
,'St. Michael_s College',124,'https://www.usnews.com/best-colleges/st-michaels-college-3694'
,'Stonehill College',124,'https://www.usnews.com/best-colleges/stonehill-college-2217'
,'Wells College',124,'https://www.usnews.com/best-colleges/wells-college-2901'
,'Coe College',130,'https://www.usnews.com/best-colleges/coe-college-1854'
,'Roanoke College',130,'https://www.usnews.com/best-colleges/roanoke-college-3736'
,'Concordia College--Moorhead',132,'https://www.usnews.com/best-colleges/concordia-college-2346'
,'Randolph College',132,'https://www.usnews.com/best-colleges/randolph-college-3734'
,'Saint Vincent College',132,'https://www.usnews.com/best-colleges/saint-vincent-college-3368'
,'Salem College',132,'https://www.usnews.com/best-colleges/salem-college-2960'
,'Illinois College',136,'https://www.usnews.com/best-colleges/illinois-college-1688'
,'Marlboro College',136,'https://www.usnews.com/best-colleges/marlboro-college-3690'
,'Moravian College',136,'https://www.usnews.com/best-colleges/moravian-college-3301'
,'Simpson College ',136,'https://www.usnews.com/best-colleges/simpson-college-1887'
,'Albion College ',140,'https://www.usnews.com/best-colleges/albion-college-2235'
,'Birmingham-Southern College',140,'https://www.usnews.com/best-colleges/birminghamsouthern-college-1012'
,'Eckerd College',140,'https://www.usnews.com/best-colleges/eckerd-college-1487'
,'Massachusetts College of Liberal Arts',140,'https://www.usnews.com/best-colleges/mcla-2187'
,'Presbyterian College',140,'https://www.usnews.com/best-colleges/presbyterian-college-3445'
,'Franklin College',145,'https://www.usnews.com/best-colleges/franklin-college-1798'
,'St.Norbert College',145,'https://www.usnews.com/best-colleges/st-norbert-college-3892'
,'Wesleyan College',145,'https://www.usnews.com/best-colleges/wesleyan-college-1600'
,'Covenant College',148,'https://www.usnews.com/best-colleges/covenant-college-3484'
,'Emory and Henry College',148,'https://www.usnews.com/best-colleges/emory-and-henry-college-3709'
,'Meredith College',148,'https://www.usnews.com/best-colleges/meredith-college-2945'
,'University of Minnesota--Morris',148,'https://www.usnews.com/best-colleges/minnesota-morris-2389'
,'University of North Carolina--Asheville',148,'https://www.usnews.com/best-colleges/unc-asheville-2907'
,'Wartburg College',148,'https://www.usnews.com/best-colleges/wartburg-college-1896'
,'Guilford College ',154,'https://www.usnews.com/best-colleges/guilford-college-2931'
,'Morehouse College ',154,'https://www.usnews.com/best-colleges/morehouse-college-1582'
,'Sweet Briar College ',154,'https://www.usnews.com/best-colleges/sweet-briar-college-3742'
,'Centenary College of Louisiana ',157,'https://www.usnews.com/best-colleges/centenary-college-of-louisiana-2003'
,'Georgetown College',157,'https://www.usnews.com/best-colleges/georgetown-college-1964'
,'Westminster College',157,'https://www.usnews.com/best-colleges/westminster-college-pennsylvania-3392'
,'Central College',160,'https://www.usnews.com/best-colleges/central-college-1850'
,'Hartwick College',160,'https://www.usnews.com/best-colleges/hartwick-college-2729'
,'Warren Wilson College',160,'https://www.usnews.com/best-colleges/warren-wilson-2979'
,'Wittenberg University',160,'https://www.usnews.com/best-colleges/wittenberg-university-3143'
,'Albright College',164,'https://www.usnews.com/best-colleges/albright-college-3229'
,'Allen University ',165,'https://www.usnews.com/best-colleges/allen-university-3417'
,'Aquinas College',166,'https://www.usnews.com/best-colleges/aquinas-college-2239'
,'Ave Maria University',167,'https://www.usnews.com/best-colleges/ave-maria-university-39413'
,'Bennett College',168,'https://www.usnews.com/best-colleges/bennett-college-2911'
,'Bethany College',169,'https://www.usnews.com/best-colleges/bethany-college-west-virginia-3808'
,'Bethany Lutheran College',170,'https://www.usnews.com/best-colleges/bethany-college-west-virginia-3808'
,'Bethune-Cookman University',171,'https://www.usnews.com/best-colleges/bethunecookman-university-1467'
,'Blackburn College',172,'https://www.usnews.com/best-colleges/blackburn-college-1639'
,'Bloomfield College',173,'https://www.usnews.com/best-colleges/bloomfield-college-2597'
,'Brewton-Parker College',174,'https://www.usnews.com/best-colleges/brewtonparker-college-1557'
,'Bridgewater College',175,'https://www.usnews.com/best-colleges/bridgewater-college-3704'
,'Chowan University',175,'https://www.usnews.com/best-colleges/chowan-university-2916'
,'Dillard University',176,'https://www.usnews.com/best-colleges/dillard-university-2004'
,'East-West University',177,'https://www.usnews.com/best-colleges/east-west-chicago-university-21686'
,'Emmanuel College',178,'https://www.usnews.com/best-colleges/emmanuel-college--massachusetts-2147'
,'Fisk University',179,'https://www.usnews.com/best-colleges/fisk-3490'
,'Fort Lewis College',180,'https://www.usnews.com/best-colleges/fort-lewis-college-1353'
,'Gordon College',181,'https://www.usnews.com/best-colleges/gordon-college-2153'
,'Johnson C. Smith University',182,'https://www.usnews.com/best-colleges/johnson-c-smith-2936'
,'Judson College',183,'https://www.usnews.com/best-colleges/judson-college-1023'
,'The King_s College',184,'https://www.usnews.com/best-colleges/kings-college-new-york-666134'
,'Lane College',185,'https://www.usnews.com/best-colleges/lane-college-3499'
,'Louisiana State University--Alexandria',186,'https://www.usnews.com/best-colleges/louisiana-state-university-alexandria-2011'
,'Lyon College',187,'https://www.usnews.com/best-colleges/lyon-college-1088'
,'Mansfield University of Pennsylvania',188,'https://www.usnews.com/best-colleges/mansfield-university-of-pennsylvania-3324'
,'Marymount California University',189,'https://www.usnews.com/best-colleges/marymount-california-university-666945'
,'Marymount Manhattan College',190,'https://www.usnews.com/best-colleges/marymount-manhattan-2769'
,'Oglethorpe University',191,'https://www.usnews.com/best-colleges/oglethorpe-university-1586'
,'Pine Manor College',192,'https://www.usnews.com/best-colleges/pine-manor-college-2201'
,'Providence Christian College',193,'https://www.usnews.com/best-colleges/providence-christian-college-41539'
,'Purchase College--SUNY',194,'https://www.usnews.com/best-colleges/suny-purchase-6791'
,'Rust College',195,'https://www.usnews.com/best-colleges/rust-college-2433'
,'Shepherd University',196,'https://www.usnews.com/best-colleges/shepherd-university-3822'
,'Oglethorpe University',197,'https://www.usnews.com/best-colleges/oglethorpe-university-1586'
,'Pine Manor College',198,'https://www.usnews.com/best-colleges/pine-manor-college-2201'
,'Providence Christian College',199,'https://www.usnews.com/best-colleges/providence-christian-college-41539'
,'Purchase College SUNY',200,'https://www.usnews.com/best-colleges/suny-purchase-6791'
,'Rust College',201,'https://www.usnews.com/best-colleges/rust-college-2433'
,'Shepherd University',202,'https://www.usnews.com/best-colleges/shepherd-university-3822'
,'Southern Virginia University',203,'https://www.usnews.com/best-colleges/southern-virginia-university-666980'
,'Spring Hills College ',204,'https://www.usnews.com/best-colleges/spring-hill-college-1041'
,'Stillman College',205,'https://www.usnews.com/best-colleges/stillman-college-1044'
,'Talladega College',206 ,'https://www.usnews.com/best-colleges/talladega-college-1046'
,'Tougaloo College',207,'https://www.usnews.com/best-colleges/tougaloo-college-2439'
,'University of Pikeville',208,'https://www.usnews.com/best-colleges/university-of-pikeville-1980'
,'University of Science and Arts of Oklahoma',209,'https://www.usnews.com/best-colleges/university-of-science-and-arts-3167'
,'University of South Carolina Beaufort',210,'https://www.usnews.com/best-colleges/university-of-south-carolina-beaufort-3450'
,'University of the West',211,'https://www.usnews.com/best-colleges/university-of-the-west-36963'
,'University of Virginia Wise',212,'https://www.usnews.com/best-colleges/uva-wise-3747'
,'University of Wisconsin Superior',213,'https://www.usnews.com/best-colleges/university-of-wisconsin-superior-3925'
,'Virginia Union University',214,'https://www.usnews.com/best-colleges/virginia-union-university-3766'
,'Virginia Wesleyan University',215,'https://www.usnews.com/best-colleges/virginia-wesleyan-3767'
,'Williams Baptist University',216,'https://www.usnews.com/best-colleges/williams-baptist-university-1106'
]