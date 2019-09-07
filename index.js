//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


window.addEventListener("load", setGlobalVars);

function setGlobalVars() {
    mobileTextSwap();
    window.data_handler = new WebHandler(true, "github");
    window.bc_ferries_viewer = new ViewHandler("bc-ferries-anim-class", "bc-ferries-container", "bc-ferries-sec");
    window.portfolio_viewer = new ViewHandler("portfolio-anim-class", "portfolio-container", "portfolio-sec");
    window.eb_viewer = new ViewHandler("eb-web-anim-class", "eb-web-container", "eb-web-sec");
    window.school_viewer = new ViewHandler("school-anim-class", "school-container", "school-sec")
    window.hootsuite_viewer = new ViewHandler("hootsuite-anim-class", "hootsuite-container", "hootsuite-sec");
    window.ffsatg_viewer = new ViewHandler("ffsatg-anim-class", "ffsatg-container", "ffsatg-sec");
    window.eccc_viewer = new ViewHandler("eccc-anim-class", "eccc-container", "eccc-sec");
    window.data_handler._getDataFromGithub("github");
}
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
// check if variable is a function
function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

//webHandler Class
class WebHandler {
    constructor(loadStatus, api) {
        this.dataTime = new Date();
        this.isLoaded = loadStatus;
        this.activeAPI = api;

    }
    _getLoad() {
        return this.isLoaded;
    }
    _getDateRef() {
        return this.dataTime;
    }
    _getDataFromGithub(api) {
        if (api === this.activeAPI) {
            try {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var gitRef = JSON.parse(this.responseText);
                        var date = gitRef.commit.author.date;
                        date = date.substring(0, 10)
                        var a = document.getElementById("last-updated")
                        a.innerHTML = date;
                    } else {
                        let err = "403 Error: Unable to Reach Github's server"
                        var b = document.getElementById("last-updated")
                        b.innerHTML = err;
                    }

                };
                xmlhttp.open("GET", "https://api.github.com/repos/SammyRobensParadise/SammyRobensParadise.github.io/commits/master", true);
                xmlhttp.send();
            }
            catch (error) {
            }
        } else {

            let err = "403: API failed to connect to Github";
            return err;
        }
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
    _getID() {
        return this.el_id;
    }
    isElementInViewport(el) {
        // console.log("checking...");

        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        try {
            if (el.getBoundingClientRect() === null) throw err;
            var rect = el.getBoundingClientRect();
        }
        catch (err) {
            return false;
        }
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }
}
window.addEventListener('scroll', function () {
    scollInProj();
    scrollInWork();

})

function scollInProj() {

    var activeEl = window.bc_ferries_viewer;
    var secondEl = window.portfolio_viewer;
    var thirdEl = window.eb_viewer;
    var fourthEl = window.school_viewer;
    var slide_in_left = 'slide-in-left 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards';
    var slide_in_right = 'slide-in-right 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards';
    const widthBool = 570;
    try {
        console.log("in try");
        if ((activeEl || secondEl || thirdEl || fourthEl).isElementInViewport() === undefined) throw err;
    }
    catch (err) {
        return false;
    }
    if (window.innerWidth > widthBool) {
        if (activeEl.isElementInViewport(activeEl.elem)) {
            console.log("activeElin VP");
            // activeEl.target_elem.classList.add(activeEl.add_class);
            activeEl.target_elem.style.animation = slide_in_left;
        }
        if (secondEl.isElementInViewport(secondEl.elem)) {
            secondEl.target_elem.style.animation = slide_in_right;
        }
        if (thirdEl.isElementInViewport(thirdEl.elem)) {
            //exception for emily bandel section becuause it is using an opacity shift to 0.8 instead of 1.0 so the @keyframe is unique
            thirdEl.target_elem.style.animation = 'slide-in-left-eb 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards';
        }
        if (fourthEl.isElementInViewport(fourthEl.elem)) {
            fourthEl.target_elem.style.animation = slide_in_right;
        }
    } else if (window.innerWidth <= widthBool) {
        setVarsWithMobile();

    }

    function setVarsWithMobile() {
        activeEl.target_elem.style.animation = slide_in_left;
        secondEl.target_elem.style.animation = slide_in_right;
        thirdEl.target_elem.style.animation = 'slide-in-left-eb 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards';
        fourthEl.target_elem.style.animation = slide_in_right;
    }
}
const localwidthBool = 570;
function scrollInWork() {
    var fifthEl = window.hootsuite_viewer;
    var sixthEl = window.ffsatg_viewer;
    var seventhEl = window.eccc_viewer;
    var slide_in_left_2 = 'slide-in-left 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards';
    var slide_in_right_2 = 'slide-in-right 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.05s 1 normal forwards';
    const widthBool = localwidthBool;
    try {
        if ((fifthEl || sixthEl || seventhEl).isElementInViewport() === undefined) throw err;
    }
    catch (err) {
        return false;
    }
    if (window.innerWidth > widthBool) {
        if (fifthEl.isElementInViewport(fifthEl.elem)) {
            fifthEl.target_elem.style.animation = slide_in_left_2;
        }
        if (sixthEl.isElementInViewport(sixthEl.elem)) {
            sixthEl.target_elem.style.animation = slide_in_right_2;
        }
        if (seventhEl.isElementInViewport(seventhEl.elem)) {
            seventhEl.target_elem.style.animation = slide_in_left_2;
        }
    } else if (window.innerWidth <= widthBool) {
        setVarsWithMobileWork();
    }

    function setVarsWithMobileWork() {
        fifthEl.target_elem.style.animation = slide_in_left_2;
        sixthEl.target_elem.style.animation = slide_in_right_2;
        seventhEl.target_elem.style.animation = slide_in_left_2;
    }
}
function hideModal(e) {
    var warningEl = document.getElementById(e);
    warningEl.style.display = 'none';
}
function mobileTextSwap() {
    if (window.innerWidth <= localwidthBool) {
        const projectsTextMobile = {
            bcFerries: {
                title: "BC Ferries",
                subText: "A case study.",
                titleRef: document.getElementById('bc-ferries-title'),
                textRef: document.getElementById('bc-ferries-subtext')
            },
            portfolio: {
                title: "Portfolio",
                subText: "2019",
                titleRef: document.getElementById('portfolio-title'),
                textRef: document.getElementById('portfolio-text')
            },
            emilyBandel: {
                title: "Web Design",
                subText: "Filmography",
                titleRef: document.getElementById('eb-title'),
                textRef: document.getElementById('eb-subtext')
            },
            schoolProjects: {
                title: "Projects",
                subText: "School Year 1",
                titleRef: document.getElementById('school-title'),
                textRef: document.getElementById('school-subtext')
            }
        }
        const workTextMobile = {
            hootsuite: {
                title: "Hootsuite",
                subText: "Software Development",
                titleRef: document.getElementById('hootsuite-title'),
                textRef: document.getElementById('hootsuite-subtext')
            },
            fingerFood: {
                title: "Finger Food Studios",
                subText: "QA Lead",
                titleRef: document.getElementById('ffatg-title'),
                textRef: document.getElementById('ffatg-subtext')
            },
            ecccTD: {
                title: "ECCC",
                subText: "Software Engineer",
                titleRef: document.getElementById('eccc-title'),
                textRef: document.getElementById('eccc-subtext')
            }
        }
        changeCardText(projectsTextMobile, workTextMobile);
        return true;
    } else {
        return false;
    }
}
function changeCardText(p, w) {
    //projects (p)
    //bc ferries
    p.bcFerries.titleRef.innerHTML = p.bcFerries.title;
    p.bcFerries.textRef.innerHTML = p.bcFerries.subText;
    //portfolio
    p.portfolio.titleRef.innerHTML = p.portfolio.title;
    p.portfolio.textRef.innerHTML = p.portfolio.subText;
    //emily bandel
    p.emilyBandel.titleRef.innerHTML = p.emilyBandel.title;
    p.emilyBandel.textRef.innerHTML = p.emilyBandel.subText;
    //school projects
    p.schoolProjects.titleRef.innerHTML = p.schoolProjects.title;
    p.schoolProjects.textRef.innerHTML = p.schoolProjects.subText;
    //work (w)
    //hootsuite
    w.hootsuite.titleRef.innerHTML = w.hootsuite.title;
    w.hootsuite.textRef.innerHTML = w.hootsuite.subText;
    //finger foods
    w.fingerFood.titleRef.innerHTML = w.fingerFood.title;
    w.fingerFood.textRef.innerHTML = w.fingerFood.subText;
    //eccc
    w.ecccTD.titleRef.innerHTML = w.ecccTD.title;
    w.ecccTD.textRef.innerHTML = w.ecccTD.subText;

}