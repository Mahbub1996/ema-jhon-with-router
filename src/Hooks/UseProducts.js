import { useState, useEffect } from 'react';
const UseProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{

        fetch('/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    // return necessary things
    return [products]
}

// another file a use korba tai akhhn theke default kore dew 
export default UseProducts