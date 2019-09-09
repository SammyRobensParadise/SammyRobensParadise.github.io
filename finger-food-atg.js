window.addEventListener("load",setFingerFoodVars);
function setFingerFoodVars(){
    addMobileClasses();
}
function getMobileOperatingSystemAndOpen(val) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (val === 1) {
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/details?id=com.lego.technic.controlplus');
            return "Windows Phone";
        } else
            if (/android/i.test(userAgent)) {
                window.open('https://play.google.com/store/apps/details?id=com.lego.technic.controlplus');

                return "Android";
            } else

                // iOS detection from: http://stackoverflow.com/a/9039885/177710
                if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    window.open('https://apps.apple.com/app/lego-technic-control/id1465808291');
                    return "iOS";
                } else {
                    window.open('https://apps.apple.com/app/lego-technic-control/id1465808291');
                    return "unknown";
                }
    } else if (val === 2) {
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/details?id=com.sphero.sprk');
            return "Windows Phone";
        } else
            if (/android/i.test(userAgent)) {
                window.open('https://play.google.com/store/apps/details?id=com.sphero.sprk');

                return "Android";
            } else

                // iOS detection from: http://stackoverflow.com/a/9039885/177710
                if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    window.open('https://apps.apple.com/ca/app/sphero-edu/id1349872101?mt=12');
                    return "iOS";
                } else {
                    window.open('https://apps.apple.com/ca/app/sphero-edu/id1349872101?mt=12');
                    return "unknown";
                }
    } else{
        return false;
    }
}
function addMobileClasses(){
    var LegoNode = document.getElementById('technic-text');
    if(window.innerWidth < 768){
        LegoNode.classList.add('order-first');
    }
}
