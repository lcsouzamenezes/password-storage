const { Router } = require("express");
const router = Router();

const NotesController = require("../controllers/NotesController");

router.get("/decodednotes", NotesController.index);
router.get("/notes", NotesController.show);
router.post("/notes", NotesController.create);
router.put("/notes/:id", NotesController.update);
router.delete("/notes/:id", NotesController.remove);

module.exports = router;
