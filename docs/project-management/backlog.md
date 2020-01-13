# Gérer son backlog

La gestion du backlog est la tâche la plus lourde du *product owner*. Pour faciliter cette tâches des outils et des principes rigides sont mis en place pour ce concentrer sur l'essentiel: couvrir les fonctionnalités nécessaires et les faire passer à l'équipe de développement sans laisser de portes ouvertes à l'interprétation.

Le projet est géré depuis **Azure DevOps**. Un exemple est donné [ici](https://dev.azure.com/obelos/Demonstration)

## Le *backlog*
### C'est quoi le *backlog* ?
Le backlog, c'est l'ensemble des demandes du *product owner*. Il est composé d'***Epics*** - les grandes fonctionnalité du projet, eux-même découpés en ***user stories*** (ou *issues*) qui présentent des cas d'utilisation concrets. Nos attentes concernant le contenu des *epics* et de *user stories* est décrit en détails plus bas sur cette page.
### Pour y accéder
La gestion du backlog se fait dans **Azure Boards**. Rendez-vous sur l'espace du projet (nous vous enverrons un lien) et via le menu de gauche: boards ➡️ backlog
![AcessBacklog](../.vuepress/assets/img/screen_backlog.png)

## les *Epics*
### C'est quoi un *epic*
Un *epic* décrit une fonctionnalité du projet. L'ensemble des *epics* doit donner une bonne compréhension du projet, et les epics à traiter doivent être définis au début du projet. Les *epics* on pour objectif de classer les *user stories* (voir ensuite) et de donner une vue d'ensemble du projet dès le début. Il ne s'agit pas de rentrer dans le détail des fonctionnalités. Les epics ne doivent pas radicalement changer durant le projet, et pas sans consultation des participant au projet. 



Nous vous demandons de bien vouloir adopter le formalisme suivant pour la définition des epics.
titre|description|exigences
---|---|---
un titre court ciblant clairement une fonctionnalité|un texte explicant la fonctionnalité espérée dans les grandes lignes, en bon français, sur lequel vous pouvez rajouter tout élément que vous jugerez pertinant pour nous aider à cerner le besoin|une serie de bullet points definissant les cas traités par cette fonctionnalité à un niveau plus fin

### Pour en créer un
Depuis le backlog, passez en mode "*epics*"
![SwitchToEpics](../.vuepress/assets/img/switch_to_epics.png)

Créez un nouvel *epic*:
![NewEpic](../.vuepress/assets/img/new_epic.png)

L'*epic* va apparaître dans la liste en dessous. En cliquant dessus depuis la liste, vous pourrez le modifier et le compléter comme dans l'exemple suivant:
![Epic](../.vuepress/assets/img/epic.png)


Les seuls champs à modifier de la carte *epic* sont le titre et la description.

## Les *User stories*
### C'est quoi une *user story* ?
Les *user stories* se réferrent à un *epic* et décrivent en détail les cas d'utilisation correspondant à la fonctionnalité décrite dans l'*epic*. Avant d'écrire les *user stories*, nous définissons des *rôles* (à ne pas confondre avec les rôles des participants au projet), qui auront des permissions différentes sur le site ou l'application développée. Le plus souvent il n'y a que trois rôles: **anonyme** pour un visiteur non connecté, **utilisateur** pour un visiteur connecté et **administrateur**. Selon les projets, il y aura plus ou moins de rôles différents.

Les *user stories* correspondent à un souhait précis d'un visiteur ayant un rôle donné, et sont exprimées dans le formalisme suivant: 

> En tant que `<role>`, je souhaite `<un souhait unique>`

L'équipe de développement va traiter les *user stories* une à une, en traduisant les attentes "métier" en termes techniques. Pour s'assurer d'avoir bien rempli les attentes du *product owner*, les *user stories* doivent aussi comporter des critères d'acceptation, dans la forme suivante:
> Lorsque je `<action unique>`, alors `<conséquences de l'action>`

::: warning Note
Dans les critères d'accepation, nous vous demandons de faire référence au design établi préalablement. Dans le document XD contenant les planches de votre site, relevez le nom de la planche correspondante au critère d'accepation et mentionnez le
:::
### Pour en créer une
Pour créer une *user story*, rendez-vous dans le *backlog* et basculer en mode *epic* (voir plus haut). La liste des *epics* s'affiche, et en passant le curseur au dessus de l'*epic* qui nous intéresse, un signe "+" s'affiche. Cliquez simplement dessus pour ajouter une *Issue*. C'est dans cette *issue* que vous allez écrire votre *user story*.
![newIssue](../.vuepress/assets/img/new_issue.png)
![issue](../.vuepress/assets/img/issue.png)

les champs à modifier de la carte *issue* sont le titre (la *user story* en question), la description (les *critères d'acceptation*) et la **priorité**.

::: warning Conseil
Ajoutez une priorité à votre *user story*, pour permettre de cerner les cartes à traiter en priorité en début de sprint.
:::

### Discussions sur les *user stories*
Il est fréquent lors des *sprint plannings* (voir [Rituels](rituals)) que l'équipe de développement demande à retravailler une *user story* soit pour la scinder en plusieurs plus concises, soit pour mieux cerner les besoins, soit car elle ne semble pas en adéquation avec le reste du projet.

Pour voir un exemple réel, rendez-vous [ici](https://dev.azure.com/obelos/Demonstration)