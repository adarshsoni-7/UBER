const http = require("http");
const app = require("./app");
const DB = require("./DB/db");

const server = http.createServer(app);
const port = process.env.PORT || 3000;

// Connect to database before starting the server
DB().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error("Failed to connect to database:", err);
  process.exit(1);
});
