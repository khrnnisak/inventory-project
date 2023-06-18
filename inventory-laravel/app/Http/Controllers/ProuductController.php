<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProuductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Product::get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_barang' => 'required',
            'deskripsi' => 'nullable',
            'harga' => 'required',
            'stok' => 'required'
        ]);

        Product::create($request->all());
        return response()->json('succesfully added');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return response()->json(Product::whereId($id));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return response()->json(Product::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $products = Product::whereId($id)->first();

        $products->update([
            'nama_barang'=>$request->nama_barang,
            'deskripsi'=>$request->deskripsi,
            'harga'=>$request->harga,
            'stok'=>$request->stok,
        ]);
        return response()->json('successfully updated');
    }
    public function destroy(string $id)
    {
        Product::whereId($id)->first()->delete();

        return response()->json('success');
    }

    public function search($key){
        return Product::where('nama_barang', 'like', '%'.$key.'%')->get();
    }

}
