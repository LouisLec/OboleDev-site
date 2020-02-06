# Mise en place d'une API GraphQL avec Postgraphile

## Présentation de Postgraphile
Postgraphile est une utilitaire nodeJS qui vient créer une API GraphQL dynamique sur une base de donnée PostgreSQL. Postgraphile vient générer les différents types GraphQL par introspection sur la base de donnée (toutes les mutations et queries), puis vient compiler les requêtes GraphQL reçues en requêtes SQL directement interprétées par PostgreSQL.

Un exemple concret [ici](https://medium.com/@dorian599/postgraphile-graphql-apis-postgresql-7e7f29fc3941)

Concrètement, 
