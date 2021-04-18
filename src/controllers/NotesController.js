const knex = require("../database");
const { encode, decode } = require("js-base64");

const index = async (req, res, next) => {
  try {
    const results = await knex.select("note").from("note");
    let index = 0;
    const datas = results.map(() => {
      const decodedData = decode(results[index].note);
      index += 1;
      return { note: decodedData };
    });

    return res.send({ notes: datas });
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const results = await knex("note");
    return res.send(results);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { note } = req.body;
    const encodedData = encode(note);

    await knex("note").insert({
      note: encodedData,
    });
    return res.status(201).send({ status: "OK", encodedData });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { note } = req.body;
  const { id } = req.params;

  const encodedData = encode(note);

  await knex("note")
    .update({
      note: encodedData,
    })
    .where({ id });
  return res.send({ status: "OK", id, encodedData });
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await knex("note").where({ id }).del();
    return res.send({ status: "ok", message: `Deleted note ${id}` });
  } catch (error) {
    next(error);
  }
};

module.exports = { index, show, create, update, remove };
