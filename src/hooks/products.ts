import { useEffect, useState} from "react"
import axios from "axios"
import { AxiosError } from "axios"
import { IProduct } from "../models"

function useProducts() {

  const [products, setProducts] = useState<IProduct[]>([])
  // const [productToShow, setProductToShow] = useState(8)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct( product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products")
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading, addProduct}
} 

export default useProducts;