import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getProducts as listProducts} from "../redux/actions/productActions";
import Book from "./Book";
import {BsFillArrowDownCircleFill} from "react-icons/bs";

const Home = () => {
    // const [books, setBooks] = useState([]);
    // const [page, setPage] = useState(1);
    // const [limit, setLimit] = useState(2);
    // const [arrow, setArrow] = useState(true);

    // const checkIfBottom = () => {
    //     if (page <= limit) {
    //         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
    //             setPage(prevState => prevState + 1);
    //         }
    //     }
    // }


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