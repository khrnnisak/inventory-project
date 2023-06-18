import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";


// let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
export default function Create(){
    const nav = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name= e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = () => {
        http.post('/products', inputs).then((res) => {
            nav('/')
        })
    }
    
    return(
        <div>
            <h2>Add Products</h2>
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