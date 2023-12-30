const { connectDb } = require("./db/db.js");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error while connecting to MongoDB:", error);
  });
