import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
 
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);


app.listen(port, () => {
  console.log(`Server listening on port ${port} On ${process.env.NODE_ENV} mode`);
});