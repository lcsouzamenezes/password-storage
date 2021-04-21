import express from "express";
import NotesController from "../controllers/NotesController";

const router = express.Router();
const notesController = new NotesController();

router.get("/decodednotes", notesController.index);
router.get("/notes", notesController.show);
router.post("/notes", notesController.create);
router.put("/notes/:id", notesController.update);
router.delete("/notes/:id", notesController.remove);

export default router;
