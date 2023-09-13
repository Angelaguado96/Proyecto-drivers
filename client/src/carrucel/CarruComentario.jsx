import './carrucel.css'
import React, { useState, useEffect } from 'react';

const CarruComentario = () => {
   //  aqui tenemos  la  info de  los  comentarios
  const [comments, setComments] = useState([
    {
      image:'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/zhou.jpg.img.1024.medium.jpg/1677069909295.jpg',
      name:'Zhou Guanyu',
      correo:'Zhou Guanyu@gmail.com',
       text: "Estoy muy contento con el resultado de hoy. Hemos tenido una buena carrera y hemos podido mantener a raya a los Mercedes.",

    },
    {
      image:' https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1024.medium.jpg/1676983075734.jpg',
      name:'Oscar Piastri',
      correo:'Oscar Piastri@gmail.com',
       text: "Estoy decepcionado con el resultado de hoy hemo problema con el coche en la segunda vuelta, y eso nos ha impedido luchar por la victoria.",
    },
    {
      image:'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1024.medium.jpg/1677069189406.jpg',
      name:'Alexander Albon',
      correo:'AlexanderAlbon@gmail',
       text: "He hecho todo lo posible hoy, pero no ha sido suficiente. El Red Bull de Max era muy rápido, y no hemos podido seguirle el ritmo. .",
    },
  ]);



  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [...prevComments.slice(1), prevComments[0]]);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {comments.map((comment, index) => (
        <div className='comentari'
          key={index}
          style={{
            animation: `carousel-slide ${index * 0.5}s ease-in-out`,
            visibility: index === 0 ? "visible" : "hidden",
          }}
        >
          <div className='con'>

         
          <img className='iamgeDriver' src={comment.image} alt='imagenestas aui'/>
          <div className='correo'>
          <h2>{comment.name}</h2>
          <h2>{comment.correo}</h2>
          </div>
          <div className='tex'>
          <h2>{comment.text}</h2>

          </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CarruComentario;
3