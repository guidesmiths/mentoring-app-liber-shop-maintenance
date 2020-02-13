const axios = require('axios');

const getIndex = async () => {
  const { data }=  await axios.get('http://localhost:3008/api/getIndex');
  return data;
};

export{
  // eslint-disable-next-line import/prefer-default-export
  getIndex
};