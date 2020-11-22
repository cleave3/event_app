# event_app

An event publishing server

### Getting started

- Clone this repo by running the following command on your terminal

```sh
git clone https://github.com/cleave3/event_app.git

```

- cd into the working directory
- Run the command below on your terminal to start the server

```sh
./start-server.sh
```

### Testing the Endpoint

Run the following command to test the endpoints

```sh
$ ./start-server.sh
$ curl -X POST -d '{ "url": "http://localhost:8000/event"}' http://localhost:8000/subscribe/topic1
$ curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1
$ curl -X POST http://localhost:8000/event

```
