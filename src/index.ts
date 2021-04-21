import express, { Request, Response, NextFunction } from "express";
import router from "./routes";

const app = express();
const PORT = 4000;

// middlewares
app.use(express.json());

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

// routes
app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
