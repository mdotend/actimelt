/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
front.on('updateView', (data) => {
  CreateTableFromJSON(data);
  console.log(data);
});

function myFunction() {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function includeHTML() {
  let z; let i; let elmnt; let file; let
    xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* search for elements with a certain atrribute: */
    file = elmnt.getAttribute('w3-include-html');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) { elmnt.innerHTML = this.responseText; }
          if (this.status === 404) { elmnt.innerHTML = 'Page not found.'; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute('w3-include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
function submitForm() {
  const tag = document.getElementById('inputTag').value;
  const stadt = document.getElementById('inputTown').value;
  const zeitStart = document.getElementById('Zeit1').value;
  const zeitEnde = document.getElementById('Zeit2').value;
  const json = {
    tag, stadt, zeitStart, zeitEnde,
  };
  console.log(json);
  front.send('submitTest', json);
}
