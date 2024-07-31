import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './FormularioCita.module.css';

const FormularioCita = ({ agregarCita }) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueno, setNombreDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombreMascota || !nombreDueno || !fecha || !hora || !sintomas) {
      Swal.fire({
        text: 'Todos los campos son obligatorios'
      });
      return;
    }

    const nuevaCita = {
      nombreMascota,
      nombreDueno,
      fecha,
      hora,
      sintomas
    };

    // Agregar la cita
    agregarCita(nuevaCita);

    // Limpiar los campos
    setNombreMascota('');
    setNombreDueno('');
    setFecha('');
    setHora('');
    setSintomas('');

   
  };

  return (
    <div>
      <h2>Crear mi cita</h2>
      <div className={styles.container}>
        <div className={styles.formularioCita}>
          <form onSubmit={handleSubmit}>
            <div className={styles.entrada}>
              <label>Nombre Mascota</label>
              <input
                type="text"
                value={nombreMascota}
                onChange={(e) => setNombreMascota(e.target.value)}
              />
            </div>
            <div className={styles.entrada}>
              <label>Nombre Dueño</label>
              <input
                type="text"
                value={nombreDueno}
                onChange={(e) => setNombreDueno(e.target.value)}
              />
            </div>
            <div className={styles.entrada}>
              <label>Fecha</label>
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className={styles.entrada}>
              <label>Hora</label>
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>
            <div className={styles.entrada}>
              <label>Síntomas</label>
              <textarea
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.submitButtonContainer}>
              <button className={styles.submitButton} type="submit">
                Agregar Cita
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCita;
