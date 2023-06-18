import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";


// let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
export default function Edit(props){
    const nav = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = () =>{
        http.get('/products/'+id+'/edit').then((res)=>{
            setInputs({
                nama_barang : res.data.nama_barang,
                deskripsi : res.data.deskripsi,
                harga : res.data.harga,
                stok : res.data.stok,
            })
        })
    }
    const handleChange = (e) => {
        const name= e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = () => {
        http.put('/products/'+id, inputs).then((res) => {
            nav('/')
        })
    }
    
    return(
        <div>
            <h2>Edit Products</h2>
            <label>Nama Barang</label>
            <input 
                type="text" 
                name="nama_barang"
                value={inputs.nama_barang || ''}
                onChange={handleChange}
            />
            <label>Deskripsi Barang</label>
            <input 
                type="text" 
                name="deskripsi"
                value={inputs.deskripsi || ''}
                onChange={handleChange}
            />
            <label>Harga</label>
            <input 
                type="text" 
                name="harga"
                value={inputs.harga || ''}
                onChange={handleChange}
            />
            <label>Stok</label>
            {/* <input type="hidden" name="_token" value={token}></input> */}
            <input 
                type="text" 
                name="stok"
                value={inputs.stok || ''}
                onChange={handleChange}
            />
            <button onClick={submitForm}>Simpan</button>
        </div>
    )
}