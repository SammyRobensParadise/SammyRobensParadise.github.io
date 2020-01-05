/* eslint-disable max-classes-per-file */
/* eslint-disable no-param-reassign */
/**
 *
 * @param {node} p
 * @param {node} w
 */
const changeCardText = (p, w) => {
  // projects (p)
  // bc ferries
  p.bcFerries.titleRef.innerHTML = p.bcFerries.title
  p.bcFerries.textRef.innerHTML = p.bcFerries.subText
  // portfolio
  p.portfolio.titleRef.innerHTML = p.portfolio.title
  p.portfolio.textRef.innerHTML = p.portfolio.subText
  // emily bandel
  p.emilyBandel.titleRef.innerHTML = p.emilyBandel.title
  p.emilyBandel.textRef.innerHTML = p.emilyBandel.subText
  // school projects
  p.schoolProjects.titleRef.innerHTML = p.schoolProjects.title
  p.schoolProjects.textRef.innerHTML = p.schoolProjects.subText
  // work (w)
  // hootsuite
  w.hootsuite.titleRef.innerHTML = w.hootsuite.title
  w.hootsuite.textRef.innerHTML = w.hootsuite.subText
  // finger foods
  w.fingerFood.titleRef.innerHTML = w.fingerFood.title
  w.fingerFood.textRef.innerHTML = w.fingerFood.subText
  // eccc
  w.ecccTD.titleRef.innerHTML = w.ecccTD.title
  w.ecccTD.textRef.innerHTML = w.ecccTD.subText
}

// default width bool
const localwidthBool = 570

function mobileTextSwap() {
  if (window.innerWidth <= localwidthBool) {
    const projectsTextMobile = {
      bcFerries: {
        title: 'BC Ferries',
        subText: 'A case study.',
        titleRef: document.getElementById('bc-ferries-title'),
        textRef: document.getElementById('bc-ferries-subtext'),
      },
      portfolio: {
        title: 'Portfolio',
        subText: '2019',
        titleRef: document.getElementById('portfolio-title'),
        textRef: document.getElementById('portfolio-text'),
      },
      emilyBandel: {
        title: 'Web Design',
        subText: 'Filmography',
        titleRef: document.getElementById('eb-title'),
        textRef: document.getElementById('eb-subtext'),
      },
      schoolProjects: {
        title: 'Projects',
        subText: 'School Year 1',
        titleRef: document.getElementById('school-title'),
        textRef: document.getElementById('school-subtext'),
      },
    }
    const workTextMobile = {
      hootsuite: {
        title: 'Hootsuite',
        subText: 'Software Development',
        titleRef: document.getElementById('hootsuite-title'),
        textRef: document.getElementById('hootsuite-subtext'),
      },
      fingerFood: {
        title: 'Finger Food Studios',
        subText: 'QA Lead',
        titleRef: document.getElementById('ffatg-title'),
        textRef: document.getElementById('ffatg-subtext'),
      },
      ecccTD: {
        title: 'ECCC',
        subText: 'Software Engineer',
        titleRef: document.getElementById('eccc-title'),
        textRef: document.getElementById('eccc-subtext'),
      },
    }
    changeCardText(projectsTextMobile, workTextMobile)
    return true
  }
  return false
}
// webHandler Class
class WebHandler {
  constructor(loadStatus, api) {
    this.dataTime = new Date()
    this.isLoaded = loadStatus
    this.activeAPI = api
  }

  getDataFromGithub(api) {
    if (api === this.activeAPI) {
      try {
        const xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = () => {
          if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            const gitRef = JSON.parse(xmlhttp.responseText)
            let { date } = gitRef.commit.author
            date = date.substring(0, 10)
            const a = document.getElementById('last-updated')
            a.innerHTML = date
          } else {
            const err = "403 Error: Unable to Reach Github's server"
            const b = document.getElementById('last-updated')
            b.innerHTML = err
          }
        }
        xmlhttp.open(
          'GET',
          'https://api.github.com/repos/SammyRobensParadise/SammyRobensParadise.github.io/commits/master',
          true,
        )
        xmlhttp.send()
      } catch (error) {
        return error
      }
    } else {
      const err = '403: API failed to connect to Github'
      return err
    }
    return true
  }
}
class ViewHandler {
  constructor(addClassParam, idParam, idTarget) {
    this.add_class = addClassParam
    this.el_id = idParam
    this.elem = document.getElementById(idParam)
    this.target = idTarget
    this.target_elem = document.getElementById(idTarget)
  }

  getID() {
    return this.el_id
  }

  isElementInViewport(el) {
    // if jQuery
    let rect = null
    if (typeof this.jQuery === 'function' && el instanceof this.jQuery) {
      // eslint-disable-next-line prefer-destructuring
      el = el[0]
    }
    try {
      const error = {
        err: 'an error occured',
        time: new Date().toString(),
      }
      if (el.getBoundingClientRect() === null) throw error
      rect = el.getBoundingClientRect()
    } catch (err) {
      return false
    }
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      /* or $(window).height() */ && rect.right
        <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    )
  }
}
function setGlobalVars() {
  mobileTextSwap()
  window.data_handler = new WebHandler(true, 'github')
  window.portfolio_winter_2020_viewer = new ViewHandler(
    'portfolio-winter-2020-anim-class',
    'portfolio-winter-2020-container',
    'portfolio-winter-2020-sec',
  )
  window.grape_viewer = new ViewHandler('grape-anim-class', 'grape-container', 'grape-sec')
  window.bc_ferries_viewer = new ViewHandler(
    'bc-ferries-anim-class',
    'bc-ferries-container',
    'bc-ferries-sec',
  )
  window.portfolio_viewer = new ViewHandler(
    'portfolio-anim-class',
    'portfolio-container',
    'portfolio-sec',
  )
  window.eb_viewer = new ViewHandler('eb-web-anim-class', 'eb-web-container', 'eb-web-sec')
  window.school_viewer = new ViewHandler('school-anim-class', 'school-container', 'school-sec')
  window.hootsuite_viewer = new ViewHandler(
    'hootsuite-anim-class',
    'hootsuite-container',
    'hootsuite-sec',
  )
  window.ffsatg_viewer = new ViewHandler('ffsatg-anim-class', 'ffsatg-container', 'ffsatg-sec')
  window.eccc_viewer = new ViewHandler('eccc-anim-class', 'eccc-container', 'eccc-sec')
  window.data_handler.getDataFromGithub('github')
}

window.addEventListener('load', setGlobalVars)

// check if variable is a function
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}
// scroll to elemt-smooth
// the function takes an optional param called cb
// if cb is a callback function then it is returned by the function in calling
// if using without a callback, then pass null to be safe
// eslint-disable-next-line no-unused-vars
function scrollToEl(e, cb) {
  const el = document.getElementById(e)
  el.scrollIntoView({ behavior: 'smooth' })
  if (isFunction(cb)) {
    return cb()
  }
  return null
}

function scollInProj() {
  const portfolioWinter2020El = window.portfolio_winter_2020_viewer
  const initEl = window.grape_viewer
  const activeEl = window.bc_ferries_viewer
  const secondEl = window.portfolio_viewer
  const thirdEl = window.eb_viewer
  const fourthEl = window.school_viewer
  const slideInLeft = 'slide-in-left 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards'
  const slideInRight = 'slide-in-right 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards'
  const widthBool = 570
  const err = {
    message: 'an error occured',
    time: new Date().toString(),
  }
  try {
    if (
      (
        portfolioWinter2020El
        || initEl
        || activeEl
        || secondEl
        || thirdEl
        || fourthEl
      ).isElementInViewport() === undefined
    ) {
      throw err
    }
  } catch (e) {
    return false
  }
  if (window.innerWidth > widthBool) {
    if (portfolioWinter2020El.isElementInViewport(portfolioWinter2020El.elem)) {
      portfolioWinter2020El.target_elem.style.animation = slideInLeft
    }
    if (initEl.isElementInViewport(initEl.elem)) {
      initEl.target_elem.style.animation = slideInRight
    }
    if (activeEl.isElementInViewport(activeEl.elem)) {
      activeEl.target_elem.style.animation = slideInLeft
    }
    if (secondEl.isElementInViewport(secondEl.elem)) {
      secondEl.target_elem.style.animation = slideInRight
    }
    if (thirdEl.isElementInViewport(thirdEl.elem)) {
      // exception for emily bandel section becuause
      // it is using an opacity shift to 0.8 instead of 1.0 so the @keyframe is unique
      thirdEl.target_elem.style.animation = 'slide-in-left-eb 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards'
    }
    if (fourthEl.isElementInViewport(fourthEl.elem)) {
      fourthEl.target_elem.style.animation = slideInRight
    }
  } else if (window.innerWidth <= widthBool) {
    // eslint-disable-next-line no-use-before-define
    setVarsWithMobile()
  }

  function setVarsWithMobile() {
    portfolioWinter2020El.target_elem.style.animation = slideInLeft
    initEl.target_elem.style.animation = slideInRight
    activeEl.target_elem.style.animation = slideInLeft
    secondEl.target_elem.style.animation = slideInRight
    thirdEl.target_elem.style.animation = 'slide-in-left-eb 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards'
    fourthEl.target_elem.style.animation = slideInRight
  }
  return true
}

function scrollInWork() {
  const fifthEl = window.hootsuite_viewer
  const sixthEl = window.ffsatg_viewer
  const seventhEl = window.eccc_viewer
  const slideInLeft2 = 'slide-in-left 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards'
  const slideInRight2 = 'slide-in-right 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards'
  const widthBool = localwidthBool
  const err = {
    message: 'an error occured',
    time: new Date().toString(),
  }
  try {
    if ((fifthEl || sixthEl || seventhEl).isElementInViewport() === undefined) {
      throw err
    }
  } catch (e) {
    return false
  }
  if (window.innerWidth > widthBool) {
    if (fifthEl.isElementInViewport(fifthEl.elem)) {
      fifthEl.target_elem.style.animation = slideInLeft2
    }
    if (sixthEl.isElementInViewport(sixthEl.elem)) {
      sixthEl.target_elem.style.animation = slideInRight2
    }
    if (seventhEl.isElementInViewport(seventhEl.elem)) {
      seventhEl.target_elem.style.animation = slideInLeft2
    }
  } else if (window.innerWidth <= widthBool) {
    // eslint-disable-next-line no-use-before-define
    setVarsWithMobileWork()
  }

  function setVarsWithMobileWork() {
    fifthEl.target_elem.style.animation = slideInLeft2
    sixthEl.target_elem.style.animation = slideInRight2
    seventhEl.target_elem.style.animation = slideInLeft2
  }
  return true
}
// eslint-disable-next-line no-unused-vars
function hideModal(e) {
  const warningEl = document.getElementById(e)
  warningEl.style.display = 'none'
}
window.addEventListener('scroll', () => {
  scollInProj()
  scrollInWork()
})
