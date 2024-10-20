const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { serverConfig } = require("../config/config");
const { whitelist } = require("../config/whitelist");
require("../databaseConnection/databaseConnection");

const app = express();
const port = serverConfig.port || 4000;

const whitelist = ['http://localhost:5173','https://story-dots-frontend.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Acceso CORS no permitido'));
      }
    },
    credentials: true
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const userRoutes = require("../routes/users.routes");
const productRoutes = require("../routes/products.routes");
const brandRoutes = require("../routes/brands.routes");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/brands", brandRoutes);

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
