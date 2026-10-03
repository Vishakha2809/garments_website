import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from './CategoryCard';

export default function Range() {
  return (
    <section id="range">
      <div className="container">
        <div className="reveal" style={styles.header}>
          <h2 style={styles.title}>What we make for your shop</h2>
          <p style={styles.intro}>Explore our manufacturing range. We can supply standard catalog items or manufacture to your specific designs.</p>
        </div>
        
        <div className="range-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  header: {
    marginBottom: '48px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 48px auto'
  },
  title: {
    fontSize: '36px',
    color: 'var(--teal)',
  },
  intro: {
    color: 'var(--mute)',
    fontSize: '18px'
  }
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .range-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    @media (min-width: 768px) {
      .range-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
      .range-grid { grid-template-columns: repeat(3, 1fr); }
    }
  `;
  document.head.appendChild(style);
}
