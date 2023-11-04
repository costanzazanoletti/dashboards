import { useState } from 'react';
import CardList from './components/CardList';
import Filter from './components/Filter';

const App = () => {
  const [selectedType, setSelectedType] = useState('');
  const handleChange = (selected) => {
    setSelectedType(selected);
  };
  return (
    <div className="container">
      <header className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-8">
          <div className="fs-2">Dashboards</div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <Filter handleChange={handleChange} />
        </div>
        <hr />
      </header>
      <CardList selectedType={selectedType} />
    </div>
  );
};

export default App;
