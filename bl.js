let validateContactForm=()=>{
    let isValidateForm=validateEmail(document.querySelector("#contactEmail"))
    && validateContactMessge();
    if(isValidateForm){
        swal({
            title:"Thank you "+document.querySelector("#fullName").value,
            text:"We will get in touch as soon as possible!",
            icon:"successful",
            button:"Ok",
        });
        Reset(document.querySelector("#fullName"));
        Reset(document.querySelector("#contactEmail"));
        Reset(document.querySelector("#subject"))
        Reset(contactMessage);
        return false;
    }
    else {
        return false;
    }
};

let validateContactMessge=()=>{
    if(contactMessage.value ===''){
        applyColor(contactMessage,'red');
        return  false;
    }
    else {
        applyColor(contactMessage,'limegreen');
        return true;
    }

// validate Contact Form
let validateContactForm=()=>{
    let isValidateForm=validateEmail(document.querySelector("#contactEmail"))
    && validateContactMessge();
    if(isValidateForm){
        swal({
            title:"Thanks "+document.querySelector("#fullName").value,
            text:"We will get in touch as soon as possible!",
            icon:"success",
            button:"Ok",
        });
        Reset(document.querySelector("#fullName"));
        Reset(document.querySelector("#contactEmail"));
        Reset(document.querySelector("#subject"))
        Reset(contactMessage);
        return false;
    }
    else {
        return false;
    }
};

let validateContactMessge=()=>{
    if(contactMessage.value ===''){
        applyColor(contactMessage,'red');
        return  false;
    }
    else {
        applyColor(contactMessage,'limegreen');
        return true;
    }
}


