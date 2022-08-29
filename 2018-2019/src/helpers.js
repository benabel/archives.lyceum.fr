import slugify from 'slugify'

export const partPathFromNode = node => {
  node = flattenFileNode(node)
  return `/${node.classe}/${node.matter}/${node.nPart}-${slugify(node.part)}`
}

// aplati les objets recus
// pour eviter les attributs à rallonge
// node.childMArkdownreark.fields.matter => node.matter
// inspiré de https://gist.github.com/penguinboy/762197
export const flattenFileNode = function(fileNode) {
  let toReturn = {}

  for (let key in fileNode) {
    if (!fileNode.hasOwnProperty(key)) continue
    // ATTENTION ne fonctionne pas pour les listes d'objets
    if (Array.isArray(fileNode[key])) {
      toReturn[key] = fileNode[key]
      continue
    }

    if (typeof fileNode[key] === `object`) {
      let flatObject = flattenFileNode(fileNode[key])
      for (let k in flatObject) {
        if (!flatObject.hasOwnProperty(k)) continue

        toReturn[k] = flatObject[k]
      }
    } else {
      toReturn[key] = fileNode[key]
    }
  }
  return toReturn
}

export const matterNameFromMatter = matter => {
  switch (matter) {
    case `pc`:
      return `physique-chimie`
    default:
      return matter
  }
}

export const classeNameFromClasse = classe => {
  switch (classe) {
    case `2gt`:
      return `seconde`
    case `ts`:
      return `terminale S`
    default:
      return classe
  }
}

export const classeWikidataURIFromClasse = classe => {
  switch (classe) {
    case `2gt`:
      return `https://www.wikidata.org/wiki/Q3477055`
    case `ts`:
      return `https://www.wikidata.org/wiki/Q3518433`
    default:
      return ``
  }
}
