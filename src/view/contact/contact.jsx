// src/view/contact/contact.jsx
import { useState, useContext } from "react";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FaLinkedin, FaWhatsapp, FaBehance } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import "./contact.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaConfi";
import { AuthContext } from "../../App";  // Importa AuthContext correctamente
import Loader from "../../componets/loader/loader"; // Importa el Loader

const Contact = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Estado de carga

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("No estás autenticado");
      return;
    }
    setLoading(true); // Inicia la carga
    try {
      await addDoc(collection(db, "cliente-form"), {
        name,
        phone,
        mail,
        text,
      });
      alert("Formulario enviado con éxito");

      setName("");
      setPhone("");
      setMail("");
      setText("");
    } catch (error) {
      console.error("Error enviando el formulario: ", error);
      alert("Hubo un error enviando el formulario");
    } finally {
      setLoading(false); // Detiene la carga
    }
  };

  if (loading) {
    return <Loader />; // Muestra el loader durante el envío del formulario
  }

  return (
    <section className="contact">
      <div className="contact_content">
        <h1 className="contact_title">Contáctame</h1>
        <div className="contact_text">
          <p>Puedes hacerlo por LinkedIn o por WhatsApp</p>
          <div className="socialmedia">
            <button className="button_linkedin">
              <a className="link" href="https://www.linkedin.com/in/ingridmoralesmu%C3%B1oz/" target="_blank">
                <FaLinkedin /> LinkedIn
              </a>
            </button>
            <button className="button_whatsapp">
              <a className="link" href="https://wa.me/56926120711?text=Hola" target="_blank">
                <FaWhatsapp /> WhatsApp
              </a>
            </button>
          </div>
        </div>
        <hr />
        <div className="contact_text">
          <p>También puedes visitar mi GitHub y Behance</p>
          <div className="socialmedia">
            <button className="button_github">
              <a className="link" href="https://github.com/ingrid-mo" target="_blank">
                <IoLogoGithub /> GitHub
              </a>
            </button>
            <button className="button_behance">
              <a className="link" href="https://www.behance.net/ingridmorales4" target="_blank">
                <FaBehance /> Behance
              </a>
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handlesubmit}>
        <p>
          O puedes rellenar este formulario de contacto y me comunicaré contigo
          a la brevedad
        </p>

        <FormControl sx={{ width: "30ch" }}>
          <TextField
            id="name"
            label="Nombre"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "30ch" }}>
          <TextField
            id="phone"
            label="Teléfono"
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "30ch" }}>
          <TextField
            id="mail"
            label="Email"
            variant="standard"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "30ch" }}>
          <TextField
            id="text"
            label="Escribe un mensaje"
            multiline
            rows={4}
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
