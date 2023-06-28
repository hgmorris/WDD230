
// Toggle active/not active buttons

let gridSelector = document.querySelector('#directory-grid');
let listSelector = document.querySelector('#directory-list');
let directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', () => {
  if (!gridSelector.classList.contains('active')) {
    gridSelector.classList.add('active');
    listSelector.classList.remove('active');
    directoryData.classList.add('directory-cards');
    directoryData.classList.remove('directory-list');
  }
});

listSelector.addEventListener('click', () => {
  if (!listSelector.classList.contains('active')) {
    listSelector.classList.add('active');
    gridSelector.classList.remove('active');
    directoryData.classList.add('directory-list');
    directoryData.classList.remove('directory-cards');
  }
});

// Directory Data

const url = "../data/directory.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayCompanies = (companies) => {
  const cards = document.querySelector("#directory-data"); // select the output container element

  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.classList.add("directory-card");
    if (company.membershipLevel === 'gold') {
      card.classList.add("gold-member");
    }
    card.innerHTML = `
      <h3>${company.name}</h3>
      <img src="../${company.image}" alt="${company.name}"/>
      <p>${company.address}</p>
      <p><a href='tel:${company.phone}'>${company.phone}</a></p>
      <p><a href='${company.website}'>${company.website}</a></p>
    `;
    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

async function getCompaniesData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCompanies(data.companies);
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("#directory-data");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  } catch (error) {
    console.error("There was an error fetching the data.", error);
    const cards = document.querySelector("#directory-data");
    cards.innerHTML = "<section><h1>There was an error fetching the data</h1></section>";
  }
}

getCompaniesData();
