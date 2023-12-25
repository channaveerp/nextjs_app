'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== '/about/aboutstudent' ? (
        <h1>common for about pages</h1>
      ) : (
        <>{children} </>
      )}

      <Link href='/about/aboutstudent'>got ot aboutstudent</Link>
    </div>
  );
};

export default layout;
