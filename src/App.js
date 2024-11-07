import { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Status from './Status.js';
import Priority from './Priority';
import Byuser from './Byuser.js';

function App() {
  // Set default values if localStorage is empty
  const [Grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [Order, setOrder] = useState(localStorage.getItem('order') || 'Priority');

  const setGroupingValue = (newValue) => {
    if (newValue === 'status' || newValue === 'priority' || newValue === 'user') {
      setGrouping(newValue);
      localStorage.setItem('grouping', newValue); // Update localStorage for persistence
    } else {
      console.error('Invalid grouping value provided:', newValue);
    }
  };

  const setOrderingValue = (newValue) => {
    if (newValue === 'Priority' || newValue === 'Title') {
      setOrder(newValue);
      localStorage.setItem('order', newValue); // Update localStorage for persistence
    } else {
      console.error('Invalid ordering value provided:', newValue);
    }
  };

  let content;
  if (Grouping === 'status') {
    content = <Status order={Order} />;
  } else if (Grouping === 'priority') {
    content = <Priority order={Order} />;
  } else {
    content = <Byuser order={Order} />;
  }

  return (
    <div className='fullBody'>
      <Navbar order={Order} grouping={Grouping} setGroupingValue={setGroupingValue} setOrderingValue={setOrderingValue} />
      {content}
    </div>
  );
}

export default App;