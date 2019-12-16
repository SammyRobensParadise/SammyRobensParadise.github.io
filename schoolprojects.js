/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function addMobileClasses() {
  const screamingSafeNode = document.getElementById('screaming-safe-text')
  const galleryDevNode = document.getElementById('safe-photo-gallery')
  if (window.innerWidth < 768) {
    screamingSafeNode.classList.add('order-first')
    galleryDevNode.classList.add('order-first')
  }
}
function setSchoolProjectVars() {
  addMobileClasses()
}
window.addEventListener('load', setSchoolProjectVars)

// eslint-disable-next-line consistent-return
function scrollToEl(e, cb) {
  const el = document.getElementById(e)
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  if (isFunction(cb)) {
    return cb()
  }
}
