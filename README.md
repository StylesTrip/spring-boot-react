
To build carapp frontend:

```cd front-end```

```yarn start```

To build carapp backend:

```docker build -t reactboot .```

To run Mariadb:

```docker run --name cardb -e MYSQL_ROOT_PASSWORD=pwd -e MYSQL_DATABASE=cardb mariadb```

To run carapp:

```docker run -p 8080:8080 --name carapp --link cardb:mariadb -d reactboot```
