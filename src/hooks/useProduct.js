import { useEffect, useState } from "react";

const useProduct = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://tranquil-dawn-10499.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return [products, setProducts];
}
export default useProduct;