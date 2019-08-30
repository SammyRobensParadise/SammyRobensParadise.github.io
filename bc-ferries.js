
//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


window.addEventListener("load", setBCFerriesVars);

function setBCFerriesVars() {
    window.timelineManager = new ViewHandler('timeline-outer-anim', 'timeline-id', 'timeline-inner-id')
    window.data_handler = new WebHandler(true, "github");
    window.data_handler._getDataFromGithub("github");
}
window.addEventListener("scroll", function () {
    scrollTimeline();
})

function scrollTimeline() {
    var timeline = document.getElementById(window.timelineManager._getID());
    srollAnimationHandler(timeline);
}
function srollAnimationHandler(e) {
    var percentage_val;
    var ideal_height = 400;
    var timeline_2 = document.getElementById('timeline-2');
    var timeline_3 = document.getElementById('timeline-3');
    var timeline_4 = document.getElementById('timeline-4');
    if (window.timelineManager.isElementInViewport(e) && (e.getBoundingClientRect().top) <= ideal_height) {
        percentage_val = Math.abs(e.getBoundingClientRect().top - ideal_height);
        percentage_val = ((100 * percentage_val) / (ideal_height - 1));
        console.log(percentage_val);
    }
}