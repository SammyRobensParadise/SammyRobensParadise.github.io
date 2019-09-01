
//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


window.addEventListener("load", setBCFerriesVars);

function setBCFerriesVars() {
    window.timelineManager = new ViewHandler('timeline-outer-anim', 'timeline-id', 'timeline-inner-id')
    window.data_handler = new WebHandler(true, "github");
    window.data_handler._getDataFromGithub("github");
    window.TimelineHasBeenScrolled = false;
}
window.addEventListener("scroll", function () {
    scrollTimeline();
})

function scrollTimeline() {
    try {
        if (window.timelineManager._getID() === (null || undefined)) throw err;
        var timeline = document.getElementById(window.timelineManager._getID());
    }
    catch (err) {
        console.log("Warning: Window.timelineManager is not yet defined, error handled");
        return false;
    }
    if (window.TimelineHasBeenScrolled === false) {
        srollAnimationHandler(timeline);
        return true;
    } else {
        return false;
    }
}
function srollAnimationHandler(e) {
    var percentage_val;
    var ideal_height = 400;
    var timeline  ={
        elem: document.getElementById('timeline-id'),
        animClass: "anim-class-t",
        hasBeenTriggered: false,
        animation_1: "timeline-s-1 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards",
        animation_2: "timeline-s-2 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards",
        animation_3: "timeline-s-3 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards",
    }
    var timeline_2 = {
        elem: document.getElementById('timeline-2'),
        animClass: "anim-class-t-2",
        hasBeenTriggered: false,
        animation: "timeline-2-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards"
    };
    var timeline_3 = {
        elem: document.getElementById('timeline-3'),
        animClass: "anim-class-t-3",
        hasBeenTriggered: false,
        animation: "timeline-3-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards"
    };
    var timeline_4 = {
        elem: document.getElementById('timeline-4'),
        animClass: "anim-class-t-4",
        hasBeenTriggered: false,
        animation: "timeline-4-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards"
    };
    if (window.timelineManager.isElementInViewport(e) && (e.getBoundingClientRect().top) <= ideal_height) {
        percentage_val = Math.abs(e.getBoundingClientRect().top - ideal_height);
        percentage_val = ((100 * percentage_val) / (ideal_height - 1));
        console.log(percentage_val);
        console.log(timeline_2.hasBeenTriggered, "before")
        if (timeline_2.hasBeenTriggered || timeline_3.hasBeenTriggered || timeline_4.hasBeenTriggered) {
            console.log(timeline_2.hasBeenTriggered, "inIff")
            return false;
        } else
            if (percentage_val >= 8) {
                window.TimelineHasBeenScrolled = true;
                timeline_2.hasBeenTriggered = true;
                timeline_2.elem.style.animation = timeline_2.animation;
                timeline_3.elem.style.animation = timeline_2.animation;
                timeline_4.elem.style.animation = timeline_2.animation;
                timeline.elem.style.animation = timeline.animation_1;
                console.log(timeline_2.hasBeenTriggered);

                setTimeout(function () {
                    timeline_3.hasBeenTriggered = true;
                    timeline_3.elem.style.animation = timeline_3.animation;
                    timeline_4.elem.style.animation = timeline_3.animation;
                    timeline.elem.style.animation = timeline.animation_2;

                }, 600);
                setTimeout(function () {
                    timeline_4.hasBeenTriggered = true;
                    timeline_4.elem.style.animation = timeline_4.animation;
                    timeline.elem.style.animation = timeline.animation_3;
                }, 1200)
                return true;
            } else {
                return false;
            }
    }
}