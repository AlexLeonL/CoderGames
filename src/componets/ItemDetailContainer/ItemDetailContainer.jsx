import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firestore/products";
import "./ItemDetailContainer.css";
import RelatedProduct from "../RelatedProduct/RelatedProduct";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div>
        <h1>Cargando Producto...</h1>
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <h1>El producto no existe</h1>;
  }

  return (
    <div className="main-content">
      <div className="container-fluid">
        <ItemDetail {...product} />
      </div>
      <div className="container-fluid">
        <RelatedProduct currentProductId={itemId} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
