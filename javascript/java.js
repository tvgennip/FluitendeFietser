let slideIndex = 1;
let slideTimer; // Variabele om de setTimeout op te slaan
let n = 1;

// Start de slideshow
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer();
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  // Zorg ervoor dat de slideIndex binnen de grenzen blijft
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

 
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
}

function startTimer() {
  slideTimer = setTimeout(function() {
    plusSlides(n);
  }, 5000);
}


function resetTimer() {
  clearTimeout(slideTimer);
  startTimer();
}

function slideshow() {
  startTimer();
};

function showPopup(title, image, driveType, businessType, gender, brand, condition, color, price, remarks) {
  // Vul de popup met de gegevens
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => card.classList.add('hidden'));

  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-image').src = image;
  document.getElementById('popup-drive-type').textContent = "Aandrijvings type: " + driveType;
  document.getElementById('popup-business-type').textContent = "Aanbod: " + businessType;
  document.getElementById('popup-gender').textContent = "Geslacht: " + gender;
  document.getElementById('popup-brand').textContent = "Merk: " + brand;
  document.getElementById('popup-condition').textContent = "Nieuw/tweede hands: " + condition;
  document.getElementById('popup-color').textContent = "Kleur: " + color;
  document.getElementById('popup-price').textContent = "Prijs: " + price;
  document.getElementById('popup-remarks').textContent = "Opmerking: " + remarks;

  // Toon de popup
  document.getElementById('popup').style.display = 'block';
  popup.style.display = 'flex';
}

function closePopup(event) {
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => card.classList.remove('hidden'));

  const popup = document.getElementById('popup');
  document.getElementById('popup').style.display = 'none';
}

function updateImage() {
  var checkboxes = document.querySelectorAll('input[name="select"]');
  var display1 = document.getElementById('display1');
  var display2 = document.getElementById('display2');

  // Controleer of een van de fietsen geselecteerd is en update de afbeelding
  if (checkboxes[18].checked || checkboxes[19].checked || checkboxes[20].checked || checkboxes[21].checked || checkboxes[22].checked || checkboxes[23].checked) {
    sessionStorage.setItem('fietsNaam4', 'Stella Allegra');
    sessionStorage.getItem('fietsNaam4');
    if (checkboxes[18].checked){
      sessionStorage.setItem('huurtijd4', '1 uur')
      sessionStorage.getItem('huurtijd4')
    }
    if (checkboxes[19].checked){
      sessionStorage.setItem('huurtijd4', '2 uur')
      sessionStorage.getItem('huurtijd4')
    }
    if (checkboxes[20].checked){
      sessionStorage.setItem('huurtijd4', '4 uur')
      sessionStorage.getItem('huurtijd4')
    }
    if (checkboxes[21].checked){
      sessionStorage.setItem('huurtijd4', '6 uur')
      sessionStorage.getItem('huurtijd4')
    }
    if (checkboxes[22].checked){
      sessionStorage.setItem('huurtijd4', '8 uur')
      sessionStorage.getItem('huurtijd4')
    }
    if (checkboxes[23].checked){
      sessionStorage.setItem('huurtijd4', '1 dag')
      sessionStorage.getItem('huurtijd4')
    }
    display1.src = 'images/Stella_Allegra_voorwielmotor.jpg';
    display2.src = 'images/Stella_Allegra_voorwielmotor.jpg';
} 
else {
    sessionStorage.clear();
    display1.src = 'images/logo.png';
    display2.src = 'images/logo.png';
}

if (checkboxes[12].checked || checkboxes[13].checked || checkboxes[14].checked || checkboxes[15].checked || checkboxes[16].checked || checkboxes[17].checked) {
  sessionStorage.setItem('fietsNaam3', 'Gazelle Orange');
  sessionStorage.getItem('fietsNaam3');
  if (checkboxes[12].checked){
    sessionStorage.setItem('huurtijd3', '1 uur')
    sessionStorage.getItem('huurtijd3')
  }
  if (checkboxes[13].checked){
    sessionStorage.setItem('huurtijd3', '2 uur')
    sessionStorage.getItem('huurtijd3')
  }
  if (checkboxes[14].checked){
    sessionStorage.setItem('huurtijd3', '4 uur')
    sessionStorage.getItem('huurtijd3')
  }
  if (checkboxes[15].checked){
    sessionStorage.setItem('huurtijd3', '6 uur')
    sessionStorage.getItem('huurtijd3')
  }
  if (checkboxes[16].checked){
    sessionStorage.setItem('huurtijd3', '8 uur')
    sessionStorage.getItem('huurtijd3')
  }
  if (checkboxes[17].checked){
    sessionStorage.setItem('huurtijd3', '1 dag')
    sessionStorage.getItem('huurtijd3')
  }
  display1.src = 'images/Gazelle_Orange_C7.jpg';
  display2.src = 'images/Gazelle_Orange_C7.jpg';
} 

if (checkboxes[6].checked || checkboxes[7].checked || checkboxes[8].checked || checkboxes[9].checked || checkboxes[10].checked || checkboxes[11].checked) {
  sessionStorage.setItem('fietsNaam2', 'Pelikaan Carry on');
  sessionStorage.getItem('fietsNaam2');
  if (checkboxes[6].checked){
    sessionStorage.setItem('huurtijd2', '1 uur')
    sessionStorage.getItem('huurtijd2')
  }
  if (checkboxes[7].checked){
    sessionStorage.setItem('huurtijd2', '2 uur')
    sessionStorage.getItem('huurtijd2')
  }
  if (checkboxes[8].checked){
    sessionStorage.setItem('huurtijd2', '4 uur')
    sessionStorage.getItem('huurtijd2')
  }
  if (checkboxes[9].checked){
    sessionStorage.setItem('huurtijd2', '6 uur')
    sessionStorage.getItem('huurtijd2')
  }
  if (checkboxes[10].checked){
    sessionStorage.setItem('huurtijd2', '8 uur')
    sessionStorage.getItem('huurtijd2')
  }
  if (checkboxes[11].checked){
    sessionStorage.setItem('huurtijd2', '1 dag')
    sessionStorage.getItem('huurtijd2')
  }
  display1.src = 'images/Pelikaan_Carry_On_Lady.jpg';
  display2.src = 'images/Pelikaan_Carry_On_Lady.jpg';
}
 
  if (checkboxes[0].checked || checkboxes[1].checked || checkboxes[2].checked || checkboxes[3].checked || checkboxes[4].checked || checkboxes[5].checked) {
      sessionStorage.setItem('fietsNaam1', 'Gazelle CityGo');
      sessionStorage.getItem('fietsNaam1');
      if (checkboxes[0].checked){
        sessionStorage.setItem('huurtijd', '1 uur')
        sessionStorage.getItem('huurtijd')
      }
      if (checkboxes[1].checked){
        sessionStorage.setItem('huurtijd', '2 uur')
        sessionStorage.getItem('huurtijd')
      }
      if (checkboxes[2].checked){
        sessionStorage.setItem('huurtijd', '4 uur')
        sessionStorage.getItem('huurtijd')
      }
      if (checkboxes[3].checked){
        sessionStorage.setItem('huurtijd', '6 uur')
        sessionStorage.getItem('huurtijd')
      }
      if (checkboxes[4].checked){
        sessionStorage.setItem('huurtijd', '8 uur')
        sessionStorage.getItem('huurtijd')
      }
      if (checkboxes[5].checked){
        sessionStorage.setItem('huurtijd', '1 dag')
        sessionStorage.getItem('huurtijd')
      }
      display1.src = 'images/Gazelle_CityGo_C7.jpg';
      display2.src = 'images/Gazelle_CityGo_C7.jpg';
  } 
}

function gekozenfietsen(){
  var fietsnaam1 = sessionStorage.getItem('fietsNaam1');
  var fietsnaam2 = sessionStorage.getItem('fietsNaam2');
  var fietsnaam3 = sessionStorage.getItem('fietsNaam3');
  var fietsnaam4 = sessionStorage.getItem('fietsNaam4');
  var huurtijd = sessionStorage.getItem('huurtijd');
  var huurtijd2 = sessionStorage.getItem('huurtijd2'); 
  var huurtijd3 = sessionStorage.getItem('huurtijd3'); 
  var huurtijd4 = sessionStorage.getItem('huurtijd4');  

if (fietsnaam1 && huurtijd) {
  
  var tabelLichaam = document.querySelector('#verhuur-tabel tbody');

  var nieuweRij = document.createElement('tr');

  var nieuweCelFietsnaam = document.createElement('td');
  nieuweCelFietsnaam.textContent = fietsnaam1;

  var nieuweCelHuurtijd = document.createElement('td');
  nieuweCelHuurtijd.textContent = huurtijd;

  nieuweRij.appendChild(nieuweCelFietsnaam);
  nieuweRij.appendChild(nieuweCelHuurtijd);

  tabelLichaam.appendChild(nieuweRij);
} else {
  console.log("Geen fietsnaam of huurtijd in sessionStorage gevonden.");
}

if (fietsnaam2 && huurtijd2) {
  // Zoek de tbody van de tabel
  var tabelLichaam = document.querySelector('#verhuur-tabel tbody');

  // Maak een nieuwe rij aan
  var nieuweRij = document.createElement('tr');

  // Maak een nieuwe cel aan voor de fietsnaam
  var nieuweCelFietsnaam = document.createElement('td');
  nieuweCelFietsnaam.textContent = fietsnaam2;

  // Maak een nieuwe cel aan voor de huurtijd
  var nieuweCelHuurtijd = document.createElement('td');
  nieuweCelHuurtijd.textContent = huurtijd2;

  // Voeg de cellen toe aan de rij
  nieuweRij.appendChild(nieuweCelFietsnaam);
  nieuweRij.appendChild(nieuweCelHuurtijd);

  // Voeg de rij toe aan het tabellichaam
  tabelLichaam.appendChild(nieuweRij);
} else {
  console.log("Geen fietsnaam of huurtijd in sessionStorage gevonden.");
}

if (fietsnaam3 && huurtijd3) {
  // Zoek de tbody van de tabel
  var tabelLichaam = document.querySelector('#verhuur-tabel tbody');

  // Maak een nieuwe rij aan
  var nieuweRij = document.createElement('tr');

  // Maak een nieuwe cel aan voor de fietsnaam
  var nieuweCelFietsnaam = document.createElement('td');
  nieuweCelFietsnaam.textContent = fietsnaam3;

  // Maak een nieuwe cel aan voor de huurtijd
  var nieuweCelHuurtijd = document.createElement('td');
  nieuweCelHuurtijd.textContent = huurtijd3;

  // Voeg de cellen toe aan de rij
  nieuweRij.appendChild(nieuweCelFietsnaam);
  nieuweRij.appendChild(nieuweCelHuurtijd);

  // Voeg de rij toe aan het tabellichaam
  tabelLichaam.appendChild(nieuweRij);
} else {
  console.log("Geen fietsnaam of huurtijd in sessionStorage gevonden.");
}

if (fietsnaam4 && huurtijd4) {
  // Zoek de tbody van de tabel
  var tabelLichaam = document.querySelector('#verhuur-tabel tbody');

  // Maak een nieuwe rij aan
  var nieuweRij = document.createElement('tr');

  // Maak een nieuwe cel aan voor de fietsnaam
  var nieuweCelFietsnaam = document.createElement('td');
  nieuweCelFietsnaam.textContent = fietsnaam4;

  // Maak een nieuwe cel aan voor de huurtijd
  var nieuweCelHuurtijd = document.createElement('td');
  nieuweCelHuurtijd.textContent = huurtijd4;

  // Voeg de cellen toe aan de rij
  nieuweRij.appendChild(nieuweCelFietsnaam);
  nieuweRij.appendChild(nieuweCelHuurtijd);

  // Voeg de rij toe aan het tabellichaam
  tabelLichaam.appendChild(nieuweRij);
} else {
  console.log("Geen fietsnaam of huurtijd in sessionStorage gevonden.");
}
}

function huren(){
  alert("Gegevens verzonden");
}