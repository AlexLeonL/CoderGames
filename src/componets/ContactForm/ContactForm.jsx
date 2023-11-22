import { useState } from "react";

const ContactForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, email, phone });
  };

  return (
    <>
    <div className="container-form">
      <div className="f-s0">
      <div className="f-title"><p>Formulario de Contacto</p></div>
      <div className="f-s1">
        <div className="f-user"><img src="https://alexleon.pw/img/codergames-logo.png" className="f-img"/></div>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="label-text">Nombre:</p>
          <input type="text"value={name} onChange={(e) => setName(e.target.value)} className="label-s1"/>
        </label>
        <label>
        <p className="label-text">Email:</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="label-s1"/>
        </label>
        <label>
        <p className="label-text">Teléfono:</p>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="label-s1" />
        </label>

        <button className="buttonz">Generar Orden</button>
      </form>
    </div>
    </div></div>
    </>
  );
};

export default ContactForm;