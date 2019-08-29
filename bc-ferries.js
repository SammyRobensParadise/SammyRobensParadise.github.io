
//***************************//
//Functions written by:      //
//Samuel Robens-Paradise     //
//srobensp@edu.uwaterloo.ca  //


window.addEventListener("load", setBCFerriesVars);

function setBCFerriesVars(){
    timelineManager  = new bcFerriesAnimationHandler('timeline-outer','timeline','timeline',{
        animClass1 = "timeline-anim",
        animClass2 = "timeline-elems-anim"
    })
}
class bcFerriesAnimationHandler{
    constructor(el,target_el,destination_el,class_data){
        this.elem = document.getElementById(el);
        this.target_elem  = document.getElementById(target_el);
        this.destination_elem = document.getElementById(destination_el);
        this.class_obj = class_data;
    }

}