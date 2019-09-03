function scrollToEl(e, cb) {
    let el = document.getElementById(e);
    el.scrollIntoView({ behavior: 'smooth', block: 'center'})
    if (isFunction(cb)) {
        return cb();
    }
}