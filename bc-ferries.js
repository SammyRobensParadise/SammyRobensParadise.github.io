
//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


window.addEventListener("load", setBCFerriesVars);

function setBCFerriesVars() {
    window.timelineManager = new ViewHandler('timeline-outer-anim', 'timeline-id', 'timeline-inner-id')
    window.data_handler = new WebHandler(true, "github");
    window.data_handler._getDataFromGithub("github");
   init();
    
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
        if (percentage_val > 8) {
            e.style.height = percentage_val + "%";
            if (percentage_val >= 8 && percentage_val <= 30) {
                timeline_2.style.top = percentage_val + "%";
            }
            if (percentage_val >= 8 && percentage_val <= 60) {
                timeline_3.style.top = percentage_val + "%";
            }
            if (percentage_val >= 8 && percentage_val <= 93) {
                timeline_4.style.top = percentage_val + "%";
            }
        }
    }
}

//enfore smooth scrolling
function init() {
    new SmoothScroll(document, 8, 1)
}

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement
            || document.documentElement
            || document.body.parentNode
            || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
        && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth
        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
      console.log("down");
   } else {
      // upscroll code
      console.log("up");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);