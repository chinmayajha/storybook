import React from 'react';
import './row.css';

const Row = () => (
  <div className="row" tabIndex={0}>
    Sort by name <span className="icon">ICON</span>
  </div>
);

export default { title: 'Row', component: Row };
export const Default = {};
