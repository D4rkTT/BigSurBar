setInterval(function(){
    // Battery Options
    if (config.batteryiconsw) {
        $(".battery-icon").show();
    }else{
        $(".battery-icon").hide();
    }
    
    if(config.batterypercsw){
        $("#battery-percentage").show();
    }else{
        $("#battery-percentage").hide();
    }


    // Cellular Options
    if(config.cellulariconsw){
        $(".cellular-icon").show();
    }else{
        $(".cellular-icon").hide();
    }
    if(config.cellularnamesw){
        $("#cellular-type").show();
    }else{
        $("#cellular-type").hide();
    }

    // WIFI Options
    if(config.wifiiconsw){
        $(".wifi-icon").show();
    }else{
        $(".wifi-icon").hide();
    }
    if(config.wifissidsw){
        $("#wifi-SSID").show();
    }else{
        $("#wifi-SSID").hide();
    }

    // Other Settings
    if(config.bluetoothiconsw){
        $("#bt-signal").show();
    }else{
        $("#bt-signal").hide();
    }
    if(config.volumesw){
        $("#vol-item").show();
    }else{
        $("#vol-item").hide();
    }
    if(config.mediasw){
        $("#music-item").show();
    }else{
        $("#music-item").hide();
    }

    // Right Text
    $("#TimeNow").html(config.rightText.replace("{datetime}", GlobalDateTime).replace("{weather}", GlobalWeather));
    $("#apple-icon").html(config.leftText.replace("{datetime}", GlobalDateTime).replace("{weather}", GlobalWeather));

    $("#bar").css("backdrop-filter", "blur(" + config.blurvar + "px)");
    $("#bar").css("-webkit-backdrop-filter", "blur(" + config.blurvar + "px)");
    
},1000)
