/* eslint-disable no-shadow */
//* **************************//
// Functions written by:      //
// Samuel Robens-Paradise     //
// srobensp@edu.uwaterloo.ca  //
function addMobileClasses() {
  const bcFerriesNode = document.getElementById('user-interviews-text')
  const designandDevNode = document.getElementById('design-development-text')
  if (window.innerWidth < 768) {
    bcFerriesNode.classList.add('order-first')
    designandDevNode.classList.add('order-first')
  }
}

function setBCFerriesVars() {
  // eslint-disable-next-line no-undef
  window.timelineManager = new ViewHandler(
    'timeline-outer-anim',
    'timeline-id',
    'timeline-inner-id',
  )
  // eslint-disable-next-line no-undef
  window.data_handler = new WebHandler(true, 'github')
  window.data_handler.getDataFromGithub('github')
  window.TimelineHasBeenScrolled = false
  addMobileClasses()
}
function srollAnimationHandler(e) {
  let percentageVal
  const idealHeightIncomming = 400
  const {
    timelineTwoEl,
    timelineThreeEl,
    timelineFourEl,
    timeline,
    descriptionTwo,
    descriptionThree,
    descriptionFour,
  // eslint-disable-next-line no-use-before-define
  } = setVars()
  if (
    window.timelineManager.isElementInViewport(e)
    && e.getBoundingClientRect().top <= idealHeightIncomming
  ) {
    percentageVal = Math.abs(e.getBoundingClientRect().top - idealHeightIncomming)
    percentageVal = (100 * percentageVal) / (idealHeightIncomming - 1)
    if (
      timelineTwoEl.hasBeenTriggered
      || timelineThreeEl.hasBeenTriggered
      || timelineFourEl.hasBeenTriggered
    ) {
      return false
    }
    if (percentageVal >= 8) {
      window.TimelineHasBeenScrolled = true
      timelineTwoEl.hasBeenTriggered = true
      timelineTwoEl.elem.style.animation = timelineTwoEl.animation
      timelineThreeEl.elem.style.animation = timelineTwoEl.animation
      timelineFourEl.elem.style.animation = timelineTwoEl.animation
      timeline.elem.style.animation = timeline.animation_1
      descriptionTwo.elem.style.animation = descriptionTwo.animation
      descriptionThree.elem.style.animation = descriptionTwo.animation
      descriptionFour.elem.style.animation = descriptionTwo.animation
      descriptionTwo.elem_path.style.animation = descriptionTwo.path_animation
      descriptionThree.elem_path.style.animation = descriptionTwo.path_animation
      descriptionFour.elem_path.style.animation = descriptionTwo.path_animation

      setTimeout(() => {
        timelineThreeEl.hasBeenTriggered = true
        timelineThreeEl.elem.style.animation = timelineThreeEl.animation
        timelineFourEl.elem.style.animation = timelineThreeEl.animation
        timeline.elem.style.animation = timeline.animation_2
        descriptionThree.elem.style.animation = descriptionThree.animation
        descriptionFour.elem.style.animation = descriptionThree.animation
        descriptionThree.elem_path.style.animation = descriptionThree.path_animation
        descriptionFour.elem_path.style.animation = descriptionThree.path_animation
      }, 600)
      setTimeout(() => {
        timelineFourEl.hasBeenTriggered = true
        timelineFourEl.elem.style.animation = timelineFourEl.animation
        timeline.elem.style.animation = timeline.animation_3
        descriptionFour.elem.style.animation = descriptionFour.animation
        descriptionFour.elem_path.style.animation = descriptionFour.path_animation
      }, 1200)
      return true
    }
    return false
  }

  function setVars() {
    const timeline = {
      elem: document.getElementById('timeline-id'),
      animClass: 'anim-class-t',
      hasBeenTriggered: false,
      animation_1: 'timeline-s-1 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      animation_2: 'timeline-s-2 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      animation_3: 'timeline-s-3 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const timelineTwoEl = {
      elem: document.getElementById('timeline-2'),
      animClass: 'anim-class-t-2',
      hasBeenTriggered: false,
      animation: 'timeline-2-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const timelineThreeEl = {
      elem: document.getElementById('timeline-3'),
      animClass: 'anim-class-t-3',
      hasBeenTriggered: false,
      animation: 'timeline-3-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const timelineFourEl = {
      elem: document.getElementById('timeline-4'),
      animClass: 'anim-class-t-4',
      hasBeenTriggered: false,
      animation: 'timeline-4-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const descriptionOne = {
      elem: document.getElementById('timeline-description-1'),
      elem_path: document.getElementById('timeline-description-1-b'),
      hasBeenTriggered: false,
      animation:
        'timeline-1-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation:
        'timeline-1-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const descriptionTwo = {
      elem: document.getElementById('timeline-description-2'),
      elem_path: document.getElementById('timeline-description-2-b'),
      hasBeenTriggered: false,
      animation:
        'timeline-2-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation:
        'timeline-2-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const descriptionThree = {
      elem: document.getElementById('timeline-description-3'),
      elem_path: document.getElementById('timeline-description-3-b'),
      hasBeenTriggered: false,
      animation:
        'timeline-3-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation:
        'timeline-3-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    const descriptionFour = {
      elem: document.getElementById('timeline-description-4'),
      elem_path: document.getElementById('timeline-description-4-b'),
      hasBeenTriggered: false,
      animation:
        'timeline-4-d-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
      path_animation:
        'timeline-4-d-p-anim 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.0s 1 normal forwards',
    }
    return {
      timelineTwoEl,
      timelineThreeEl,
      timelineFourEl,
      timeline,
      descriptionOne,
      descriptionTwo,
      descriptionThree,
      descriptionFour,
    }
  }
  return true
}

function scrollTimeline() {
  let timeline
  try {
    const err = {
      message: 'an error occured',
      time: new Date().toString(),
    }
    if (window.timelineManager.getID() === (null || undefined)) throw err
    timeline = document.getElementById(window.timelineManager.getID())
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Warning: Window.timelineManager is not yet defined')
    return false
  }
  if (window.TimelineHasBeenScrolled === false) {
    srollAnimationHandler(timeline)
    return true
  }
  return false
}

window.addEventListener('scroll', () => {
  scrollTimeline()
})
window.addEventListener('load', setBCFerriesVars)

// eslint-disable-next-line no-unused-vars
function scrollToEl(e, cb) {
  const el = document.getElementById(e)
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  // eslint-disable-next-line no-undef
  if (isFunction(cb)) {
    return cb()
  }
  return null
}
