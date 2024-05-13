// Get a reference to the file input element
const fileInput = document.getElementById("fileInput");

// Get a reference to the div element where the file content will be displayed
const fileContentDiv = document.getElementById("fileContent");

// Add an event listener to the file input element to handle the 'change' event
fileInput.addEventListener("change", (e) => {
  // Get the selected file from the file input element
  const file = fileInput.files[0];

  // Create a new FileReader object
  const reader = new FileReader();

  // Add an event listener to the FileReader object to handle the 'load' event
  reader.onload = (event) => {
    // Get the file content from the FileReader object
    const fileContent = event.target.result;

    // Display the file content in the div element
    fileContentDiv.innerText = fileContent;
  };

  // Read the selected file as text using the FileReader object
  reader.readAsText(file);
});
