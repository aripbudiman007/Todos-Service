require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = 3000 || process.env.PORT;
const app = express();
const routes = require('./routes');

const errorHandler = require('./middleware/errorHandler')

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})