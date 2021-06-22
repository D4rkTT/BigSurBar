api.resources.observeData(function (newData) {
    var bp = newData.battery.percentage;
    var isCharging = newData.battery.state;
    if(isCharging){
        $(".battery-icon").css("background", "url(img/battery_charging.png)");
    }else{
        if(bp > 90){
            $(".battery-icon").css("background", "url(img/battery_100.png)");
        }else if(bp > 80){
            $(".battery-icon").css("background", "url(img/battery_90.png)");
        }else if(bp > 70){
            $(".battery-icon").css("background", "url(img/battery_80.png)");
        }else if(bp > 60){
            $(".battery-icon").css("background", "url(img/battery_70.png)");
        }else if(bp > 50){
            $(".battery-icon").css("background", "url(img/battery_60.png)");
        }else if(bp > 40){
            $(".battery-icon").css("background", "url(img/battery_50.png)");
        }else if(bp > 30){
            $(".battery-icon").css("background", "url(img/battery_40.png)");
        }else if(bp > 20){
            $(".battery-icon").css("background", "url(img/battery_30.png)");
        }else if(bp > 15){
            $(".battery-icon").css("background", "url(img/battery_20.png)");
        }else if(bp > 5){
            $(".battery-icon").css("background", "url(img/battery_10.png)");
        }else{
            $(".battery-icon").css("background", "url(img/battery_5.png)");
        }
    }
    $("#battery-percentage").text(bp + "%");
    
    
});