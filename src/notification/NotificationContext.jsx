import { useState, createContext, useContext } from "react";

import "./NotificationContext.css"; 

const Notification = ({ notificationData }) => {
  const notificationClasses = `notification-container ${
    notificationData.type === "success" ? "notification-success" : "notification-error"
  }`;

  return (
    <article className={notificationClasses}>
      {notificationData.image && (
        <img src={notificationData.image} alt="Product" className="notification-image"/>
      )}
      <div className="notification-content">
        <p className="notifi-s1">¡Ya agregamos tu producto al carrito!</p>
        <p className="notifi-s2">{notificationData.text}</p>
      </div>
    </article>
  );
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationData, setNotificationData] = useState({
    text: "",
    type: "success",
  });

  const setNotification = (type, text, image = "") => {
    setNotificationData({
      text,
      type,
      image,
    });

    setTimeout(() => {
      setNotificationData({
        text: "",
        type: "success",
        image: "",
      });
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {notificationData.text && (
        <Notification notificationData={notificationData} />
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
