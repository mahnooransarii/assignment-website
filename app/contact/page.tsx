    import Navbar from '../components/Navbar';

export default function Contact() {
    return (
      <main className="contact-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Contact Us</h1>
        <p style={{ textAlign: 'justify', fontSize: '18px', color: '#555' }}>
          We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
        </p>
  
        <form
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required style={{ padding: '10px', borderRadius: '5px' }} />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required style={{ padding: '10px', borderRadius: '5px' }} />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required style={{ padding: '10px', borderRadius: '5px' }}></textarea>
  
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff' }}>
            Send Message
          </button>
        </form>
      </main>
    );
  }
  