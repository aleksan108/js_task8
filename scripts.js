function setVariables(){
    const selectID = document.getElementById('backID');
}

function changeBackground() {
    const mainID = document.getElementById('main');
    const optionIDs = document.getElementsByTagName('option');
    let selectedColor;
    let i=0;
    for (i=0;i < optionIDs.length; i++){
        if (optionIDs[i].selected){
            selectedColor = optionIDs[i].value;
            console.log(selectedColor);
        }
    }    
    switch (selectedColor){
        case "light": mainID.style.background = "wheat";
            break;
        case "dark": mainID.style.background = "black";
            break;
        case "happy": mainID.style.background = "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)";
            break;
        case "winter": mainID.style.background ="url(./assets/21-16.jpg)";
            break;
    }
}