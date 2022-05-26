import boook from "../assets/458.jpg";

const Home = () => {
    return (
        <section className="home">
            <article className="home__book">
                <img src={boook} className="book__img" alt="bookPhoto"/>
                <h3 className="book__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                <p className="book__author">M. Karpiński, M. Dobrowolska, M. Braun, J. Lech</p>
                <p className="book__pages">500 stron</p>
                <p className="book__price">466zł</p>
                <button className="book__add">Dodaj do koszyka</button>
            </article>
        </section>
    );
};

export default Home;