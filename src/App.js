import { useState, useEffect, useCallback } from 'react';
import { getDashboardList } from './api';
import CardList from './components/CardList';
import Filter from './components/Filter';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const updateList = useCallback(async () => {
    const data = await getDashboardList();
    setItems(data);
  }, []);

  useEffect(() => {
    updateList();
  }, [updateList]);

  return (
    <div className="container">
      <header className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-8">
          <div className="fs-2">Dashboards</div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <Filter
            onChange={(selected) => {
              setSelectedType(selected);
            }}
          />
        </div>
        <hr />
      </header>
      <CardList items={items} selectedType={selectedType} />
    </div>
  );
};

export default App;
