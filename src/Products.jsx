import React, { useEffect } from 'react';

export default function Products() {
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((result) => result.json())
            .then((response) => console.log(response));
    }, []);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;

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
            .then((response) => console.log(response));
    };
    return (
        <div>
            <h1>Products</h1>

            <form onSubmit={handleAddProduct}>
                <label htmlFor="">Title</label>
                <br />
                <input type="text" name="title" id="" />

                <br />

                <label htmlFor="">Price</label>
                <br />
                <input type="text" name="price" id="" />

                <br />

                <input
                    className="border border-purple-600 rounded px-4 py-1"
                    type="submit"
                    value="Add"
                />
            </form>
        </div>
    );
}
