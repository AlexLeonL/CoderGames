import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(),'in',ids))
        
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
            })
    
            if(outOfStock.length === 0) {
                const ordersRef = collection(db, 'orders')
                const { id } = await addDoc(ordersRef, objOrder)
                batch.commit()
                clearCart()
                setOrderId(id)
                console.log(`El id de su orden es ${id}`)
            } else {
                console.log('No hay stock de algun producto')
            }
        } catch (error) {
            console.error('Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return(
            <div className="container-cart">
        <p>Se esta generando su orden...</p></div>
        ) 
    }

    if(orderId) {
        return (
            <div className="ff-container-form">
                <div className="ff-s1">
                <div className="ff-s0">
        <div className="f-user"><img src="https://lh3.googleusercontent.com/pw/ADCreHe089Qj_a_xbyTcSNVk8F70Eh27I2FBwzvN3ltyj8lXtikZYZOKxZ-Hg7d8xk9wv-j7iGXC2qtxeR6HEWt20fVDH-VICMDB8v6DkN0hMAhspsYxoKKxinWqnyZfsA0dB1rffJ-wJ5qN6ki5OZ9nNcGVyOKV3ENlZQ8MMLsJf5YvaGBaUKwKweFdJ0oC2akf32kmU3FWFLcpkfrl9CXioxZZb_aiRyOxHmADImCfVj3Ddf8ECcdTk1s8r0ak0Y5GDTGnoSCEL1ZUgNgdYWiomHBwpoKuRyovQGYEDFWc4gkpDs1nt9uXmaaC1JcvmvmmxsVXkHKKg8grkndvUdneMWKYDP8I-rRutklF-0EgCVGxfMdtithKcOhWPWXhjHbxMkT4Msfap-Jx2LCt9i8VnKOBnoL1DJ1G2q9lElsznYyzA4RHbDr-fBBO61IwKUh5TRDEOn3toRZu02WN0fcJujdhYUe-G5xESMIRsKjddR038QsB5zcwROd_sQWDYCCI6_OcJzIYNu7g4anTp3qhiRwRe48AYi5THDOsdIIAe1CJpR2MX-9Dd8tYMdk14PypT_CY3cSsRh1wMK7hJgQWHvY8kYI19EutM5m1QqdP3EE8jhe3Nn1kF6alOKSI_RdzUkXjG11I1POE1nZAF5WUF-tgei_klcTS5M3MPt7rJRE0HgfzecGRoFbJCm5X5eSCjOMISLW0IgtpBM4SZv5eyTzPKJ8RN3FHIPSLGiajmgw3svyK8lIvVhfyqZDHmfMJmjiWsoLPxwZoiueeUjPMvpwLJxSeZSdZtiAb38PKGmadCl_rxCCjYePUA8gUwsQOg-H0o95JnzT32joCMuhfD6fDTpP4Vaj0_PrwcHsE_-C33QxNMNMI8mCN9vyefFzfdtFZOJTCmk82RH3HyROlAg=w963-h963-s-no-gm?authuser=0" className="f-img"/><div className="ff-text"><p>El id de su orden es:</p>&nbsp;&nbsp;<p className="f-order">{orderId}</p></div></div>
        </div></div></div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="container-cart">
        <p>No hay productos en el carrito</p>
        <div className="cart-img">
        <img src="https://lh3.googleusercontent.com/pw/ADCreHfH_sJmXTlLwbstSjoedSy752KZBGf8SW9iu-zhs4B9zRjps8EnwP4FAy4GlVvWQWd6bX_cMzrCqf9p5qc6mV7Tx9kZ34HBA4txob1s5aEWKl6UJFcasUPqYakTd5JE638R6R4Nj8Rr7O5GcC8oqzRS362zhcwN_icacx9M_pOCYaV9gY4qESx81ZYWfVNxq0abeg8xrhMkehJ8Acrfp8dZ4gTwkTY_glsn-MZcVh71OWmtvWe3-VHI-sTE060VnEbwANoXgu3yTxv44zR8WR25Ei_Ghx_n0ZcKn8XN8zNJWbCReVKKfg3fdgZc4DhmxnwToFqOmGs3kIg-hyULAo-k2bacT75R6Xf5YF4-4bouDMBdC_HkwMyRil8SrBUtJMcCiQgjm7xx4H4dHjoPgv57Jw6rRN_cwP2lBE4ej3cRjikMs7rPimNCMyIHHE25_1VEXwwsTXK-5Fk6TxrXpalNVm4Be5U4uULE2x4Bo_D5mOtG7gTrsEyJcYNr__cXfQCzSoxYXslv8OKD27Ru7fppNlQMkCq7TFQuiPpWArbwGUhOPykvdE-LDli1YTU3TW6KwSo-4SFXnv0BDQs2oPBrv-PTjhLulaSmqQCkF-e5xhxSN94YmrrzcS1kWjbVXuxSgYwuVVCbuxl5cYk3ddhN5lbsSp5C2Kv4R1cJ7GqU6xsOfKTEDArhBqV1X5pbNUiYUNRzNt1OGEY8T7fBIpoSzF2JCvpqsCbC5qoIpsgxSKrdp03K27_7B9dvaF1W1AnVHeWK6m94AuBEFtOCSOu4dLyDZQ6LE6I4ZnEcg0ZtviZnbxiADJHaIVDmOA-aO0JKwqgkhXtxO4FapaGP59LJesfmz5G2u0BD8KXVd7Y1fhtSJuuCyotyEItbX8DF1uqBcTpiqE3GPoi7HArPmg=w96-h96-s-no-gm?authuser=0" />
        </div>
        <button className="buttonz">
      <Link to="/">← Añadir Productos</Link>
    </button>
      </div>
        );
    }

    return (
        <>
         <ContactForm onCreate={createOrder}/>
        </>
    )
}

export default Checkout