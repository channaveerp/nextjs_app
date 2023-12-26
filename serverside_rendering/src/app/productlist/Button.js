'use client';
import React from 'react';

export const Button = ({ price }) => {
  return (
    <div>
      <button onClick={() => alert(price)}>check price</button>
    </div>
  );
};
