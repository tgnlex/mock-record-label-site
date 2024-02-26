import React from 'react';
import Link from 'next/link';

const Brand = () => {
  return (
    <header id="brand-container">
        <Link href="/" id="brand-link" className="brand-link">
            <h1 id="brand" className="logo">S.S. Records</h1>
        </Link>
    </header>
  )
}

export default Brand;