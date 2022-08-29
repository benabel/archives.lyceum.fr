---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
---

::: programme

+-----------------------------+------------------------------------------------------------------+
|        **Contenus**         |                     **Capacités attendues**                      |
+=============================+==================================================================+
| Protocole TCP/IP : paquets, | Distinguer le rôle des protocoles IP et TCP.                     |
| routage des paquets         |                                                                  |
|                             | Caractériser les principes du routage et ses limites.            |
|                             |                                                                  |
|                             | Distinguer la fiabilité de transmission et l’absence de garantie |
|                             | temporelle.                                                      |
+-----------------------------+------------------------------------------------------------------+
| Adresses symboliques et     | Sur des exemples réels, retrouver une adresse IP à partir        |
| serveurs DNS                | d’une adresse symbolique et inversement.                         |
+-----------------------------+------------------------------------------------------------------+


+-------------------------------------------------------------------------------------------------+
|                                    **Exemples d’activités**                                     |
+=================================================================================================+
| - Illustrer le fonctionnement du routage et de TCP par des activités débranchées ou à l’aide de |
| logiciels dédiés, en tenant compte de la destruction de paquets.                                |
| - Déterminer l’adresse IP d’un équipement et l’adresse du DNS sur un réseau.                    |
| - Suivre le chemin d’un courriel en utilisant une commande du protocole IP.                     |
+-------------------------------------------------------------------------------------------------+


:::

> La création d'internet, _le réseau des réseaux_ en 1983 a été possible grâce à l'invention de
> protocoles de communication entre réseaux.
> > &nbsp;
> Les protocoles TCP et IP inventés en 1977 ont en effet la particularité d'être _indépendants des
> matériels_ et permettent au réseau de se moderniser sans être littéralement modifié.

`youtube: 5AVY6E-7yCc`

## Transport: Le protocole TCP

TCP: _Transmission Control Protocol_

Le protocole TCP est un protocole de transport, il permet de s'_assurer que les données sont
correctement transmises._

Avant d'être envoyées, les données sont découpées en paquets et numérotées.

Lors de la réception, on s'assure que tous les paquets sont reçus et conformes, puis on les
réordonne.

::: plus

Sur internet les paquets ont une taille maximale de 1500 octets, ainsi s'il y a un problème, seuls
les paquets perdus sont renvoyés.

:::

## Adressage: Le protocole IP

Internet est défini par le protocole **IP** (_Internet Protocol_), ensemble de normes qui
permettent d’identifier et de nommer de façon uniforme tous les ordinateurs ou objets qui lui sont
connectés.

::: example

Quand on s'abonne auprès d'un FAI, on obtient une adresse **IP**, cette adresse permet d'identifier
votre appareil sur le réseau.

Exemple: `194.187.168.99`

Pour obtenir son adresse ip on peut consulter un site comme: <https://www.whatsmyip.org/>

:::

<!-- 
## Le routage

Le réseau internet étant décentralisé, pour communiquer entre elles les machines doivent passer par
l'intermédiaire d'autres machines: les **routeurs**.

<p><a href="https://commons.wikimedia.org/wiki/File:Internet-transit-2.svg#/media/Fichier:Internet-transit-2.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Internet-transit-2.svg/1200px-Internet-transit-2.svg.png" alt="Internet-transit-2.svg"></a><br>Image par <a href="https://meta.wikimedia.org/wiki/User:Tomybrz" class="extiw" title="m:User:Tomybrz">Tomybrz</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=73745782">Lien</a></p>

Le routage est le mécanisme par lequel des chemins sont sélectionnés dans un réseau pour acheminer
les données d'un expéditeur jusqu'à un ou plusieurs destinataires.

::: .plus

L'efficacité du routage passe par des algorithmes qui utilisent des tables de routage indiquant
quelle route prendre pour acheminer un paquet vers une adresse donnée.

:::

 -->

::: {.plus titre="Passage à l'IPv6"}

On utilisait au départ des adresses de 32 bits constituées de 4 valeurs comprises entre 0 et 255.

Comme: `194.187.168.99`, cependant le nombre d'adresses devenant insuffisant, on est en train de
passer à l'IP en version 6 qui utilise des adresses de 128 bits:

```
ping -6 wikipedia.org
PING wikipedia.org(text-lb.esams.wikimedia.org (2620:0:862:ed1a::1)) 56 data bytes
```

Voici l'adresse ipv6 de wikipedia.org `2620:0:862:ed1a::1`

Pour l'utiliser dans un navigateur, il faut l'écrire entre crochets. `http://[2620:0:862:ed1a::1]/`

:::



## Noms de domaine: Le protocole DNS

> Pour faciliter l'accès aux hôtes sur un réseau IP, un mécanisme a été mis en place pour associer
> un nom à une adresse IP. Ce nom, plus simple à retenir, est appelé « nom de domaine ». Résoudre
> un nom de domaine consiste à trouver l'adresse IP qui lui est associée. 

[Article Wikipedia DNS](https://fr.wikipedia.org/wiki/Domain_Name_System){.cite-source}


::: {.plus titre="La commande nslookup"}
Cette commande permet de trouver une adresse ip à partir d'un nom de domaine:

```sh
[ben@archben ~]$ nslookup framasoft.org
Server:         192.168.1.1
Address:        192.168.1.1#53

Non-authoritative answer:
Name:   framasoft.org
Address: 144.76.131.212
Name:   framasoft.org
Address: 2a01:4f8:141:3421::212
```

Ou l'inverse:

```sh
[ben@archben ~]$ nslookup 144.76.131.212
212.131.76.144.in-addr.arpa     name = edna.framasoft.org.
```

:::

