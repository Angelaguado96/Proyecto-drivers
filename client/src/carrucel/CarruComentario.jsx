import './carrucel.css'
import React, { useState, useEffect } from 'react';

const CarruComentario = () => {
  const [comments, setComments] = useState([
    {
      text: "Este es el ANGEL comentario",
    },
    {
      text: "Este es el ANAAAAA comentario",
    },
    {
      text: "Este es el ABEL comentario",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [...prevComments.slice(1), prevComments[0]]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {comments.map((comment, index) => (
        <div
          key={index}
          className="carousel-item"
          style={{
            animation: `carousel-slide ${index * 0.5}s ease-in-out`,
            visibility: index === 0 ? "visible" : "hidden",
          }}
        >
          <h2>{comment.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default CarruComentario;
