# ISC License (ISC)
#
# Copyright 2020 Benjamin Abel
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
# REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
# AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
# INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
# LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
# OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
# PERFORMANCE OF THIS SOFTWARE.

import pandas as pd
import matplotlib.pyplot as plt

# helper functions


def _rename_cols(col):
    """Renomme les colonnes pour garder que le symbole"""
    col = col.split(":")[-1].lower()
    col = col.split("(")[0]
    col = col.replace(" ", "_")
    col = col.strip("_")
    return col


def _trace_vecteurs(data, echelle_v, echelle_dv, n_lissage, n_select):
    # Positions en vert
    plt.scatter(data.x, data.y, color='green', alpha=0.5)

    # vecteurs vitesse en bleu
    # TODO travailler sur l'échelle
    plt.quiver(data.x,
               data.y,
               data.vitesse_x,
               data.vitesse_y,
               color="blue",
               scale_units="xy",
               scale=echelle_v,
               alpha=0.5,
               label="$\\vec{v}$")

    # vecteurs accélération en rouge
    # TODO travailler sur l'échelle
    diff = data.diff()
    plt.quiver(data.x,
               data.y,
               diff.vitesse_x,
               diff.vitesse_y,
               color="red",
               scale_units="xy",
               scale=echelle_dv,
               alpha=0.5,
               label="$\\vec{\Delta v}$")
    plt.legend()
    plt.show()

# fonction principale


def trace_vecteurs(csv_file,
                   echelle_v=1,
                   echelle_dv=1,
                   n_lissage=10,
                   n_select=1):
    """Tracé de vecteurs vitesses et variations de vecteurs vitesse
    
    Arguments
    ---------
    csv_file
        chemin vers le fichier csv des pointages
    echelle_v
        echelle de tracé des vecteurs vitesse: par défaut 1
    echelle_dv
        echelle de tracé des vecteurs variation de vecteurs vitesses: par défaut 1
    n_lissage
        nombre de points de lissage par défaut 10
    n_select
        fraction des points ou les vecteurs sont tracés
        p.ex: pour n_s=3, 1 vecteur sur 3 st tracé
    """
    # On importe les données du fichier csv
    data = pd.read_csv(csv_file, sep=";", decimal=",")

    # On renomme les colonnes sans le Analyse Vidéo ni l'unité
    data = data.rename(_rename_cols, axis='columns')
    # lissage par moyenne mobile
    data = data.rolling(n_lissage, center=True).mean()
    # sous échantillonage
    data = data.loc[[i for i in data.index if i % n_select == 0]]

    _trace_vecteurs(data, echelle_v, echelle_dv, n_lissage, n_select)
