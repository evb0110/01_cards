import React from 'react';

export default function Card({ datum: { img, title }, children }) {
  return (
    <div className="card m-4" style={{ width: '18rem' }}>
      <img
        style={{ visibility: img ? 'visible' : 'hidden' }}
        src={img}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <a href="https://getbootstrap.com" className="btn btn-primary">
          Learn more about {title}
        </a>
      </div>
    </div>
  );
}
