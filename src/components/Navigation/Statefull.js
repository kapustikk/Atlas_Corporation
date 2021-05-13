import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';

export default function Statefull() {
  const [isOpen, setOpen] = useState(false);

  const handleIcon = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Navigation />
      {!isOpen && <BurgerMenu />}
    </>
  );
}
