require("dotenv").config({path: "../.env"});

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection successful");

    await initDB();
    await mongoose.connection.close();
  } catch (err) {
    console.log("Error", err);
  }
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a143df19c461d4a92358df5",
  }));
  await Listing.insertMany(initData.data);

  console.log("Data was initialized");
};

main();
