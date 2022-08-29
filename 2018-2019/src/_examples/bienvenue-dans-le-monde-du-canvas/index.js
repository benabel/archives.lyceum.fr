//
// initialisation du contexte
//
var theCanvas = document.getElementById(`mon-canvas`)
var context = theCanvas.getContext(`2d`)

//
// Dessin
//

// fond coloré
context.fillStyle = `#ffffaa`
context.fillRect(0, 0, 400, 300)

// texte centré
context.fillStyle = `#333333`
context.font = `20px Serif`
context.textAlign = `center`
context.fillText(`Bienvenue dans le monde du canvas`, 200, 150)

// boite englobante
context.strokeStyle = `#000000`
context.strokeRect(5, 5, 390, 290)
