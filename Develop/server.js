const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import Sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { // Set force to true if you want to recreate the tables
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
