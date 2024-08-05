import express from "express";
import path from "path";
import posts from "./routes/post.js";
import logger from "./middleware/logger.js"

const port = process.env.PORT || 9000;
const app = express();

// Body parser Middleware POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger
app.use(logger);

// Set static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/posts', posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
