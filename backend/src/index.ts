import { app } from "./app";
import { router } from "./routes";
/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number
  ===============================================================
*/
const PORT = process.env.PORT || 3000;

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

app.use("/", router);
