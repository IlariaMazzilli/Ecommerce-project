import React from 'react'
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../index.css"
import { Footer } from '../components/Footer';


export function Homepage() {
    const [products, setProducts] = useState([]);

    async function fetchStore() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchStore();
    }, []);


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div className="group relative" key={product.id}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={product.image} alt="Front of men&#039;s Basic Tee in black." className="w-100 h-100 object-contain object-center" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                               {product.title}
                                            </a>
                                        </h3>
                                        <a className="mt-1 text-sm text-gray-500" href="#">{product.category}</a>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}