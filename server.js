const app = require('./app.js');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
