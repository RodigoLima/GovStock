import Koa from "koa";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

dbConnect();

const app = new Koa();
app.use(routes.routes());

export default app;
