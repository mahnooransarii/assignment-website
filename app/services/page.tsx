   import Navbar from '../components/Navbar';

export default function Services() {
    return (
      <main className="services-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Our Services</h1>
        <p style={{ textAlign: 'justify', fontSize: '18px', color: '#555' }}>
          We offer a variety of services to cater to your needs. Here are some of the services we provide:
        </p>
  
        <ul style={{ listStyleType: 'none', padding: '0', maxWidth: '600px', margin: '0 auto' }}>
          <li style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3 style={{ margin: '0', color: '#0070f3' }}>Service 1</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>Description of Service 1.</p>
          </li>
          <li style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3 style={{ margin: '0', color: '#0070f3' }}>Service 2</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>Description of Service 2.</p>
          </li>
          <li style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3 style={{ margin: '0', color: '#0070f3' }}>Service 3</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>Description of Service 3.</p>
          </li>
        </ul>
      </main>
    );
  }
  