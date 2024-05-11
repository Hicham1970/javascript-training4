// Creation de la nouvelle instance worker:
const new_worker = new Worker("web_worker.js");

const sumButton = document.querySelector("#sum");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", (event) => {
  // let sum = 0;
  // for (let i = 0; i < 10000000000; i++) sum += i;
  // console.log(`La somme de 1 jusqu' a 10 Milliards est : ${sum}`);
  // poster un message au web_worker
  // new_worker.postMessage({ boy: "hello" });
  new_worker.postMessage(
    "C'est le message poster par le new_worker vers le web_worker !"
  );
});

// écouteur d'événement pour les message en provenance du web_worker:
new_worker.onmessage = function (message) {
  console.log(message);
  console.log(message.data); // "la somme...."
  console.log(message.srcElement); // worker

  alert(`La somme de 1 jusqu' a 10 Milliards est : ${message.data}`);
};

bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green")
    document.body.style.background = "green";
  else {
    document.body.style.background = "blue";
  }
});
