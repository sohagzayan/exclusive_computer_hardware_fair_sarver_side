/** External Require */
const createError = require("http-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

/** Internal Require */
const userLoginRoute = require("./routes/user.login");
const userSigninRoute = require("./routes/user.signin");
const userRoute = require("./routes/user.route");
const toolsRoutes = require("./routes/tools.route");
const reviewsRoutes = require("./routes/tools.route");
const purchaseRoutes = require("./routes/purchase.route");
const paymetnRoutes = require("./routes/payment.route");
const adminRoutes = require("./routes/admin.route");
const {
  NotFindRouteHandaler,
  globalErrorHandaler,
} = require("./middlWare/ErrorHandaling.middlewere");
const port = process.env.PORT || 5000;

/* meddleWere */
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello word");
});

/* User Route */
app.use("/api/v1/user/login", userLoginRoute);
app.use("/api/v1/user/signin", userSigninRoute);
app.use("/api/v1/user/user", userRoute);
/** Tools Route */
app.use("/api/v1/tools", toolsRoutes);
/** Reviews Routes */
app.use("/api/v1/review", reviewsRoutes);
/** Purchase Routes */
app.use("/api/v1/purchase", purchaseRoutes);
/** Payment Routes */
app.use("/api/v1/payment", paymetnRoutes);
/** admin  Routes */
app.use("/api/v1/admin", adminRoutes);

/** Not Find Routing */
app.use(NotFindRouteHandaler);
/** Global Error Handler */
app.use(globalErrorHandaler);

module.exports = app;
