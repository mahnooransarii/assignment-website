// For example, in app/page.tsx
import Navbar from './components/Navbar';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4' }}>
      <div style={{ textAlign: 'center', padding: '30px', maxWidth: '600px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Welcome to My Website</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
          Discover our services and learn more about us. Feel free to reach out through our contact page for any inquiries.
        </p>
        <nav>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/about" style={{ textDecoration: 'none', color: '#0070f3', fontSize: '1.1rem' }}>
                About Us
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/services" style={{ textDecoration: 'none', color: '#0070f3', fontSize: '1.1rem' }}>
                Our Services
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/contact" style={{ textDecoration: 'none', color: '#0070f3', fontSize: '1.1rem' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
