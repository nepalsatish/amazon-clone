const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HSLt9HETd8wNFxYSSaAlG1HBCpPgkJidOp20Qast38q4mZg6rG46bHZdTIzdZTh79LJ31kfz3fOVnN0uBqJkCrG004SottQNQ"
);

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received for the amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub-units of currency(cents)
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//firebase emulators:start
///http://localhost:5001/clone-7be05/us-central1/api
