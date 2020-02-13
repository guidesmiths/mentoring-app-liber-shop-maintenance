import React from 'react';
import { Layout, Button } from '../../common';
import './createIndexPage.scss';

const Header = () => (
  <>
    <div>Name</div>
    <div>Document count</div>
    <div>Schema</div>
  </>
);

const renderRow = ({ name = '', count = 0 }) => {

  return (
    <>
      <div className="indexName">{name}</div>
      <div>{count}</div>
      <div><Button text="view" className="viewButton" /></div>
    </>
  );
};

const CreateIndexPage = (props) => {
  console.log('props---', props);
  const { currentIndex } = props;

  return (
    <Layout step={2}>
      <div className="createIndexPage">
        <div className="table">
          <div className="row header">
            <Header />
          </div>
          {currentIndex.map(index => (
            <div className="row" key={index.name}>
              {renderRow(index)}
            </div>
          ))}
          
        </div>
       
      </div>
    </Layout>
  );
};

export default CreateIndexPage;