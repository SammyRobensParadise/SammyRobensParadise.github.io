//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


//scroll to elemt-smooth
//the function takes an optional param called cb
// if cb is a callback function then it is returned by the function in calling
// if using without a callback, then pass null to be safe
function setGlobalVars() {
    window.Handler = new WebHandler(true);
    window.bc_ferries_viewer = new ViewHandler("bc-ferries-anim-class", "bc-ferries-sec")
    console.log("setGlobalVar");
}

function scrollToEl(e, cb) {
    let el = document.getElementById(e);
    el.scrollIntoView({ behavior: 'smooth' })
    if (isFunction(cb)) {
        return cb();
    }
}
// check if var is a function
function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
window.addEventListener("load", setGlobalVars);
//webHandler Class
class WebHandler {
    constructor(loadStatus) {
        this.dataTime = new Date();
        this.isLoaded = loadStatus;
    }
    _getLoad() {
        return this.isLoaded;
    }
    _getDateRef() {
        return this.dataTime;
    }
}

class ViewHandler {
    constructor(add_class_param, id_param) {
        this.add_class = add_class_param;
        this.el_id = id_param;
        console.log(this.add_class, this.el_id);
        this.elem = document.getElementById(id_param);
        console.log(this.add_class, this.el_id, this.elem);
    }
    isElementInViewport(el) {
        console.log("checking...");
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }
}
window.addEventListener('scroll', function(){
    var activeEl = window.bc_ferries_viewer;
    this.console.log(activeEl.isElementInViewport(activeEl.elem));
    if(activeEl.isElementInViewport(activeEl.elem)){
    }
})