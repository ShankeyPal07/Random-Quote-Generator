let quoteEl = document.getElementById("qoutes");
const url = "https://api.quotable.io/random";

const fetchurl = async () => {
  try {
    const data = await fetch(url);
    const res = await data.json();

    
    quoteEl.innerHTML = `
    <p>${res.content}</p>
    <span> - ${res.author}</span>`
} catch (error) {}
};

