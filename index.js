const express = require("express");
const postRouter = require("./posts/postRouter");
const commentRouter = require("./comments/commentsRouter");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
      <h2>It's Working! It's working!</h>
      
    `);
});

server.use("/api/posts", postRouter);
server.use("/api/posts", commentRouter);

server.listen(8000, () =>
  console.log("\n ===== API running on port 8000 ===== \n")
);
