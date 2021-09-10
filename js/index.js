function displayShareOptions(){
    var shareOptions = document.getElementById("share_options");
    if(shareOptions.style.display == "none"){
        shareOptions.style.display = "flex";
        shareOptions.style.transitionDuration = "1s";
    }
    else{
        shareOptions.style.transitionDuration = "1s";
        shareOptions.style.display = "none";
    }
}
