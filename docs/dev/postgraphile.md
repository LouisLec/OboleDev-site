# Mise en place d'une API GraphQL avec Postgraphile

## Présentation de Postgraphile
Postgraphile est une utilitaire nodeJS qui vient créer une API GraphQL dynamique sur une base de donnée PostgreSQL. Postgraphile vient générer les différents types GraphQL par introspection sur la base de donnée (toutes les mutations et queries), puis vient compiler les requêtes GraphQL reçues en requêtes SQL directement interprétées par PostgreSQL.

Un exemple concret [ici](https://medium.com/@dorian599/postgraphile-graphql-apis-postgresql-7e7f29fc3941)

Concrètement, 
- Queries et mutations CRUD automatiques (*e.g. updatePostById*)
- Custom queries et mutations à l'aide des fonctions PostgreSQL
- Gestion de l'authentification JWT et des rôles en base 👉️ protection des data au plus proche des data (permisssions et Row Level Security)
- Extensibilité par ajout de plugin
  - temps réel (subscriptions GraphQL)
  - appels API externes
  - ajouts de filtres dans les queries 
  - ...
- Intégration avec Graphile-worker, le système de job queue des développeurs postgraphile
- ...

## Création d'une API
### Mise en place du serveur avec node et express
* en prod
* en dev

### Création des schémas
Le schema PostgreSQL par défaut est le schema `public`. Il est recommandé de séparer ce qui doit être exposé par l'API de ce qui ne doit pas l'être, en utilisant les shemas (comme des namespaces).

```sql
-- un schema publique dont les tables et fonctions sont exposées via l'API
create schema myapp_public;
-- un schema privé qui contient par exemple des données personnelles sur les utilisateurs (adresse complète, mot de passe, infos de session...)
create schema myapp_private;
```
### Inflection (denomination des types gql en fonction des types pg)
Par défaut, Postgraphile génère des noms très verbeux pour tous les différents types (*e.g. authorByEditorId*). Il est recommandé d'utiliser le plugin [pg-simplify-inflector](https://github.com/graphile/pg-simplify-inflector).

### Création des tables

Postgraphile ajoute automatiquement un certain nombre d'éléments au schéma GraphQL généré, en se basant sur le contenu des tables du schema postgres inspecté.

Pour la table suivante :
```sql
CREATE TABLE app_public.users (
  id serial PRIMARY KEY,
  username citext NOT NULL unique,
  name text NOT NULL,
  about text,
  organization_id int NOT NULL
    REFERENCES app_public.organizations ON DELETE CASCADE,
  is_admin boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
```
Postgraphile va: 
- Créer un type gql `User`, en UpperCamelCase et au singulier
- Ajouter des champs à ce type pour chacune des colonnes de la table (*e.g. `id`, `username`, `about`, `organizationId`, `isAdmin`, `createdAt`, `updatedAt`*), en camelCase.
- Ajouter un champ `nodeId` globalement unique si la table a une `PRIMARY KEY`.
- Ajouter un champ pour les différentes relations (*e.g. `organizationByOrganizationId`*).
- Ajouter pour les tables liées:
  - Les relations inversées (*e.g. `Organization.usersByOrganizationId`*).
- Ajouter au type `Query`:

  - un champ (connection field) `allUsers` avec pagination, filtering, et ordering
  - Un champ `userByKey(key: ...)` (*e.g. userById, userByUsername*), pour toutes les contraintes `unique` de la table
  - Un champ `foo(nodeId: ID!)` pour récupérer un rang quelconque par son `nodeId`
- Ajouter des mutations CRUD au type `Mutation` pour tous les champs uniques de la table (*e.g. `deleteUserByOrganization` ...*)

#### Les champs connection
Une requête type `allUsers` peut renvoyer un grand nombre de résultats. Pour ce genre de requête, postgraphile implémente une ["connection"](https://www.graphile.org/postgraphile/connections/) pour laquelle les champs disponibles sont:
* `totalCount`
* `nodes`
* `PageInfo.startCursor` et `PageInfo.endCursor`, utiles pour la pagination

La plupart des connections implémentent aussi un système de [filtrage](https://www.graphile.org/postgraphile/filtering/).

#### Les mutations CRUD
[CRUD](https://www.graphile.org/postgraphile/crud-mutations/)

### Création des fonctions
[functions](https://www.graphile.org/postgraphile/functions/)

## Bonnes pratiques


