const form = document.getElementById('myForm');
const bar = document.getElementById('progress-bar');
const percentageText = bar.previousElementSibling;

function updateProgressBar(progressEvent) {
  const percentCompleted = Math.round(
    (progressEvent.loaded / progressEvent.total) * 100
  );
  bar.value = percentCompleted;
  percentageText.textContent = `${percentCompleted}%`;
  if (percentCompleted === 100) {
    percentageText.textContent = 'Loading Completed';
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData();
  const file = document.getElementById('file');
  const img = file.files[0];
  formData.append('image', img);

  const configuration = {
    onUploadProgress: updateProgressBar,
  };

  axios
    .post('https://httpbin.org/post', formData, configuration)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
