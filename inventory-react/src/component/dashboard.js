import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";

function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = () => {
        http.get('/products').then(res => {
            setProducts(res.data);
        })
    }
    const deleteUser = (id) => {
        const confirmation = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (confirmation) {
            http.delete('/products/' + id).then(res => {
                fetchAllProducts();
            })
        }
    }

    return (
        <div>
            <h2>Data Product</h2>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Deskripsi Barang </th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{++index}</td>
                            <td>{product.nama_barang}</td>
                            <td>{product.deskripsi} </td>
                            <td>{product.harga}</td>
                            <td>{product.stok}</td>
                            <td>
                                {/* <Link to={{ pathname: "/show/" + product.id }}>Show</Link>&nbsp; */}
                                <Link to={{ pathname: "/edit/" + product.id }}>Edit</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={() => { deleteUser(product.id) }}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard;