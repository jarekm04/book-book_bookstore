import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import FormInput from "./elements/FormInput";
import {resetCart} from "../../redux/actions/cartActions";

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        city: "",
        zip_code: "",
        order: []
    });

    const inputs = [
        {
            id: 1,
            name: "first_name",
            type: "text",
            placeholder: "Imię",
            errorMessage: "Imię powinno zawierać min. 4 litery",
            required: true,
            minLength: 4
        },
        {
            id: 2,
            name: "last_name",
            type: "text",
            placeholder: "Nazwisko",
            errorMessage: "Nazwisko powinno zawierać min. 5 liter",
            required: true,
            minLength: 5
        },
        {
            id: 3,
            name: "city",
            type: "text",
            placeholder: "Miasto",
            errorMessage: "Miasto powinno zawierać litery (min. 3)",
            required: true,
            pattern: "^[A-Za-z]{3,16}$"
        },
        {
            id: 4,
            name: "zip_code",
            type: "text",
            placeholder: "Kod pocztowy",
            errorMessage: "Kod pocztowy powinien zawierać 5 liczb rozdzielonych znakiem '-'",
            required: true,
            pattern: "[0-9]{2}[-][0-9]{3}"
        }
    ];

    const booksPrice = cartItems.reduce((price, item) => (item.price * item.quantity) + price, 0);

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const handleReset = () => {
        dispatch(resetCart());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        cartItems.map(item => {
            let obj = {};
            obj.id = item.id;
            obj.quantity = item.quantity;
            values.order.push(obj);
        });

        try {
            const response = await axios.post('http://localhost:3001/api/order', values);
            console.log(response.data);
            alert("Formularz wysłany!");
            handleReset();
            navigate("/");
        } catch (error) {
            console.log(error.response);
        }

    };

    return (
        <section className="orderForm">
            <div className="container">
                <h1 className="orderForm__title">Formularz</h1>
                <form onSubmit={handleSubmit} className="orderForm__form">
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            value={values[input.name]}
                            handleChange={handleChange}
                            {...input}
                        />
                    ))}
                    {booksPrice < 1 ? (
                        <>
                            <p>Nie wybrano żadnej z książek</p>
                            <Link to="/koszyk">Wróć do koszyka</Link>
                        </>
                    ) : (
                        <>
                            <p>Cena całkowita: {booksPrice}</p>
                            <div className="form__buttons">
                                <Link to="/koszyk">Wróć</Link>
                                <button type="submit">Wyślij</button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Form;