import React, { useState, useEffect } from 'react';

function useState2(value) {
  return useState(value);
}

export function Child(props) {
  const [number, setNumber] = useState2(props.number);
  console.log(number);

  // useEffect(() => {
  //   setNumber(props.number);
  // }, [props.number]);

  return (
    <div>
      {number}
      <input
        type="text"
        onChange={event => {
          const value = event.target.value;
          console.log(value);
          setNumber(value);
        }}
        value={number}
      />
    </div>
  );
}
