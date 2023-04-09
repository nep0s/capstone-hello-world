# Warm-up


# Description

Two-side application usin Nest.js and Next.js to diplay a feed of news extracted from the latest at the Hacker News website.

# Environment variables

## Docker

The `docker-compose.yaml` file references and env file (provided by default as axample.env) with the following mongo database information:

/example.env
```yaml

MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=pass
DB_URL=mongodb://admin:pass@mongo:27017/

URL='mongodb://admin:pass@mongo:27017/'
```

## Backend
An .env file must be created in the backend directory with the connection url of the mongo database. For example:


/.env
```yaml
PORT = 5500
```

## Frontend

An .env file must be created in the frontend directory with the backend url:

/.env
```yaml
NEXT_PUBLIC_BACKEND_URL=<backend_link>
```
The name of the variable must start with 'NEXT_PUBLIC_'. If the variable is not defined, 'http://localhost:5500/' will be used instead.

# Deploy Developer version

```bash
$ sudo service docker start
```

```bash
$ docker compose build
```

```bash
$ docker compose up
```
```


