import React from 'react';

export default function CategoryCard({ category }) {
  const handleAskRates = (e) => {
    e.preventDefault();
    const select = document.getElementById('category-select');
    if (select) {
      select.value = category.id;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="card-hover reveal" style={{...styles.card, transitionDelay: `${Math.random() * 0.3}s`}}>
      <div className="hover-zoom-wrapper" style={styles.visualWrapper}>
        {category.image ? (
          <img src={category.image} alt={category.name} style={styles.image} />
        ) : (
          <div className={`pattern-${category.pattern}`} style={styles.pattern}></div>
        )}
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{category.name}</h3>
        <p style={styles.desc}>{category.description}</p>
        <button onClick={handleAskRates} className="btn-text" style={styles.button}>
          Ask for rates →
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'var(--card)',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '1px solid var(--line)',
    display: 'flex',
    flexDirection: 'column',
  },
  visualWrapper: {
    height: '200px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  pattern: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: '22px',
    marginBottom: '8px',
    color: 'var(--teal)',
  },
  desc: {
    color: 'var(--mute)',
    marginBottom: '24px',
    flex: 1,
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 'auto',
  }
};
