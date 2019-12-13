
//* **************************//
// Functions written by:      //
// Samuel Robens-Paradise     //
// srobensp@edu.uwaterloo.ca  //


window.addEventListener('load', setBCFerriesVars);

function setBCFerriesVars() {
  window.timelineManager = new ViewHandler('timeline-outer-anim', 'timeline-id', 'timeline-inner-id')
  window.data_handler = new WebHandler(true, 'github');
  window.data_handler.getDataFromGithub('github');
  window.TimelineHasBeenScrolled = false;
  addMobileClasses()
}
window.addEventListener('scroll', () => {
  scrollTimeline();
})

function scrollTimeline() {
  try {
    if (window.timelineManager.getID() === (null || undefined)) throw err;
    var timeline = document.getElementById(window.timelineManager.getID());
  } catch (err) {
    console.log('Warning: Window.timelineManager is not yet defined, error handled');
    return false;
  }
  if (window.TimelineHasBeenScrolled === false) {
    srollAnimationHandler(timeline);
    return true;
  }
  return false;
}
function srollAnimationHandler(e) {
  let percentage_val;
  const ideal_height = 400;
  const {
    timeline_2, timeline_3, timeline_4, timeline, description_1, description_2, description_3, description_4,
  } = setVars();
  if (window.timelineManager.isElementInViewport(e) && (e.getBoundingClientRect().top) <= ideal_height) {
    percentage_val = Math.abs(e.getBoundingClientRect().top - ideal_height);
    percentage_val = ((100 * percentage_val) / (ideal_height - 1));
    if (timeline_2.hasBeenTriggered || timeline_3.hasBeenTriggered || timeline_4.hasBeenTriggered) {
      return false;
    } if (percentage_val >= 8) {
      window.TimelineHasBeenScrolled = true;
      timeline_2.hasBeenTriggered = true;
      timeline_2.elem.style.animation = timeline_2.animation;
      timeline_3.elem.style.animation = timeline_2.animation;
      timeline_4.elem.style.animation = timeline_2.animation;
      timeline.elem.style.animation = timeline.animation_1;
      description_2.elem.style.animation = description_2.animation;
      description_3.elem.style.animation = description_2.animation;
      description_4.elem.style.animation = description_2.animation;
      description_2.elem_path.style.animation = description_2.path_animation;
      description_3.elem_path.style.animation = description_2.path_animation;
      description_4.elem_path.style.animation = description_2.path_animation;


      setTimeout(() => {
        timeline_3.hasBeenTriggered = true;
        timeline_3.elem.style.animation = timeline_3.animation;
        timeline_4.elem.style.animation = timeline_3.animation;
        timeline.elem.style.animation = timeline.animation_2;
        description_3.elem.style.animation = description_3.animation;
        description_4.elem.style.animation = description_3.animation;
        description_3.elem_path.style.animation = description_3.path_animation;
        description_4.elem_path.style.animation = description_3.path_animation;
      }, 600);
      setTimeout(() => {
        timeline_4.hasBeenTriggered = true;
        timeline_4.elem.style.animation = timeline_4.animation;
        timeline.elem.style.animation = timeline.animation_3;
        description_4.elem.style.animation = description_4.animation;
        description_4.elem_path.style.animation = description_4.path_animation;
      }, 1200)
      return true;
    }
    return false;
  }

  function setVars() {
    const timeline = {
      elem: document.getElementById('timeline-id'),
      animClass: 'anim-class-t',
      hasBeenTriggered: false,
      animation_1: 'timeline-s-1 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      animation_2: 'timeline-s-2 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      animation_3: 'timeline-s-3 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const timeline_2 = {
      elem: document.getElementById('timeline-2'),
      animClass: 'anim-class-t-2',
      hasBeenTriggered: false,
      animation: 'timeline-2-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const timeline_3 = {
      elem: document.getElementById('timeline-3'),
      animClass: 'anim-class-t-3',
      hasBeenTriggered: false,
      animation: 'timeline-3-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const timeline_4 = {
      elem: document.getElementById('timeline-4'),
      animClass: 'anim-class-t-4',
      hasBeenTriggered: false,
      animation: 'timeline-4-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const description_1 = {
      elem: document.getElementById('timeline-description-1'),
      elem_path: document.getElementById('timeline-description-1-b'),
      hasBeenTriggered: false,
      animation: 'timeline-1-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation: 'timeline-1-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const description_2 = {
      elem: document.getElementById('timeline-description-2'),
      elem_path: document.getElementById('timeline-description-2-b'),
      hasBeenTriggered: false,
      animation: 'timeline-2-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation: 'timeline-2-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const description_3 = {
      elem: document.getElementById('timeline-description-3'),
      elem_path: document.getElementById('timeline-description-3-b'),
      hasBeenTriggered: false,
      animation: 'timeline-3-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation: 'timeline-3-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    const description_4 = {
      elem: document.getElementById('timeline-description-4'),
      elem_path: document.getElementById('timeline-description-4-b'),
      hasBeenTriggered: false,
      animation: 'timeline-4-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation: 'timeline-4-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    };
    return {
      timeline_2, timeline_3, timeline_4, timeline, description_1, description_2, description_3, description_4,
    };
  }
}
function scrollToEl(e, cb) {
  const el = document.getElementById(e);
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  if (isFunction(cb)) {
    return cb();
  }
}
function addMobileClasses() {
  const bcFerriesNode = document.getElementById('user-interviews-text');
  const designandDevNode = document.getElementById('design-development-text');
  if (window.innerWidth < 768) {
    bcFerriesNode.classList.add('order-first');
    designandDevNode.classList.add('order-first');
  }
}
