# password-storage

A password storage application developed with node.js.

## Technologies

In this application the technologies below was used:

- Node.js
- Express
- SQLite

## Setup

Firstly you can clone by using the command below:

```bash
git clone https://github.com/BrunoUemura/password-storage.git
```

Or download the zip file directly from [Github](https://github.com/BrunoUemura/password-storage.git) and unzip it.

## To run the project

- To install the dependencies `npm install`
- To create the database `npm run knex:migrate`
- To run the project, make sure to start the Android or iPhone emulator `npm start`

## How it works

It is important to run the command `npm run knex:migrate` to create the database before running the app.
Then you can send requests to the following routes:

- `GET`: [http://localhost:4000/notes](http://localhost:4000/notes)
- `GET`: [http://localhost:4000/decodednotes](http://localhost:4000/decodednotes)
- `POST`: [http://localhost:4000/notes](http://localhost:4000/notes)
- `PUT`: [http://localhost:4000/notes/:id](http://localhost:4000/notes/:id)
- `DELETE`: [http://localhost:4000/notes/:id](http://localhost:4000/notes/:id)

### Example of GET Request

Route: `http://localhost:4000/notes`

```json
[
  {
    "id": 1,
    "note": "Rmlyc3Qgbm90ZQ==",
    "created_at": "2021-04-18 19:02:45",
    "updated_at": "2021-04-18 19:02:45"
  },
  {
    "id": 2,
    "note": "U2Vjb25kIG5vdGU=",
    "created_at": "2021-04-18 19:07:29",
    "updated_at": "2021-04-18 19:07:29"
  }
]
```

Route: `http://localhost:4000/decodednotes`

```json
{
  "notes": [
    {
      "note": "First note"
    },
    {
      "note": "Second note"
    }
  ]
}
```

### Example of POST Request

Route: `http://localhost:4000/notes`

```json
{
  "note": "Third note"
}
```

### Example of PUT Request

Route: `http://localhost:4000/notes/2`

```json
{
  "note": "Second note updated"
}
```

## Authors

- Bruno Hideki Uemura [linkedin](https://www.linkedin.com/in/bruno-hideki-uemura-918589139/), [Github](https://github.com/BrunoUemura)
