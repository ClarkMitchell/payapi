import { useState } from 'react';
import Image from 'next/image';

interface Props {
  children: JSX.Element;
}

export default function MobileNav({ children }: Props) {
  const [open, setOpen] = useState(false);

  function openNav() {
    setOpen((open) => !open);
  }

  return (
    <>
      <button onClick={openNav} className="mobile-menu-button">
        <Image
          src="/images/icon-hamburger.svg"
          alt="Menu"
          height="18"
          width="24"
        />
      </button>
      <div className={`mobile-nav ${open ? 'open' : 'closed'}`}>{children}</div>
    </>
  );
}
