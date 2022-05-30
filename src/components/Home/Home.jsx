import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProducts as listProducts} from "../../redux/actions/productActions";
import Book from "./Book";

const Home = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <section className="home">
            <div className="container">
                {loading ? (
                    <h2>Wczytuję...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Book
                            key={product.id}
                            id={product.id}
                            cover_url={product.cover_url}
                            title={product.title}
                            author={product.author}
                            pages={product.pages}
                            price={product.price}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default Home;