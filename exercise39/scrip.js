const fromSelect = document.getElementById("fromLang");
const toSelect = document.getElementById("toLang");
const inputText = document.getElementById("inputText");
const output = document.getElementById("output");
const translateBtn = document.getElementById("translateBtn");

const languages = [
  { code: "auto", name: "Auto Detect" },
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "so", name: "Somali" },
  { code: "ar", name: "Arabic" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" }
];


const dictionary = {
  en: {
    "hello": "hello",
    "thank you": "thank you",
    "good morning": "good morning"
  },
  fr: {
    "hello": "bonjour",
    "thank you": "merci",
    "good morning": "bonjour"
  },
  so: {
    "hello": "hello",
    "thank you": "mahadsanid",
    "good morning": "subax wanaagsan"
  },
  ar: {
    "hello": "مرحبا",
    "thank you": "شكرا",
    "good morning": "صباح الخير"
  },
  es: {
    "hello": "hola",
    "thank you": "gracias",
    "good morning": "buenos días"
  }
};



function loadLanguages() {
  languages.forEach(lang => {
    const option1 = document.createElement("option");
    option1.value = lang.code;
    option1.textContent = lang.name;

    const option2 = option1.cloneNode(true);

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  });

  fromSelect.value = "auto";
  toSelect.value = "en";
}


function translateText() {
  const text = inputText.value.toLowerCase();
  const to = toSelect.value;

  if (!text) {
    output.textContent = "Please enter text";
    return;
  }

  const result = dictionary[to]?.[text];

  output.innerHTML = result
    ? `<b>Result:</b> ${result}`
    : "Translation not available (try: hello, thank you, good morning)";
}


translateBtn.addEventListener("click", translateText);


loadLanguages();