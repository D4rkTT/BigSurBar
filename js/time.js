var GlobalDateTime;
function updateTime(){
    var date = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayofweek = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var FullTime = hours + ':' + minutes + ' ' + ampm;
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    day = day < 10 ? '0' + day : day;
    FullDate = monthNames[month] + " " + day;
    month = month < 10 ? '0'+month : month;
    GlobalDateTime = dayNames[dayofweek] + "<tab><bold>" + FullDate + "</bold><tab> " + FullTime;
    
}