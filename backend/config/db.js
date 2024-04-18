/* eslint-disable no-undef */
const mongoose = require("mongoose");

const configDb = () => {
  mongoose
    .connect('mongodb+srv://bridge:BUekr5xglBxsVSzL@cluster.srlehbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = configDb;
