// installer l'écouteur d’événement onmessage cad en écoute pour un message en provenance du new_worker :
self.onmessage = function (message) {
  //   console.log(message); // affichage du messageEvent.
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) sum += i;
  // envoyer le résultât vers le main thread
  self.postMessage(`La somme de 1 jusqu' a 10 Milliards est : ${sum}`);
  //   console.log(`La somme de 1 jusqu' a 10 Milliards est : ${sum}`);
};
