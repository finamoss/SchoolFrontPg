
//Random Pet Name Generator
let names = ['Scotty', 'Butch', 'Rover', 'Julio', 'Jenna', 'Sparkle', 'Annie', 'Cherry', 'Sky', 'Carl', 'Princess', 'Dodger',
'Fluffy', 'Sunshine', 'Luna', 'Chester', 'Violet', 'August', 'Axel', 'Spike', 
'Rosie', 'Bee', 'Turnip', 'Sherbert', 'Penny'];
let randomPetName = document.getElementById("display-name");
let petNameBtn = document.querySelector(".pet-name-btn");
petNameBtn.addEventListener('click', ()=>{
    let index = Math.floor(Math.random()* names.length);
    randomPetName.innerHTML = `${names[index]}`;
});
