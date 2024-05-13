// Get a reference to the file input element
const fileInput = document.getElementById('fileInput');

// Get a reference to the div element where the picture  content will be displayed
const photoContentDiv = document.getElementById('photoContent');

// Add an event listener to the file input element to handle the 'change' event
fileInput.addEventListener('change', e => {
  // Get the selected file from the file input element
  const file = fileInput.files[0];

  // Create a new FileReader object
  const reader = new FileReader();

  // Add an event listener to the FileReader object to handle the 'load' event:
  reader.onload = event => {
    const url = reader.result;
    // console.log(url);
    //create an image object:
    const img = new Image();
    img.src = url;
    // append the img to the photoContentDiv:
    // photoContentDiv.appendChild(img);
    // add some filter :
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d'); // context for the canvas
      canvas.width = img.width;
      canvas.height = img.height;
      // ctx.filter = 'grayscale(1)';
      // ctx.filter = 'blur(10px)';
      ctx.filter = 'saturation(1)';
      // drawing the image:
      ctx.drawImage(img, 0, 0);
      // add some text :
      ctx.font = '60px serif';
      ctx.fillText('What a nice clean fuck noisy town !! Seoul !', 30, 80);

      // append the canvas to the div and display the result:
      photoContentDiv.appendChild(canvas);

      // comment extraire la data de cette canvas pour l'envoyer au serveur?:
      canvas.toBlob(blob => {
        const formData = new formData();
        formData.append('envoi_img', blob, 'image_envoyée.jpg');

        // sending file using fetch method:
      });
    };
  };

  // Read the selected file as text using the FileReader object
  reader.readAsDataURL(file);
});
