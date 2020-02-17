const axios = require('axios');

const getIndex = async () => {
  const { data }=  await axios.get('http://localhost:3008/api/getIndex');
  return data;
};

const clearDB = async (env) =>  axios.post(`http://localhost:3008/api/clearDB?env=${env}`);


export{
  getIndex,
  clearDB
};