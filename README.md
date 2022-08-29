# archives

Archives du site lyceum.fr depuis sa création en 2017.

Compte tenu des limites de taille sur framagit, les archives à partir de
2021-2022 sont créés sur gitlab car framagit limite la taille du site.

## Ajout d'une nouvelle année

Dans le site original `gatsby-config.js` <lyceum.fr>, penser à modifier la configuration comme suit pour que les liens fonctionnent:

```js
module.exports = {
  siteMetadata: {
    siteUrl: `https://archives.lyceum.fr`,
  },
  pathPrefix: `/2021-2022`,
  ...
}

```

Ajouter le bandeau revenir au présent sur le modèle `layout.js`.

```html
<div class="back-to-present">
  Vous êtes sur une version archivée de lyceum.fr de l'année 2021/2022.&nbsp;
  <a  href="https://lyceum.fr">Revenir au présent.</a>
</div>
```

Style css fichier `layout.scss`:

```css
.back-to-present{
  display:block;
  padding:15px 20px;
  font-weight:700;
  color:#f2f11d;
  text-align:center;
  background-color:#d02a3e
}
```

Ensuite, générer le site avec l'option `-prefix-paths`: 

    yarn run clean && yarn run build --  --prefix-paths

Déplacer dans archives, tester, ajouter l'année dans la page d'accueil et publier.

    rm -rf ../archives/2021-2022
    mkdir ../archives/2021-2022
    mv  public/ ../archives/2021-2022/
    cp -r src ../archives/2021-2022/



## Licence

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />Ce(tte) œuvre est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licence Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International</a>.

## Crédits

- Le site est hébérgé sur framagit.org à l'adresse <https://lyceum.frama.io/archives> et redirigé <https://archives.lyceum.fr> 
- La page d'accueil a été créée avec [purecss](https://purecss.io/layouts/) sous licence BSD.
