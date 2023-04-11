import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "./assets/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    

    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))
        
    }, []);

    return (
        <div className="card mb-3 container itemDetail 'text-white bg-secondary">
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;