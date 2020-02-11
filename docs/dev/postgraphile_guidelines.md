# Création d'un API avec Postgraphile

# Le stack
- NodeJS + Express pour monter le server
- Postgraphile
- Graphile-worker
- Passport
- S3

# Monter le server
## en dev
## en prod

# Création du schéme PostgreSQL

## Création des schémas

Nous créons de manière générale deux schémas: 
* un schéma `my_app.public` qui va être le schéma exposé par l'API. Typiquement ce schéma comprend tout ce qui n'est pas sensible/innutile à l'utilisateur (mdp, email, infos de session, informations personnelles...)
* un schéma `my_app.private`

## Création des rôles

* Pour éviter de devoir partager les rôles entre plusieurs BdD, nous les préfixons par le nom de l'app: `sopolyglot_user`, `sopolyglot_anonymous`...
* Nous créons les rôles au début pour gérer les permissions et la RLS dès le début

## Création des tables
D'office, lorsqu'on crée une tables, de nombreux types graphQL sont créés. 
>*e.g.
> Pour la table suivante :
>```sql
>CREATE TABLE app_public.users (
>  id serial PRIMARY KEY,
>  username citext NOT NULL unique,
>  name text NOT NULL,
>  about text,
>  organization_id int NOT NULL
>    REFERENCES app_public.organizations ON DELETE CASCADE,
>  is_admin boolean NOT NULL DEFAULT false,
>  created_at timestamptz NOT NULL DEFAULT now(),
>  updated_at timestamptz NOT NULL DEFAULT now()
>);
>```
>Postgraphile va: 
>- Créer un type gql `User`, en UpperCamelCase et au singulier
>- Ajouter des champs à ce type pour chacune des colonnes de la table (*e.g. `id`, `username`, `about`, `organizationId`, `isAdmin`, `createdAt`, `updatedAt`*), en camelCase.
>- Ajouter un champ `nodeId` globalement unique si la table a une `PRIMARY KEY`.
>- Ajouter un champ pour les différentes relations (*e.g. `organizationByOrganizationId`*).
>- Ajouter pour les tables liées:
>  - Les relations inversées (*e.g. `Organization.usersByOrganizationId`*).
>- Ajouter au type `Query`:
>
>  - un champ (connection field) `allUsers` avec pagination, filtering, et ordering
>  - Un champ `userByKey(key: ...)` (*e.g. userById, userByUsername*), pour toutes les contraintes `unique` de la table
>  - Un champ `foo(nodeId: ID!)` pour récupérer un rang quelconque par son `nodeId`
>- Ajouter des mutations CRUD au type `Mutation` pour tous les champs uniques de la table (*e.g. `deleteUserByOrganization` ...*)

* Pour limiter ce comportement par défaut, on utilise l'option `ignoreRBAC`, qui n'expose que les champs autorisés pour l'ensemble des rôles.
* le nom des tables est au pluriel. Postgraphile (via le principe d'inflexion) va singulariser les noms
* on utilise le plugin [pg-simplify-inflector](https://github.com/graphile/pg-simplify-inflector)
* On ne répète pas abusivement les champs d'une table à l'autre. *e.g. si on a `user->child->post`, post ne doit pas avoir de champ `user_id`*
* On créé au maximum les contraintes au sein de la table (foreign key ref., unique, primary key...)
* **On utilise les *smart comments***
  * Déjà pour commenter notre travail et du même coup completer la documentation
  * Puis pour améliorer l'API, avec les *smart comments* `@omit`,`@sortable`,`@filterable` 
* On utilise si nécessaire le plugin [pluginConnectionFilter](https://github.com/graphile-contrib/postgraphile-plugin-connection-filter)
* On applique systématiquement la RLS sur toute les tables
* On applique immédiatement les permissions, ce qui nous mène au point suivant

## Sécurisation des données
La sécurisation des données est une règle essentielle à prendre en compte dès le début du développement, pas à la fin quand tout est fonctionnel.

* On applique la RLS **immédiatement** et sur **toutes les tables**
* On applique les permission **immédiatement**
  * Les permissions select pour une table entière (si on veut gérer plus finement cette permission, on crée deux tables liées par une relation one-to-one)
  * Les autres permissions par colonne idéalement

## Customs queries
Il est possible de définir des custom queries dans Postgres à l'aide de fonctions ou de `views`.
* Custom query par une fonction: bien penser à déclarer la fonction `stable` (ou `immutable` mais plus rare et pas nécessaire). Cet argument spécifie que la fonction ne modifie aucune donnée, et donc que ce n'est pas une mutation. Par défaut dans postgres, les fonctions sont `volatile`.
* On peut créer des fonctions ["computed columns"](https://www.graphile.org/postgraphile/computed-columns/) qui vont ajouter un nouveau champ à une mutation existante.
* On peut aussi utiliser une fonction qui renvoie un [`set of`](https://www.graphile.org/postgraphile/functions/#setof-functions---connections), c'est à dire un sous ensemble d'une table. L'avantage d'un tel type de table est qu'il renvoie une `connection`, donc avec pagination.
* Custom query par [`view`](https://www.graphile.org/postgraphile/views/): on peut créer une `view` dans Postgres, qui correspond à une table "virtuelle", créée par assemblage d'autre tables. L'avantage d'une `view` est que les type graphQL générés sont bien plus pratiques à utiliser, et nous pouvons aussi nous en servir pour la RLS.

## Custom mutations
Postgraphile génère pour nous des mutation CRUD, mais il n'est pas rare d'avoir besoin de fonctions plus spécifiques (authentification, reset de mdp...). Pour créer ces mutations custom, voir [la doc](https://www.graphile.org/postgraphile/custom-mutations/)

## Triggers
Certaines tâches doivent s'executer automatiquement après certaines actions sur la BdD (update du champ `created_at` par exemple). Pour ça, il suffit de créer des `trigger` dans Postgres.

Il est recommander de préfixer les triggers avec un nombre, *e.g. _200_do_a_thing / _800_do_something_else*

En effet, les triggers sont exécutés par ordre lexicographiques

## Real time
En graphQL, il est possible de créer des queries "temps réel" dans un troisième type en plus des types `Query` et `Mutation`: `Subscription`.
## Sécurité

## Extension de l'API

## Graphile worker

## Authentification

## Sessions

