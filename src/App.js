import React from 'react';
import { useState } from 'react';
import CardList from './components/CardList';
import Filter from './components/Filter';

export const TypeContext = React.createContext();

const App = () => {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="container">
      <header className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-8">
          <div className="fs-2">Dashboards</div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <TypeContext.Provider value={{ selectedType, setSelectedType }}>
            <Filter />
          </TypeContext.Provider>
        </div>
        <hr />
      </header>
      <CardList selectedType={selectedType} />
    </div>
  );
};

export default App;
