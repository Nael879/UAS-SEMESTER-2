import express from "express";
import vendorARoute from "./src/routes/vendor_a/route.vendor_a.js";

const app = express();

app.use(express.json());
app.use("/vendor_a", vendorARoute);

app.listen(3471, () => {
  console.log("app jalan coek");
});
