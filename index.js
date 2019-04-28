//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //
//Latest Update: 2018-06-29  //
//version 0.1.0              //
//***************************//
//beginning of index.js file//
/*
$(function () {

    //Enable ToolTip feature
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    //open and scroll to resume section
    $('#resume').click(function () {
        $.fn.closeResume();
        toggleResumeText(this);
        scrollTo('#div_resume');
    });
    //close the resume section
    $('#close_resume').click(function () {
        $.fn.closeResume();
        toggleResumeText('#resume');
    });
    //open go exploring options and toggle 'go exploring button' text
    $('#goExploring').click(function () {
        $('#div_goExploring').slideToggle(1000);
        if ($('.about').css('visibility') == 'visible') {
            $.fn.closeText();
        }
        toggleExploreText(this);
    });
    //checks to see if about section is visible and if it is, closes it when
    //'go exploring button' is clicked
    $('#goExploring').click(function () {
        scrollToExploring('#div_goExploring');
        if ($('.about').css('visibility') == 'visible') {
            hideClose();
            hideCloseBottom();
        }
    });
    //opens projects section when 'learn more about pynn' is clicked
    $('#moreAboutPynn').click(function () {
        $('#navbar_projects').click();
    });
    //opens projects section when 'learn more about gangl' is clicked
    $('#moreAboutGangl').click(function () {
        $('#navbar_projects').click();
    });
    //when navbar projects is clicked opens projects section
    $('#navbar_projects').click(function () {
        closeNavbar(function () {
            //check to see if projects is not already visible
            if (!(isVisible('.about'))) {
                $('#div_goExploring').slideToggle(1000);
                toggleExploreText('#goExploring');
                $('#projects_btn').click();
            } else {
                $('#projects_btn').click();
            }
        });
    });
    //when navbar education is clicked opens education section
    $('#navbar_education').click(function () {
        closeNavbar(function () {
            //check to see if education is not already visible
            if (!(isVisible('.about'))) {
                $('#div_goExploring').slideToggle(1000);
                toggleExploreText('#goExploring');
                $('#education_btn').click();
            } else {
                $('#education_btn').click();
            }
        });
    });
    //when navbar experience is clicked opens experience section
    $('#navbar_experience').click(function () {
        closeNavbar(function () {
            //check to see if experience is not already visible
            if (!(isVisible('.about'))) {
                $('#div_goExploring').slideToggle(1000);
                toggleExploreText('#goExploring');
                $('#experience_btn').click();
            } else {
                $('#experience_btn').click();
            }
        });
    });
    //when navbar whos sammy is clicked opens the experience section
    $('#navbar_whos_sammy').click(function () {
        closeNavbar(function () {
            //check to see if whos sammy is not already visible
            if (!(isVisible('.about'))) {
                $('#div_goExploring').slideToggle(1000);
                toggleExploreText('#goExploring');
                $('#whos_sammy_btn').click();
            } else {
                $('#whos_sammy_btn').click();
            }
        });
    });
    //when navbar resume is clicked, opens navbar section and toggles resume button text
    $('#navbar_resume').click(function () {
        $.fn.closeResume();
        toggleResumeText('#resume');
        scrollTo('#div_resume');
        closeNavbar();
    });
    //closes navbar when github link is clicked
    $('#navbar_github_link').click(function () {
        closeNavbar();
    });
    //these buttons are what is clicked at the bottom of the resume div
    $('#moreAboutSammy').click(function () {
        $('#navbar_whos_sammy').click();
    });
    $('#aboutProjects').click(function () {
        $('#navbar_projects').click();
    });
    $('#resumeGoExploring').click(function () {
        $('#goExploring').click();
    })
    //****BUTTONS FOR SELECTIVE DIVS************
    //  projects button
    //order: projects, experience, education, whos sammy
    $('#projects_btn').click(function () {
        showClose();
        $.fn.arrangeProjects(function () {
            $.fn.toggleText(function () {
                scrollTo('#scrollToElement');
            });
        });
    });
    //  experience button   
    //order: experience, projects, education, whos sammmy 
    $('#experience_btn').click(function () {
        showClose();
        $.fn.arrangeExperience(function () {
            $.fn.toggleText(function () {
                scrollTo('#scrollToElement');
            });
        });
    });
    //  education button
    //order: education, projects, experience, whos sammy
    $('#education_btn').click(function () {
        showClose();
        $.fn.arrangeEducation(function () {
            $.fn.toggleText(function () {
                scrollTo('#scrollToElement');
            });
        });
    });
    //  whos sammy button
    //order: whos sammy, projects, experience, education
    $('#whos_sammy_btn').click(function () {
        showClose();
        $.fn.arrangeWhosSammy(function () {
            $.fn.toggleText(function () {
                scrollTo('#scrollToElement');
            });
        });
    });
    $('#close_about_btn').click(function () {
        hideClose();
        hideCloseBottom();
    });
    $('#close_about_btn_bottom').click(function () {
        hideClose();
        hideCloseBottom();
    });
    //end of main    
});
//
//_____________________________________________________________________________
//
//FUNCTION DEFINITIONS
//_____________________________________________________________________________
//
//toggle text function for div's listed
$.fn.toggleText = function (callbackScroll) {
    $('#div_projects').fadeIn(1000);
    $('#div_experience').fadeIn(1000);
    $('#div_education').fadeIn(1000);
    $('#div_whos_sammy').fadeIn(1000);
    callbackScroll();
}
//close text function for divs listed
$.fn.closeText = function () {
    $('#div_projects').hide(500);
    $('#div_experience').hide(500);
    $('#div_education').hide(500);
    $('#div_whos_sammy').hide(500);
}
//close resume div function definition
$.fn.closeResume = function () {
    $('#div_resume').slideToggle(1000);
}
//arrage divs for projects first function
$.fn.arrangeProjects = function (callback) {
    $('#div_experience').insertAfter('#div_projects');
    $('#div_education').insertAfter('#div_experience');
    $('#div_whos_sammy').insertAfter('#div_education');
    callback();
}
//arrange divs for experience first function
$.fn.arrangeExperience = function (callback) {
    $('#div_projects').insertAfter('#div_experience');
    $('#div_education').insertAfter('#div_experience');
    $('#div_whos_sammy').insertAfter('#div_experience');
    callback();
}
//arrange divs for education first function
$.fn.arrangeEducation = function (callback) {
    $('#div_projects').insertAfter('#div_education');
    $('#div_experience').insertAfter('#div_projects');
    $('#div_whos_sammy').insertAfter('#div_experience');
    callback();
}
//arrange divs for whos sammy first function
$.fn.arrangeWhosSammy = function (callback) {
    $('#div_projects').insertAfter('#div_whos_sammy');
    $('#div_experience').insertAfter('#div_projects');
    $('#div_education').insertAfter('#div_experience');
    callback();
}
//scroll to specific div function
function scrollTo(divId) {
    $('html,body').animate({
        scrollTop: $(divId).offset().top
    }, 1000)
}
//scroll to go exploring div
function scrollToExploring(divId) {
    $('html,body').animate({
        scrollTop: $(divId).offset().top
    }, 2000)
}
//show close button
function showClose() {
    $('#close_about').show(500);
    $('#close_about_bottom').show(500);
}
//hide close top button for about divs
function hideClose() {
    $.fn.closeText();
    $('#close_about').fadeOut(500);
    $('#close_about_bottom').fadeOut(500);

}
//hide close bottom button for divs
function hideCloseBottom() {
    $.fn.closeText();
    $('#close_about').fadeOut(500);
    $('#close_about_bottom').fadeOut(500);
}
//toggle function Explore button text
function toggleExploreText(divId) {
    $(divId).text(function (i, v) {
        return v === "You're Exploring . . ." ? 'Go Exploring . . .' : "You're Exploring . . ."
    })
}
//toggle function Resume button text
function toggleResumeText(divId) {
    $(divId).text(function (i, v) {
        return v === 'Close Résumé' ? 'Résumé . . .' : 'Close Résumé'
    })
}

function closeNavbar(callback) {
    $('#navbarToggler').click();
    callback();
}
// check if visible
function isVisible(element) {
    var element = $(element);
    return (element.css('display') !== 'none' && element.css('visibility') !== 'hidden' && element.css('opacity') !== 0);
}
//set Booleans
function splash(param) {
    var time = param;
    setTimeout(function () {
        $('#splashscreen').slideUp(1200);
    }, time);
}
//checks to see if divs with .about class are NOT VISIBLE

//INACTIVE FUNCTIONS------------------------------------------------------------
//
//-------------------------------------------------------------------------------
*/