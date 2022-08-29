// fonction qui crée une couleur au hasard
function randColor() {
  for (var i = 0, col = ''; i < 6; i++) {
    col += ((Math.random() * 16) | 0).toString(16)
  }
  return '#' + col
}

// sélection de l'élément svg
var jsCircle = document.getElementById('circle2')

// à chaque click, changer la couler
jsCircle.addEventListener('click', function(e) {
  var newColor = randColor()
  console.log('Nouvelle couleur: ' + newColor)
  e.currentTarget.setAttribute('fill', newColor)
})
