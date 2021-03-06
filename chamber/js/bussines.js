const requestUrl = "https://marcosamos.github.io/wdd230/chamber/data/data.json"
const cards = document.querySelector(".directory");
// index page show gold and silver members

// directory page


fetch(requestUrl)
    .then(function (response) {
        return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    business.forEach(displayBusiness);
  });

  function displayBusiness(business){
    let card = document.createElement("section");
    let companyName = document.createElement("h2");
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo of  ${business.name}`);
    logo.setAttribute('loading', 'lazy');

    companyName.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;


    
    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buttonList").onclick = () => {
    cards.classList.add("listView");
    cards.classList.remove("cardView");
  };
  document.getElementById("buttonGrid").onclick = () => {
     cards.classList.add("cardView");
     cards.classList.remove("listView");
   };
});