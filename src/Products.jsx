import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((result) => result.json())
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }, []);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;

        console.log(title, price);

        const product = {
            title,
            price,
        };

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((result) => result.json())
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };
    return (
        <div>
            <h2>Products</h2>

            <form onSubmit={handleAddProduct}>
                <label htmlFor="">Title</label>
                <br />
                <input type="text" name="title" id="" />
                <br />

                <label htmlFor="">Price</label>
                <br />
                <input type="text" name="price" id="" />

                <br />

                <input type="submit" value="Add" />
            </form>
            <br />
        </div>
    );
}
