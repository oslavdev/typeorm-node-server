# Typeorm Server


### Run

Copy .env.example to .env and change evnironment variables to your liking

```sh
docker-compose up

or

yarn

yarn dev

```

Server will run on http://localhost:7100
GraphQl playground http://localhost:7100/graphql

**DEFAULT CLIENT HOST:** http://localhost:8080/

### Environments

See: .env.example

### Testing

```sh
	$ yarn test

```

**For coverage**

```sh
	$ yarn test:coverage

```

**Update snapshots**

```sh
	$ yarn test:update
```
