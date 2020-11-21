const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

/**
 * catch 404 and forward to error handler
 */
app.use((req, res, next) => {
  const err = new Error("Route Not Found");
  err.status = 404;
  next(err);
});

/**
 * global error handler
 */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.json({ status, message: err.message });
  next();
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
