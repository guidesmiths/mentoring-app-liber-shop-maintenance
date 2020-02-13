const axios = require('axios');

const getIndex = async (req, res) => {
  try {
    const { data } = await axios.get('http://localhost:4008/searchIndexes');
    //console.log('data-->', data);
    res.status(200).json(data);
  } catch (error) {
    console.log('get index api error', error.message);
  }
  
};

export default getIndex;