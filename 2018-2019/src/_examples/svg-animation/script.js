function anime() {
  requestAnimationFrame(anime);

  // sélectionne la balise circle et la stocke dans la variable cercle
  var cercle = document.querySelector("#circle");

  // stocke l'abscisse du cercle dans la variable posX
  var posX = cercle.getAttribute('cx');

  // augmente l'abscisse de 1 si on est pas sortie de l'image
  if (posX < 300) {
    posX = Number(posX) + 1;
  }
  // sinon on revient au début de l'image
  else { posX = -100 }

  // déplace le cercle à la position souhaitée
  cercle.setAttribute("cx", posX);

}

// Je lance l'animation après chargement de la page
window.onload = function () {
  anime()
}