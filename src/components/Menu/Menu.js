import React from 'react';

function Menu() {
  const items = [
    { name: "Classic Burger", price: "$5.99" },
    { name: "Cheese Burger", price: "$6.99" },
    { name: "Bacon Burger", price: "$7.99" }
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
