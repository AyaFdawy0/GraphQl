- Simple helloworld server
- Query and query parameters, nullable, basic types and types and interfaces and unions
- query variables  fragements
- metafields
```
query DroidById($id: ID!) {
  droid(id: $id) {
    name
  }
}

query interfaces
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

Mutation
While query fields are executed in parallel, mutation fields run in series, one after the other.

