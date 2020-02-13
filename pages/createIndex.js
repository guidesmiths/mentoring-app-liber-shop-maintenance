import React from 'react';
import { CreateIndexPage } from '../components/pageComponents';
import { getIndex } from '../api';

const CreateIndex = (props) => <CreateIndexPage {...props} />;

CreateIndex.getInitialProps = async () => {

  const currentIndex = await getIndex();
  
  return {
    currentIndex
  };
};

export default CreateIndex;