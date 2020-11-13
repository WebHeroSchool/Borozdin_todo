import React from 'react';

const ItemList = () => (<ul>
  <li>1</li>
  <li>2</li>
</ul>);

const App = () => (<div>
    <h1>Привет друг!</h1>
    <p>Список дел:</p>
    <ItemList />
  </div>);

  export {App};
