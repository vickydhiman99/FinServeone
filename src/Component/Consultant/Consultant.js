import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../Data/ProductService';
import './consultant.css'

export default function Consultant() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1920px',
            numVisible: 6,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 4,
            numScroll: 1
        }
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 15)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="container">
                <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 card-box">
                    <div className="mb-3">
                        <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                    </div>
                    <div className="content">
                        <div className="icon">
                           <p>fb</p>
                           <p>insta</p>
                           <p>twi</p>
                           <p>link</p>
                        </div>
                        <h4>headeing</h4>
                        <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vero!</p>
                    </div>
                    {/*<div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">${product.price}</h6>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                     </div>*/}
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
