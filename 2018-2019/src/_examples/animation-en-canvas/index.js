// Variable qui correspond au canvas
var monCanvas = document.getElementById(`mon-canvas`)

// Dimensions du canvas
var width = monCanvas.width
var height = monCanvas.height
// contexte graphique 2D
var ctx = monCanvas.getContext(`2d`)

// Inititialisation des coordonnées et vitesses du smiley
var smiley = new Smiley(
  width / 2,
  height / 2,
  10 * Math.random() - 5,
  10 * Math.random() - 5
)

// Lancement de l'animation
anime()

function anime() {
  // 1) On dessine le fond du canvas
  dessineFond()

  // 2) On déplace le smiley
  smiley.deplaceToi()

  // 3) On regarde si le smiley touche un mur
  checkWallCollision(smiley)

  // 3) On dessine le smiley
  smiley.dessineToi()

  // On demande une nouvelle frame d'animation
  window.requestAnimationFrame(anime)
}

function dessineFond() {
  // On efface l'écran
  ctx.clearRect(0, 0, monCanvas.width, monCanvas.height)

  //background
  ctx.fillStyle = `#ffffcc`
  ctx.fillRect(0, 0, monCanvas.width, monCanvas.height)

  //box
  ctx.strokeStyle = `#000000`
  ctx.strokeRect(5, 5, 490, 390)
}

// fonction smiley qui stocke ses coordonnées et sa vitesse
// et qui possède deux méthodes pour se dessiner et se déplacer

function Smiley(x, y, vx, vy) {
  this.x = x
  this.y = y
  this.vx = vx
  this.vy = vy
  this.radius = 50

  this.dessineToi = function() {
    //smiley
    ctx.beginPath()
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2, true) // Tête
    ctx.fillStyle = `#FFFF00`
    ctx.fill() // Colorier la tête en jaune
    ctx.moveTo(this.x + 35, this.y)
    ctx.arc(this.x, this.y, 35, 0, Math.PI, false) // Bouche
    ctx.moveTo(this.x - 10, this.y - 10)
    ctx.arc(this.x - 15, this.y - 10, 5, 0, Math.PI * 2, true) // Oeil gauche
    ctx.moveTo(this.x + 20, this.y - 10)
    ctx.arc(this.x + 15, this.y - 10, 5, 0, Math.PI * 2, true) // Oeil droit

    ctx.lineWidth = 5
    ctx.stroke()
  }

  this.deplaceToi = function() {
    this.x += this.vx
    this.y += this.vy
  }
}

function checkWallCollision(objet) {
  if (objet.x < objet.radius) {
    objet.x = objet.radius
    objet.vx *= -1
  }
  if (objet.x > width - objet.radius) {
    objet.x = width - objet.radius
    objet.vx *= -1
  }
  if (objet.y < objet.radius) {
    objet.y = objet.radius
    objet.vy *= -1
  }
  if (objet.y > height - objet.radius) {
    objet.y = height - objet.radius
    objet.vy *= -1
  }
}
