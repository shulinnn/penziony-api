const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const nodemailer = require("nodemailer");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.static("public"));
// enabling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shulin.git@gmail.com",
    pass: "stnbkezxmqohpfmn",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server validation done and ready for messages.");
  }
});

app.get("/landing/:id", async (request, response) => {
  const { id } = request.params;

  const pension = await prisma.pension.findUnique({
    where: {
      id: Number(id),
    },
  });

  response.json(pension);
});

app.get("/about-us", async (request, response) => {
  const data = [];

  data.push(await prisma.pension.findUnique({ where: { id: 1 } }));
});

app.post("/contact", async (request, response) => {
  console.log(request.body);

  const email = {
    from: request.body.mail,
    to: "info@penzionyluhacovice.cz",
    subject: request.body.name + " - " + request.body.phone,
    text: request.body.message,
  };

  transporter.sendMail(email, function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Nodemailer Email sent: " + success.response);
    }
  });
});

app.get("/pensions", async (request, response) => {
  const pensions = await prisma.pension.findMany();

  response.json(pensions);
});

app.get("/reviews", async (request, response) => {
  const { id } = request.params;

  const reviews = await prisma.review.findMany();

  response.json(reviews);
});

app.get("/about-us/:id", async (request, response) => {
  const { id } = request.params;

  const result = [];
  const c = await prisma.pension.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      pension_description: true,
    },
  });

  const x = await prisma.photo.findMany();

  const superResult = {
    data: c,
    photos: x,
  };

  result.push(c);
  result.push(x);

  response.json(superResult);
});

app.get("/gallery", async (request, response) => {
  const x = await prisma.photo.findMany();
  response.json(x);
});

app.get("/roomData/:id", async (request, response) => {
  const { id } = request.params;

  const rooms = await prisma.room.findMany({
    where: {
      pension_id: Number(id),
    },
    select: {
      room_number: true,
      Room_type: true,
    },
  });

  response.json(rooms);
});

app.get("/landing/:id/rooms", async (request, response) => {
  const { id } = request.params;

  const rooms = await prisma.room.findMany({
    where: {
      pension_id: Number(id),
    },
    include: {
      Photo: true,
      Tag: true,
      Price: {
        orderBy: {
          price: "asc",
        },
      },
    },
  });

  response.json(rooms);
});

app.get("/rooms/:id", async (request, response) => {
  const { id } = request.params;

  const rooms = await prisma.room.findMany({
    where: {
      pension_id: Number(id),
    },
    include: {
      Photo: true,
      Tag: true,
      Price: true,
    },
  });

  response.json(rooms);
});

const server = app.listen(4000);

/* stnbkezxmqohpfmn */
