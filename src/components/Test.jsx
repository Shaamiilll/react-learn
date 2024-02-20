import React from 'react';

export default function Test() {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}
