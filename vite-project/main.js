// import './dist/output.css'

// let data = [];

// async function getQuotes() {
  
  const result = await fetch('https://dummyjson.com/quotes?limit=5');
  data =  await result.json();
 let table = '';
 data.quotes.forEach((p) => {
  table += `<p class="text-3xl font-bold underline">${p.quote}</p>`
 })
 document.querySelector('#app').innerHTML = table;

window.addEventListener('load', getQuotes());



