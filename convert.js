//current time
function current()
{
    var curr = Date.now();
    var utc = new Date().toUTCString();
    var data = {"unix":curr,"utc":utc};
    return data;
}
//

//convert
function addzero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day = days[a.getDay()];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = addzero(a.getDate());
    var hour = addzero(a.getHours());
    var min = addzero(a.getMinutes());
    var sec = addzero(a.getSeconds());
    var time = day + ', ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec + " " +"GMT";
    return time;
  }
//diff 216
function conv(time) 
{
    if(time.includes('-') || time.includes(' ')){
        let unix = Date.parse(time);
        time = timeConverter(unix);
        if(time == "Invalid Date"){return {error:"Invalid Date"}}
        if(time == "undefined, NaN undefined NaN NaN:NaN:NaN GMT"){return {error:"Invalid Date"}}
        return {"unix":unix+21600000,"utc":time};
    }
    else{
        var time = parseInt(time);
        var date = new Date(time).toUTCString();
        if(date == "Invalid Date"){return {error:"Invalid Date"}}
        if(date == "undefined, NaN undefined NaN NaN:NaN:NaN GMT"){return {error:"Invalid Date"}}
        return {"unix":time,"utc":date};
    }
};

module.exports = {conv,current};



  //console.log(timeConverter(1450742400000));