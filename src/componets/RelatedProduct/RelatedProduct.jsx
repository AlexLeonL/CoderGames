import { useEffect, useState } from "react";
import { getProducts } from "../../services/firebase/firestore/products";
import { Link } from "react-router-dom";

const RelatedProduct = ({ currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        const filteredProducts = products
          .filter((p) => p.id !== currentProductId)
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);
        setRelatedProducts(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentProductId]);

  if (relatedProducts.length === 0) {
    return null; 
  }

  return (
    <div className="rp-container">
        <div className="rp-container-s0">
        <div className="rp-title"><p>Productos relacionados</p></div>
        <div className="rp-container-s1">
        {relatedProducts.map((relatedProduct) => (
        <div key={relatedProduct.id} className="related-product">
            <article className="CardItem2">
            <header className="Header">
                <h2 className="ItemHeader"> 
                    {relatedProduct.name}
                </h2>
            </header>
            <picture>
                <img src={relatedProduct.img} alt={relatedProduct.name} className="ItemImg"/>
            </picture>
   
                <section className="InfoGeneral">
                <p className="Info">
                    Precio: ${relatedProduct.price}
                </p>
                <p className="Info">
                    Categoria: {relatedProduct.category}
                    </p>
            </section>
           
            

            <footer className="ItemFooter">
                <Link to={`/item/${relatedProduct.id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
        </div>
      ))}</div>
    </div></div>
  );
};

export default RelatedProduct;