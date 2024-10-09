   import Navbar from '../components/Navbar';

export default function About() {
    return (
      <main className="about-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>About Us</h1>
        <p style={{ textAlign: 'justify', fontSize: '18px', color: '#555' }}>
          Welcome to our website! We are a passionate team dedicated to delivering the best service to our customers.
          Our journey began with a simple idea, and over the years, we have grown into a reliable name in the industry.
        </p>
        <h2 style={{ color: '#444' }}>Our Mission</h2>
        <p style={{ textAlign: 'justify', fontSize: '18px', color: '#555' }}>
          Our mission is to provide high-quality products and services that exceed customer expectations.
          We believe in innovation, integrity, and commitment to excellence in everything we do.
        </p>
        <h2 style={{ color: '#444' }}>Our Values</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
          <li>Integrity</li>
          <li>Customer Focus</li>
          <li>Innovation</li>
          <li>Teamwork</li>
        </ul>
        <h2 style={{ color: '#444' }}>Get in Touch</h2>
        <p style={{ textAlign: 'justify', fontSize: '18px', color: '#555' }}>
          We love to hear from our customers! Feel free to reach out to us via our Contact page for any inquiries or feedback.
        </p>
      </main>
    );
  }
  