
// eslint-disable-next-line no-unused-vars
function getMobileOperatingSystemAndOpen(val) {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (val === 1) {
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.lego.technic.controlplus');
      return 'Windows Phone';
    } if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.lego.technic.controlplus');

      return 'Android';
    } if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open('https://apps.apple.com/app/lego-technic-control/id1465808291');
      return 'iOS';
    }
    window.open('https://apps.apple.com/app/lego-technic-control/id1465808291');
    return 'unknown';
  } if (val === 2) {
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.sphero.sprk');
      return 'Windows Phone';
    } if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.sphero.sprk');

      return 'Android';
    } if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open('https://apps.apple.com/ca/app/sphero-edu/id1349872101?mt=12');
      return 'iOS';
    }
    window.open('https://apps.apple.com/ca/app/sphero-edu/id1349872101?mt=12');
    return 'unknown';
  }
  return false;
}
function addMobileClasses() {
  const LegoNode = document.getElementById('technic-text');
  if (window.innerWidth < 768) {
    LegoNode.classList.add('order-first');
  }
}
function setFingerFoodVars() {
  addMobileClasses();
}
window.addEventListener('load', setFingerFoodVars);
