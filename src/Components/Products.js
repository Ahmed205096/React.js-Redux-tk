import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../APIS/getAllProducts";

export default function Products() {
    const state = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(getAllProducts());
        },[]
    );


    const productList = state.map(
        (product)=>{
            return (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.rating.rate}</p>
                </div>
            );
        }
    );

    return productList;
}
