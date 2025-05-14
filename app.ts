import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";
import { errorHandler } from "./middleware/errorHandler";
import logger from "./middleware/logger";
import PORT from "./config/environment";

dotenv.config();
const app = express();
export default app; // for the testing with jest

console.log("Its working...");

app.use(express.json());
app.use(logger);
app.use("/books", bookRoutes);
app.use(errorHandler);

app.get("/", (request, response) => {
  response.send("Book Management Home");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
