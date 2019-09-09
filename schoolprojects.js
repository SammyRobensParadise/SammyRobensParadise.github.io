window.addEventListener("load", setSchoolProjectVars);

function setSchoolProjectVars() {
    addMobileClasses();
}

function scrollToEl(e, cb) {
    let el = document.getElementById(e);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    if (isFunction(cb)) {
        return cb();
    }
}

function addMobileClasses() {
    console.log("called")
    var screamingSafeNode = document.getElementById('screaming-safe-text');
    var galleryDevNode = document.getElementById('safe-photo-gallery');
    if (window.innerWidth < 768) {
        screamingSafeNode.classList.add('order-first');
        galleryDevNode.classList.add('order-first');
    }
}