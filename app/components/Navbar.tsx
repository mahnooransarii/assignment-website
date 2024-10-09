// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#0070f3' }}>
            <Link href="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ margin: '10px', color: 'white' }}>About</Link>
            <Link href="/services" style={{ margin: '10px', color: 'white' }}>Services</Link>
            <Link href="/contact" style={{ margin: '10px', color: 'white' }}>Contact</Link>
        </nav>
    );
}
