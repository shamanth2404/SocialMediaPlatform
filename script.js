

function pass_validate(){
    var password = document.getElementById("userPassword").value;
    var username = document.getElementById("username").value;

    var wrongpassword = document.querySelector(".wrongpassword");
    var wrongusername = document.querySelector(".wrongusername");

    wrongpassword.innerHTML="";
    wrongusername.innerHTML="";

    if(username=="shamanthkmurthy"){
        if(password=="bmsce26")
            return true;
        else{
            wrongpassword.innerHTML = "*Password id incorrect";
            return false;
        }
    }
    else{
        wrongusername.innerHTML = "*Username is incorrect";
        return false;
    }
}

function like(){
    var likeIcon = document.querySelector(".post-options .fa-heart");
    var list = likeIcon.classList;
    if(list.contains("fa-regular")){
        likeIcon.classList.remove("fa-regular");
        likeIcon.classList.add("fa-solid");
        likeIcon.style.color = "#ff3040";
    }
    else{
        likeIcon.classList.remove("fa-solid");
        likeIcon.classList.add("fa-regular");
        likeIcon.style.color = "#f5f5f5";
    }
    
}

function save(){
    var saveIcon = document.querySelector(".post-options .fa-bookmark");
    var list = saveIcon.classList;
    if(list.contains("fa-regular")){
        saveIcon.classList.remove("fa-regular");
        saveIcon.classList.add("fa-solid");        
    }
    else{
        saveIcon.classList.remove("fa-solid");
        saveIcon.classList.add("fa-regular");        
    }
    
}