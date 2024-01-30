let toggled = false;

let body = document.getElementsByTagName("body")[0];
let circle = document.getElementById("toggle");
let h1 = document.getElementsByTagName("h1")[0];
let container = document.getElementById("container");
let infoCard = document.getElementById("info");
let infoField = document.getElementById("info-field");

container.onclick = function(){
    
    if(!toggled){

        // h1.classList.add("white");
        body.classList.add("black-bg");
        circle.classList.add("darkMode");
        infoCard.style.backgroundColor = "rgb(43, 43, 43)";
        infoCard.style.color = "white";
        infoField.style.color = "rgb(247, 247, 247)";
        container.style.backgroundColor = "rgb(70, 70, 70)";
        toggled = true;

    }else {
        // h1.classList.remove("white");
        body.classList.remove("black-bg");
        circle.classList.remove("darkMode");
        infoCard.style.backgroundColor = "white";
        infoCard.style.color = "black";
        infoField.style.color = "rgb(43, 43, 43)";
        container.style.backgroundColor = "rgb(51, 51, 51)";
        toggled = false;
    }

}



const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);


    document.getElementById("firstName").textContent = userInfo.firstName;
    document.getElementById("lastName").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phoneNumber").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}else{
    storeUserInfo();
}

function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };


    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    document.getElementById("firstName").textContent = userInfo.firstName;
    document.getElementById("lastName").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phoneNumber").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}
