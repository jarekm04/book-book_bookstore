const Book = ({books}) => {
    return (
        <>
            {!books.length ? (
                <h2 className="home__error">Nie znaleziono książek.</h2>
            ) : (
                books.map((book) => (
                    <article className="home__book" key={book.id}>
                        <img src={book.cover_url} className="book__img" alt="bookPhoto"/>
                        <div className="book__textBox">
                            <h3 className="book__title">{book.title}</h3>
                            <p className="book__author">{book.author}</p>
                            <p className="book__pages">{book.pages} stron</p>
                            <p className="book__price">Cena: {book.price}</p>
                            <button className="book__add">Dodaj do koszyka</button>
                        </div>
                    </article>
                ))
            )}
        </>
    );
};

export default Book;