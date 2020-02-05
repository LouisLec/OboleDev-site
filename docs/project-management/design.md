# Le cas particulier du design
Gérer le design en Agile s'avère plus complexe que gérer le développement informatique, pour la bonne raison que les goûts de chacun interviennent à ce niveau. Cette étape est pourtant **nécessaire** car elle fournira le matériau de base pour les développeurs.

En méthode Agile, nous vous vendons du temps. Voici donc ce que nous vous recommandons pour être le plus efficace sur cette phase de design.

## Le design des pages comme materiel de base
Lorsque les développeurs vont attaquer le développement du site, *i.e.* des pages du site, il sera necessaire qu'ils disposent d'un design des pages. Les développeurs ne sont pas designer d'interface, ils implémentent les interfaces designées en amont.

Nous démarrons donc nos projets par un premier sprint de design uniquement, à l'issue duquel les premières pages du site doivent être validées pour permettre aux développeurs de démarrer.

::: tip
Il est à noter qu'en développement informatique, rien n'est immuable. Nous pouvons donc démarrer le développement d'une page et revenir sur son design ensuite. Notez juste qu'en méthode Agile, nous vendons du temps. Pensez donc à prioriser vos demandes.
:::

## Le processus de design
Comme dit plus tôt, le design est en partie une question de goût, ce qui rend plus compliqué les interractions avec le client.

Nous distinguons donc plusieurs cas selon vos exigences, que vous ayez une idée précise de l'llure finale de la page ou non.

Dans tous les cas, nous attendfrons de vous un certain nombre d'éléments pour la réalisation des maquettes du site.

* **Cas 1: vous n'avez pas d'exigences particulières pour le design du site**

Dans ce cas précis, nous devons travailler ensemble (compter une demie journée à une journée) pour détailler votre besoin. Sur cette base, nous serons en mesure de vous proposer une interface utilisateur complète basée sur notre expérience et des principes généraux de design d'interface. A ce moment nous complèterons nous-même le *backlog* sur la partie design et vous ferons une présentation régulière du travail réalisé pour collecter vos retours.

* **Cas 2: vous avez des exigences particulières quant au contenu des pages**


* **Cas 3: vous avez des exigences particulières quant au contenu et à l'allure des pages**



## Lister les différents écrans du site
Cette étape est le point de départ de notre projet. En listant les pages du site, vous faîtes le tour des fonctionnalités, vous définissez l'expérience utilisateur, vous décrivez quelles données doivent être visibles à tel endroit, la disposition des éléments sur une page...

A cette étape, et selon que vous ayez une idée très précise ou  plutôt floue sur le design, nous pouvons nous faire force de proposition. C'est à définir lors de nos premiers échanges.
> ex: vous savez pertinemment quelles données doivent être présent sur tel écran, mais n'avez aucune idée sur la manière de l'origaniser, nous vous proposons de traiter pour vous la disposition

> ex: vous avez une idée plus que précise de la structure complète de votre page, nous vous proposons de répondre à vos attentes en réalisant directement les designs correspondant à votre description.

::: warning Note
Nous laisser structurer les pages implique dépenser plus de temps sur le design, mais peut vous en faire gagner dans la phase de développement, le graphiste étant alerte sur la complexité de développement associé à tel ou tel design
:::

::: tip Note
Plusieurs "petits" écrans avec des fonctionnalitées bien définies valent généralement mieux qu'un gros écran "usine à gaz"
:::

## Exemple de description attendue pour un écran
### Description de la page
La page "mon profil" fait apparaître mes informations personelles et me permet de les modifier. Je peux depuis cette page accéder à mes commandes en cours, voir mes commandes passées et modifier mes coordonnées bancaires.
### Composant de la page
* section profil
  * nom, champ éditable, apparaît différent si le champ a été modifié
  * prénom, champ éditable, apparaît différent si le champ a été modifié
  * adresse mail, champ éditable, apparaît différent si le champ a été modifié
  * photo de profil
  * bouton sous la photo de profil: modifier ma photo de profil, ouvre l'explorer pour charger une nouvelle photo
  * bouton "modifier mon profil", activable si un des champs précédents a été modifié, modifie les données du profil
* section "accéder à"
  * Bouton "mes commandes passées", renvoie vers la page "mes commmandes passées"
  * Bouton "mes commandes en cours", renvoie vers la page "mes commandes en cours"
* section "modifier mes coordonnées bancaires
  * champ BIC/IBAN
  * nom du compte associé
### OPTIONNEL
Si vous tenez à une structure de la page en particulier, joingnez des schémas/croquis de ce que vous souhaitez
## Gestion du backlog pour le design

## Valider les designs proposés sur la base des données/fonctionnalités de chaque écran

## Raffiner le design: créer de nouvelles demandes spécifiques