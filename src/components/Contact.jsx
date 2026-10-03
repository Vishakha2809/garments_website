import React, { useState } from 'react';
import { business } from '../data/business';
import { categories } from '../data/categories';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    qty: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, category, qty, message } = formData;
    let text = `Hello Banke Bihari Garments, I would like to ask for wholesale rates.\n\n`;
    text += `*Firm/Shop Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    if (category) text += `*Category of interest:* ${category}\n`;
    if (qty) text += `*Approx. quantity:* ${qty} pieces\n`;
    if (message) text += `*Message:* ${message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${business.phoneClean}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" style={styles.section}>
      <div className="container contact-grid">
        <div className="reveal" style={styles.info}>
          <h2 style={styles.heading}>Ask for today's wholesale rates</h2>
          <p style={styles.text}>Get in touch to receive our latest catalog and wholesale pricing for your shop.</p>
          
          <div style={styles.details}>
            <div style={styles.detailItem}>
              <strong>Phone / WhatsApp</strong>
              <a href={`tel:${business.phoneClean}`} style={styles.link}>{business.phone}</a>
            </div>
            <div style={styles.detailItem}>
              <strong>Address</strong>
              <p>{business.address}</p>
            </div>
            <div style={styles.detailItem}>
              <strong>GSTIN</strong>
              <p>{business.gstin}</p>
            </div>
          </div>
        </div>
        
        <div className="reveal reveal-delay-2" style={styles.formCard}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="name">Shop or firm name *</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required 
                style={styles.input} 
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="phone">Phone *</label>
              <input 
                type="tel" 
                id="phone"
                name="phone" 
                required 
                style={styles.input} 
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            
            <div className="form-row">
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="category-select">Category</label>
                <select 
                  id="category-select" 
                  name="category" 
                  style={styles.input}
                  onChange={handleChange}
                  value={formData.category}
                >
                  <option value="">Select category...</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="qty">Approx. quantity (pieces)</label>
                <input 
                  type="text" 
                  id="qty"
                  name="qty" 
                  style={styles.input}
                  onChange={handleChange}
                  value={formData.qty}
                />
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="message">Message (optional)</label>
              <textarea 
                id="message"
                name="message" 
                rows="3" 
                style={styles.textarea}
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-gold" style={styles.submitBtn}>
              Send on WhatsApp
            </button>
            <p style={styles.helperText}>
              This opens WhatsApp with your enquiry filled in. Nothing is stored on this page.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--teal)',
    color: '#fff',
  },
  heading: {
    fontSize: '42px',
    color: '#fff',
    marginBottom: '16px',
  },
  text: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '48px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: '16px',
    color: 'rgba(255,255,255,0.9)',
  },
  link: {
    color: 'var(--gold)',
    fontWeight: '500',
    fontSize: '20px',
  },
  formCard: {
    backgroundColor: 'var(--card)',
    borderRadius: '8px',
    padding: '32px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--ink)',
  },
  input: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    padding: '12px 16px',
    borderRadius: '4px',
    border: '1px solid var(--line)',
    backgroundColor: 'var(--bg)',
    color: 'var(--ink)',
    width: '100%',
  },
  textarea: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    padding: '12px 16px',
    borderRadius: '4px',
    border: '1px solid var(--line)',
    backgroundColor: 'var(--bg)',
    color: 'var(--ink)',
    width: '100%',
    resize: 'vertical',
  },
  submitBtn: {
    width: '100%',
    marginTop: '8px',
  },
  helperText: {
    fontSize: '13px',
    color: 'var(--mute)',
    textAlign: 'center',
    marginTop: '8px',
  }
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 60px;
    }
    .form-row {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    @media (min-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
      .form-row {
        flex-direction: row;
      }
    }
  `;
  document.head.appendChild(style);
}
