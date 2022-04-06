const requestURL = "https://marcosamos.github.io/wdd230/Final-Project/data/temples.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temples){
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('h2');
    let templeImage = document.createElement("img");
    let templePhone = document.createElement("p");
    let templeEmail = document.createElement("p");
    let services = document.createElement("li");
    let history = document.createElement("li");
    let templeClosureSchedule = document.createElement("li");

    // Change the textContent property of the ELEMETS element to contain the CORRECT VALUES full name
    templeName.textContent = `${temples.name}`;
    templeImage.setAttribute("src", temples.imageurl);
    templeImage.setAttribute('alt', `Portait of ${temples.name} - ${temples.order}`);
    templePhone.textContent = temples.phone;
    templeEmail.textContent = temples.email;
    services.textContent = temples.services;
    history.textContent = temples.history;
    templeClosureSchedule.textContent = temples.temple-closure-schedule;
    // Add/append the section(card) with the h2 element
    card.appendChild(templeName);
    card.appendChild(templeImage);
    card.appendChild(templePhone);
    card.appendChild(templeEmail);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(templeClosureSchedule);
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}