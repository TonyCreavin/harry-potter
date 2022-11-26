import React from 'react';

export default function Wizards({ wizard }) {
  return (
    <div>
      <h1 className="wizard">{wizard.name}</h1>
      <p>{wizard.house}</p>
    </div>
  );
}
