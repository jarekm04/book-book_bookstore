import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import FormInput from "./FormInput";

const OrderForm = () => {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    console.log(cartItems)

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        city: "",
        zipCode: "",
        booksQty: cartItems.length
    });

    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "Imię",
            errorMessage: "Imię powinno zawierać min. 3 litery"
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Nazwisko",
            errorMessage: "Nazwisko powinno zawierać min. 3 litery"
        },
        {
            id: 3,
            name: "city",
            type: "text",
            placeholder: "Miasto",
            errorMessage: "Miasto powinno zawierać min 3 litery"
        },
        {
            id: 4,
            name: "zipCode",
            type: "text",
            placeholder: "Kod pocztowy",
            errorMessage: "Kod pocztowy powinien zawierać 5 znaków rozdzielonych znakiem '-'"
        }
    ];

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="orderForm">
            <div className="container">
                <h1 className="orderForm__title">Formularz</h1>
                <form onSubmit={handleSubmit} className="orderForm__form">
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default OrderForm;