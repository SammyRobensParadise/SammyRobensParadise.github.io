//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


//scroll to elemt-smooth
//the function takes an optional param called cb
// if cb is a callback function then it is returned by the function in calling
// if using without a callback, then pass null to be safe
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
function setGlobalVars() {
    window.Handler = new WebHandler(true);
    window.bc_ferries_viewer  = new  ViewHandler(bc_ferries, "bc-ferries-anim-class")
    console.log("setGlobalVar");
}

var bc_ferries = document.getElementsByClassName("projects-section-bc-ferries");
class ViewHandler {
    constructor(element_param, class_param) {
        this.el = element_param;
        this.anim_cls = class_param
    }
    isScrolledIntoView() {
        var rect = this.el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        console.log("viewing");
        return isVisible;
    }
    addViewClass(){
        if(this.isScrolledIntoView()){
            bc_ferries.classList.add(this.anim_cls);
        }
    }
}
