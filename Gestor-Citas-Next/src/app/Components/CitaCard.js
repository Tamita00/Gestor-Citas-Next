import React from 'react';
import Swal from 'sweetalert2'; // Ensure correct CSS module path
import styles from './CitaCard.module.css';

const CitaCard = ({ cita, eliminarCita }) => {
  const handleDelete = () => {
    
        eliminarCita(cita.id);
      
  };

  return (
    <div className={styles.citaCard}>
      <p>Mascota: <span>{cita.nombreMascota}</span></p>
      <p>Dueño: <span>{cita.nombreDueno}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default CitaCard;