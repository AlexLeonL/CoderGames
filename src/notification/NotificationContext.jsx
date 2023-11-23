import { useState, createContext, useContext } from "react";

const Notification = ({ notificationData }) => {
    const notificationStyle = {
      position: 'fixed',
      top: 100,
      right: 95,
      backgroundColor: notificationData.type === 'success' ? 'green' : 'red',
      color: 'white',
      padding: '20px 30px 20px 30px',
      borderRadius: 10,
      zIndex: 9999,
      display: 'flex', // Para permitir la alineación vertical de la imagen y el texto
      alignItems: 'center', // Alineación vertical
    }
  
    return (
      <article style={notificationStyle}>
         {notificationData.image && <img src={notificationData.image} alt="Product" style={{ marginRight: '10px',width:'60px' }} />}
       <div>
        <h4>¡Ya agregamos tu producto al carrito!</h4>
        <p>{notificationData.text}</p>
      </div>
      </article>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        text: '',
        type: 'success'
    })

    const setNotification = (type, text,image = '') => {
        setNotificationData({
            text, type, image
        })

        setTimeout(() => {
            setNotificationData({
                text: '',
                type: 'success',
                image: '',
            })
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification notificationData={notificationData}/>}
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)