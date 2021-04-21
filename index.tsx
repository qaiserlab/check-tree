import React, { useState } from 'react';
import { render } from 'react-dom';

import CheckTree from './CheckTree'

function App() {
  const menus = [
    { 
      key: '/dashboard',
      title: 'Dashboard',
      childern: [
        { key: '/save', title: 'Save', hidden: true },
        { key: '/save-as', title: 'Save As', disabled: true },
        { key: '/exit', title: 'Exit' },
      ]
    },
    { key: '/settings', title: 'Settings', hidden: true },
    { 
      title: 'Account', 
      childern: [
        { title: 'Profile', key: '/profile' },
        { title: 'Logout', key: '/logout' },
      ]
    },
  ];
  const [data, setData] = useState(['/save-as', '/settings']);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <React.Fragment>
      {JSON.stringify(data)}
      <CheckTree dataSource={menus} value={data} onChange={handleChange} />
    </React.Fragment>
  );
}

render(<App />, document.getElementById('root'));
