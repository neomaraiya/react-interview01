import React, { useState, useEffect } from 'react';

export function Child(props) {
  const [number, setNumber] = useState(props.number);

  useEffect(() => {
    setNumber(props.number);
  }, [props.number]);

  return <div>{number}</div>;
}
