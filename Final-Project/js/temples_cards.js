const requestURL = "https://marcosamos.github.io/wdd230/Final-Project/data/temples.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    //const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temples){
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('h1');
    let templeImage = document.createElement("img");
    let templePhone = document.createElement("p");
    let templeEmail = document.createElement("p");
    let ulS = document.createElement("ul");
    let services = document.createElement("li");
    let ulH = document.createElement("ul");
    let history = document.createElement("li");
    let ulT = document.createElement("ul");
    let templeClosureSchedule = document.createElement("li");

    // Change the textContent property of the ELEMETS element to contain the CORRECT VALUES full name
    templeName.textContent = `${temples.name}`;
    templeImage.setAttribute("src", temples.imageurl);
    templeImage.setAttribute('alt', `Portait of ${temples.name} - ${temples.order}`);
    templePhone.textContent = temples.phone;
    templeEmail.textContent = temples.email;
    ulS.textContent = `Services`;
    services.textContent = temples.services;
    ulH.textContent = `History`;
    history.textContent = temples.history;
    ulT.textContent = `Temple Clousure Schedule`;
    templeClosureSchedule.textContent = temples.templeClosureSchedule;
    // Add/append the section(card) with the h2 element
    card.appendChild(templeName);
    card.appendChild(templeImage);
    card.appendChild(templePhone);
    card.appendChild(templeEmail);
    card.appendChild(ulS);
    card.appendChild(services);
    card.appendChild(ulH);
    card.appendChild(history);
    card.appendChild(ulT);
    card.appendChild(templeClosureSchedule);
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}