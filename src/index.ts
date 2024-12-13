import express from "express";
require("dotenv").config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

console.log(process.env.TOKEN);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/addtocart", async (req, res) => {
  console.log(req.body);
  const { productId, city, region, postal, country } = req.body;

  if (!productId || !city || !region || !postal || !country) {
    res.status(400).send("Missing required fields");
  }

  try {
    const submitData = await prisma.addTOCART.create({
      data: {
        productId,
        city,
        region,
        postal,
        country,
      },
    });

    res.send(submitData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
