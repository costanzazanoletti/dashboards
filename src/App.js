import { useState, useEffect, useCallback } from 'react';
import { getDashboardList } from './api';
import CardList from './compotents/CardList';

const App = () => {
  const [items, setItems] = useState([]);

  const updateList = useCallback(async () => {
    const data = await getDashboardList();
    setItems(data);
  }, []);

  useEffect(() => {
    updateList();
  }, [updateList]);

  return (
    <div className="container">
      <h1>Dashboards</h1>
      <hr />
      <CardList items={items} />
    </div>
  );
};

export default App;
