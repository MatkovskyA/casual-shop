import React, { useState, FormEvent, KeyboardEvent } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import Error from './Error';

  const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
      rating: {
        "rate": 4.1,
        "count": 259
      }
  }

  interface CreateProductProps {
    onCreate: (product: IProduct) => void
  }

  function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
  
    const submitHandler = async (event: React.FormEvent) => {
      event.preventDefault();
      setError('')

      if(value.trim().length === 0) {
        setError("Пожалуйста, введите корректное название")
        return
      }

      productData.title = value
      const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)

      onCreate(response.data)
    }
  
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text"
        className="border py-2 px-4 mb-2 mr-5 outline-0 w-full"
        placeholder="Введи название ... " 
        value={value}
        onChange={changeHandler}
      />

      {error && <Error error={error}/>}
      <button 
        type="submit" 
        className="py-2 px-4 border rounded bg-yellow-400 hover:text-white">Создать</button>
    </form>
  )
}

export default CreateProduct;