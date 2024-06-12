function openSignUpPage(){
    window.location.href="signup.html";
}
function openLogInPage(){
    window.location.href="login.html";
}
function display(artist){
    
    let img=document.createElement("img")
    // img.style.height="50px";
    // img.style.width="50px";
    // img.style.borderRadius="50%";
    img.src="images/playbutton.png";
    img.classList.add("playButton");
    let div=artist.firstElementChild;
    div.appendChild(img);
    console.log(div.appendChild(img));
}
// .playButton{
//     height: 50px;
//     width: 50px;
//     top: 137px;
//     right: 30px;

//     position: absolute;

//     border: 1ps solid white ;
//     border-radius: 50%;
// }
function remove(artist){
    let ele=artist.firstElementChild;
     ele.innerHTML="";
}
function play(){
    let ele=document.getElementById("player");
    ele.play();
}