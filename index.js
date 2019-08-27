//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


//scroll to elemt-smooth
//the function takes an optional param called cb
// if cb is a callback function then it is returned by the function in calling
// if using without a callback, then pass null to be safe
function scrollToEl(e,cb){
    let el = document.getElementById(e);
    el.scrollIntoView({ behavior: 'smooth'})
    if(isFunction(cb)){
       return cb();
    }
}
// check if var is a function
function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
   }