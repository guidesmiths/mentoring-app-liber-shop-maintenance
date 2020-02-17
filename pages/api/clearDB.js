const axios = require('axios');

const clearDB = async (req, res) => {
  const { env } = req.query;
  await axios.post(`http://localhost:4008/cleanDeltaTables/${env}`);
  res.status(200).json(env);
};

export default clearDB;