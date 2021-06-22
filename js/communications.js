api.comms.observeData(function (newData) {
    if(newData.telephony.airplaneMode){
        $("#cellular-signal").show();
        $("#cellular-type").text("");
        $(".cellular-icon").css("background", "url(img/airplane.png)");
    }else {
        if(newData.telephony.type != "" && newData.telephony.operator != ""){
            // Device supported cellular
            $("#cellular-signal").show();
            $("#cellular-type").text(newData.telephony.operator + " " + newData.telephony.type);
            $(".cellular-icon").css("background", "url(img/signal" + newData.telephony.bars.toString() +  ".png)");
            
        }else{
            $("#cellular-signal").hide();
        }
    }
    
    if(newData.wifi.enabled !== false && newData.wifi.ssid !== ""){
        $("#wifi-signal").show();
        $(".wifi-icon").css("background", "url(img/wifi" + (newData.wifi.bars) +  ".png)");
        $("#wifi-SSID").text(newData.wifi.ssid);
    }else{
        $("#wifi-signal").hide();
    }

    if(newData.bluetooth.enabled !== false){
        $("#bt-signal").show();
        if(newData.bluetooth.devices.length > 0){
            $(".bt-icon").css("background", "url(img/bluetooth-connected.png)");
        }else{
            $(".bt-icon").css("background", "url(img/bluetooth.png)");
        }

    }else{
        $("#bt-signal").hide();
    }
});