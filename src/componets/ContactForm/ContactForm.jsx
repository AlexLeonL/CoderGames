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
        <div className="f-user"><img src="https://lh3.googleusercontent.com/pw/ADCreHckrNePNUyuhAHy7a-ZCZKod5ZrdDGDptyR-BcW84pa3kwQDb7_qYZD22Pcr2roBEbAh5raWdfy4EScMvjLsMBp09Mq41HcEe_jZFkaoAxt17xaVpS-rGX8QVu4oVnPCyu6HlgT_8UNKlBej7qB2_WtOSzxNn2EsFd7QNw4m4kfjfsIYVhbBOr2-hHmadrJmtBqvYLNeNkdW6kcRmcgk8MOXTcIzQWLe7cGT17FkyZf337jbbajyHujfqnxA0YCtrUknBodjLJwMpyc6yciENbGTruGA10QdfzIBs0N12nVgiKZAIlrrxHEtenaCcu7NEfqGsnIYVIISzu_Fqj8PzNr7SOlDWA381hp-pdSMmvrk4C8qZ1DAmxH7RxkCBUcaHoa5VoFODRbnOsuebfM0U1fZkBPyjbNP6UoPukrvX9g9RzkxBo8wEK39PuEYLGawY_1SI2-aLCH15FAqPVz1VOhHZx_1V9T_ASuB0vySKkm0i4x6JvJl8cauhYSQmfP0UxM9JXCI7FSjMK7AlwYaSuWY2WdYUDgEiMox3Ahjx4KMTRdSDGkPZlWZ6lIM-0OITxl5A4g9XzqHMOgn98xQyCyme7a62zXU4nqI4PUVN_f2vFv3Jjwg0CB3PzgWmk7aFgWK42Oxig4ril9-d-12AO5fUndu0fc1-2RSVGhBl8M_6IxCn6C27hc1Z4YZydfgmmO2rCW8e9KZDkKpGnVCEYWUE_rx8MQh1IKe6fI9pe0yKqlTUypRxMiAi5i5bAFmJSF8-bLD9yZtPZCnAPxaXjAM_E0Rd1KbUsC6E1_T65Bsy5Q1Rz2yoBIefp3cBEdPt8mlGzeyzd5cJnbQ9EtJcUykFj5oKMoZuAddmwVl0Vs2AVKF16n-umx9dSDArBY4M9SYhA5r8TkV-SXuDFrOg=w300-h300-s-no-gm?authuser=0" className="f-img"/></div>
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