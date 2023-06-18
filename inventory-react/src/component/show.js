import { useState, useEffect } from "react";
import http from "../http";
import { useParams } from "react-router-dom";

function Show(props) {
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        http.get('/products/show/'+id).then(res => {
            setProducts(res.data);
        })
    });

    return (
        <div>
            <h2>Data Product</h2>
            <p>
                Nama Barang : {products.nama_barang}
            </p>
            <br></br>
            <p>
                Deskripsi : {products.deskripsi}
            </p>
            <br></br>
            <p>
                Harga : {products.harga}
            </p>
            <br></br>
            <p>
                Stok : {products.stok}
            </p>
            <br></br>
        </div>
    )
}
export default Show;