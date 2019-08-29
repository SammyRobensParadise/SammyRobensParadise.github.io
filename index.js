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
    window.bc_ferries_viewer = new ViewHandler("bc-ferries-anim-class", "bc-ferries-container", "bc-ferries-sec");
    window.portfolio_viewer = new ViewHandler("portfolio-anim-class", "portfolio-container", "portfolio-sec");
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
    constructor(add_class_param, id_param, id_target) {
        this.add_class = add_class_param;
        this.el_id = id_param;
      //  console.log(this.add_class, this.el_id);
        this.elem = document.getElementById(id_param);
      //  console.log(this.add_class, this.el_id, this.elem);
        this.target = id_target;
        this.target_elem = document.getElementById(id_target)
    }
    isElementInViewport(el) {
        //console.log("checking...");
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
window.addEventListener('scroll', function () {
    var activeEl = window.bc_ferries_viewer;
    var secondEl = window.portfolio_viewer;
    var slide_in_left = 'slide-in-left 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s 1 normal forwards';
    var slide_in_right = 'slide-in-right 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s 1 normal forwards';
    if (activeEl.isElementInViewport(activeEl.elem)) {
        // activeEl.target_elem.classList.add(activeEl.add_class);
        activeEl.target_elem.style.animation = slide_in_left;
    }
    if (secondEl.isElementInViewport(secondEl.elem)) {
        secondEl.target_elem.style.animation = slide_in_right;
    }
    
})