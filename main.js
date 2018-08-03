
//var speed = "slow"

setInterval(getTheTime, 10);


//this was an attempt to get it to allow user to change colors every 1/100 of
//a second, but I couldn't get it to function
//document.querySelector("#cs-button").onclick = function(){
     // console.log(bigMins);
    //var speed = "fast";
    //setInterval(function(){ getTheTime("fast") }, 10);
//}

//document.querySelector("#sec-button").onclick = function(){
    //var speed = "slow";
    //clearInterval(getTheTime);
    //setInterval(function(){ getTheTime("slow") }, 10);
//}

function getTheTime(){
    //var speed = "slow";
    var time = new Date();
    var timeStr = time.toString();
    var timeStr2 = timeStr.split(' ');
    var timeStr1 = timeStr.split(' ')[4];
    //"18:39:14"
    //var TimeZoneStr = timeStr.split(' ')[6]+timeStr.split(' ')[7] + timeStr.split(' ')[8]; 
    var hrsMinsSecs = timeStr.split(' ')[4].split(':');
    // ["18", "39", "14"]
 
    // this is an extra feature I added to make the background color brighter.
    // I multipiled the hour by 4 and the mins and secs by 1.6; 
    var bigHr = time.getHours() * 4;
    document.querySelector('#red').style.width = bigHr+"%";

    var bigMins = parseInt(time.getMinutes() * 1.6);
    document.querySelector('#green').style.width = bigMins+"%";
    if (bigMins<10){
        bigMins = "0" + bigMins;
    } 

    var bigSecs = parseInt(time.getSeconds() * 1.6);
    document.querySelector('#blue').style.width = bigSecs+"%";
    if (bigSecs<10){
        bigSecs = "0" + bigSecs;
    } 

    // var csecs = parseInt(time.getMilliseconds()/10); 
    // if (csecs<10){
    //     csecs = '0' + csecs;
    // }  
    // if (speed == "fast"){
    //     var concatHex = "#"+bigMins+bigSecs+csecs;
    // }else{
            var concatHex = "#"+bigHr+bigMins+bigSecs;
    // }

    // change the body's background color:
    document.querySelector('body').style.backgroundColor = concatHex;

    // put the time and greeting on the DOM:
    var xm = "AM";
    document.querySelector("#greet").textContent = "Good Morning!";
    if (time.getHours()>12){
        xm = "PM";
        document.querySelector("#hrs").textContent = time.getHours() - 12;
        document.querySelector("#greet").textContent = "Good Afternoon!";
        if (time.getHours()>17){
            document.querySelector("#greet").textContent = "Good Evening!";
        }
    }else{
        document.querySelector("#hrs").textContent = time.getHours();
    }

    document.querySelector("#mins").textContent = hrsMinsSecs[1];
    document.querySelector("#secs").textContent = hrsMinsSecs[2];
    //document.querySelector("#ms").textContent = time.getMilliseconds();
    //I had it displaying milliseconds, but that wasn't very useful & kind of annoying
    document.querySelector("#xm").textContent = xm;
    document.querySelector("#hex-color").textContent = concatHex;

} // end getTheTime()





// function addZero(x){
//     x = parseInt(x);
//     if (x<10){
//         return x = "0"+x;
//     }else{
//         return x;
//     }
// }

// console.log(addZero(9));





// if(document.querySelector('body').classList.contains('green')){
//     document.querySelector('body').classList.remove('green')
// }else{
//     document.querySelector('body').className
// }