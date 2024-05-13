// Get a reference to the file input element
const fileInput = document.getElementById('fileInput');

// Get a reference to the div element where the file content will be displayed
const fileContentDiv = document.getElementById('fileContent');

// Add an event listener to the file input element to handle the 'change' event
fileInput.addEventListener('change', e => {
  // Get the selected file from the file input element
  const file = fileInput.files[0];
  console.log(file);
  // Create a new FileReader object
  const reader = new FileReader();
  console.log(reader);
  // Read the selected file as text using the FileReader object
  reader.readAsText(file);

  // Add an event listener to the FileReader object to handle the 'load' event
  reader.onload = event => {
    // Get the file content from the FileReader object
    const csv = event.target.result;
    // convert the file text format to a javascript object format:
    // first split the text  each line is an array, et chaque element d'une line sera séparé par une virgule
    const array = csv.split('\r\n').map(line => {
      return line.split(';');
    });
    console.log(array);
    // l'objet array contient toute la data,
    // traitement de la data: creation d'une table html pour insérer la data:
    const table = document.createElement('table');
    // creation des lignes de la table:
    array.forEach((line, index) => {
      let tr, td;
      tr = document.createElement('tr');
      // creation des colonnes de la ligne:
      line.forEach(cell => {
        if (index === 0) {
          td = document.createElement('th'); // entête
        } else {
          td = document.createElement('td'); // le reste des rows
        }
        td.textContent = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    fileContentDiv.appendChild(table);
    // afficher le code injecté de la table et ses composants:
    const html_code = fileContentDiv.innerHTML;
    // creation de la tag <pre>:
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    // utiliser prettier pour enjoliver
    code.innerText = prettier.format(html_code, {
      parser: 'html',
      //   semi: true,
      //   singleQuote: true,
      plugins: prettierPlugins,
    });
    pre.append(code);
    document.body.append(pre);
  };
});
