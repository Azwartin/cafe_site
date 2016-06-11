$(document).ready(function(){
    $(document).ready(function(){
        var settings = {
                            navigation: {
                                active: true
                            },
                            pagination: {
                                active: false
                            },
                            play:{
                                auto: true,
                                pauseOnHover: true,
                                interval: 4000
                            }
                        };
                
        $(".cafe_slider").slidesjs(settings);
    });
});