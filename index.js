let myInput = document.getElementById("myInput");
let myBtn = document.getElementById("myBtn")


function checkPassword(PassWord){
    var PassWord = document.getElementById("inputPassword").value;
    if(PassWord === "oluwakayode"){
        console.log("login approved")
    }
    else{
        console.log("try again")
    }
}
