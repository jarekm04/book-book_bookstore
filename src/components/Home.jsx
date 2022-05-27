import {useState, useEffect, useRef} from "react";
import Book from "./Book";
import {BsFillArrowDownCircleFill} from "react-icons/bs";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const [arrow, setArrow] = useState(true);

    const checkIfBottom = () => {
        if (page !== limit) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
                setPage(prevState => prevState + 1);
            }
        }
    }

    useEffect(() => {
        fetch(`http://localhost:3001/api/books?page=${page}`)
            .then(response => response.json())
            .then(data => {
                let newBooks = data.data
                if (page === 1) {
                    setBooks(newBooks)
                } else {
                    setBooks(prevState => [...prevState, ...newBooks])
                }
            })
            .catch(err => console.log(err))

        window.addEventListener("scroll", checkIfBottom);

        return () => window.removeEventListener("scroll", checkIfBottom);

    }, [page])

    return (
        <section className="home">
            <div className="container">
                {books && <Book books={books}/>}
                {arrow && page !== limit ?
                    <BsFillArrowDownCircleFill
                        className="home__arrow"
                        onClick={() => setPage(prevState => prevState + 1)}
                    />
                    : null}
            </div>
        </section>
    );
};

export default Home;