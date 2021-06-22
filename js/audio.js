$(document).ready(function() {
    var isMuted, lastVol, HideVol;
    // Cuz fkn jquary replace any range type to its fkn theme xD
    $(".range-slider__range").attr("type", "range");

    api.media.observeData(function (newData) {
        $(".range-slider__range").val(newData.volume);
        if(newData.volume >= 50){
            $(".vol-icon").css("background", "url(img/vol2.png)");
        }else if(newData.volume > 0){
            $(".vol-icon").css("background", "url(img/vol1.png)");
        }else{
            $(".vol-icon").css("background", "url(img/vol-muted.png)");
        }
        if(!newData.isStopped){
            $("#music-name").text(newData.nowPlaying.title);
        }
    });

    $(document).on('input', '.range-slider__range', function() {
        if($(this).val() > 0){
            isMuted = false;   
        }
        api.media.setVolume($(this).val());
        clearTimeout(HideVol);
        HideVol = setTimeout(function(){
            $(".range-slider").hide(200);
        }, 2000);
        
    });
    
    $("#music-item").swiperight(function() {
        // Previous
        api.media.previousTrack();
    });
    $("#music-item").swipeleft(function() {
        // Next
        api.media.nextTrack();
    });
    
    $(".vol-icon").click(function(){
        if($(".range-slider").is(":visible")){
            ToggelMute()
        }else{
            $(".range-slider").show(200);
        }
        clearTimeout(HideVol);
        HideVol = setTimeout(function(){
            $(".range-slider").hide(200);
        }, 5000);
    });
    function ToggelMute(){
        if(isMuted){
            api.media.setVolume(lastVol);
            isMuted = false;
        }else{
            lastVol = api.media.volume;
            api.media.setVolume(0);
            isMuted = true;
        }
    }
});