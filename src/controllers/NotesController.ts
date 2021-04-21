import { Request, Response, NextFunction } from "express";
import { encode, decode } from "js-base64";
import knex from "../database/connections";

class NotesController {
  index = async (req: Request, res: Response, next: NextFunction) => {
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

  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await knex("note");
      return res.send(results);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
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

  update = async (req: Request, res: Response, next: NextFunction) => {
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

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await knex("note").where({ id }).del();
      return res.send({ status: "ok", message: `Deleted note ${id}` });
    } catch (error) {
      next(error);
    }
  };
}

export default NotesController;
