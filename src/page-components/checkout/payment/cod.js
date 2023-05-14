import React from 'react';
import { Button } from 'ui';
export default function CODCheckout({ onSuccess }) {
  const handleCheckout = () => {
    // Simulate a successful COD checkout
  };

  return <Button onClick={handleCheckout}>Submit</Button>;
}
