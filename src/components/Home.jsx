import boook from "../assets/458.jpg";

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <article className="home__book">
                    <img src={boook} className="book__img" alt="bookPhoto"/>
                    <div className="book__textBox">
                        <h3 className="book__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                        <p className="book__author">M. Karpiński, M. Dobrowolska, M. Braun, J. Lech</p>
                        <p className="book__pages">500 stron</p>
                        <p className="book__price">Cena: 466zł</p>
                        <button className="book__add">Dodaj do koszyka</button>
                    </div>
                </article>
                <article className="home__book">
                    <img src={boook} className="book__img" alt="bookPhoto"/>
                    <div className="book__textBox">
                        <h3 className="book__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                        <p className="book__author">M. Karpiński, M. Dobrowolska, M. Braun, J. Lech</p>
                        <p className="book__pages">500 stron</p>
                        <p className="book__price">Cena: 466zł</p>
                        <button className="book__add">Dodaj do koszyka</button>
                    </div>
                </article>
                <article className="home__book">
                    <img src={boook} className="book__img" alt="bookPhoto"/>
                    <div className="book__textBox">
                        <h3 className="book__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                        <p className="book__author">M. Karpiński, M. Dobrowolska, M. Braun, J. Lech</p>
                        <p className="book__pages">500 stron</p>
                        <p className="book__price">Cena: 466zł</p>
                        <button className="book__add">Dodaj do koszyka</button>
                    </div>
                </article>
                <article className="home__book">
                    <img src={boook} className="book__img" alt="bookPhoto"/>
                    <div className="book__textBox">
                        <h3 className="book__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                        <p className="book__author">M. Karpiński, M. Dobrowolska, M. Braun, J. Lech</p>
                        <p className="book__pages">500 stron</p>
                        <p className="book__price">Cena: 466zł</p>
                        <button className="book__add">Dodaj do koszyka</button>
                    </div>
                </article>
                <article className="home__book">
                    <img src={boook} className="book__img" alt="bookPhoto"/>
                    <div className="book__textBox">
                        <h3 className="book__title">Matematyka 1. Podręcznik. Zakres podstawowy</h3>
                        <p className="book__author">M. Karpiński, M. Dobrowolska, M. Braun, J. Lech</p>
                        <p className="book__pages">500 stron</p>
                        <p className="book__price">Cena: 466zł</p>
                        <button className="book__add">Dodaj do koszyka</button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Home;