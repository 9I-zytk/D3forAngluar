/**
 * Created by 9I on 2016/3/25.
 */
(function () {
    'use strict';
    $(window).load(function(){
        setTimeout( hideLoader , 1000)
    });

    function hideLoader() {
        $('#loader-container').fadeOut("slow")
    }
})();
