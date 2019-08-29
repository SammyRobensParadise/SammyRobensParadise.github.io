
//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


window.addEventListener("load", setBCFerriesVars);

function setBCFerriesVars(){
    timelineManager  = new ViewHandler('timeline-outer','timeline','timeline',)
    window.data_handler = new WebHandler(true, "github");
    window.data_handler._getDataFromGithub("github");
}
