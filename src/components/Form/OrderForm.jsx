import {useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import FormInput from "./FormInput";

const OrderForm = () => {
    const [isFormEmpty, setIsFormEmpty] = useState(true);
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dataToSend = cartItems;
    const booksPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        city: "",
        zip_code: "",
        order: [
            {id: 100, quantity: 200 },
            {id: 110, quantity: 250 },
            {id: 120, quantity: 270 },
        ]
    });

    const inputs = [
        {
            id: 1,
            name: "first_name",
            type: "text",
            placeholder: "Imię",
            errorMessage: "Imię powinno zawierać min. 4 litery",
            required: true,
            pattern: "^[A-Za-z]{4,16}$"
        },
        {
            id: 2,
            name: "last_name",
            type: "text",
            placeholder: "Nazwisko",
            errorMessage: "Nazwisko powinno zawierać min. 5 liter",
            required: true,
            pattern: "^[A-Za-z]{5,16}$"
        },
        {
            id: 3,
            name: "city",
            type: "text",
            placeholder: "Miasto",
            errorMessage: "Miasto powinno zawierać min. 3 litery",
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

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values.order[0].author)
        try {
            const response = await axios.post('http://localhost:3001/api/order', values);
            console.log(response.data)
        } catch (error) {
            console.log(error.response);
        }
    }

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
                        <p>Nie wybrano żadnej z książek</p>
                    ) : (
                        <>
                            <p>Cena całkowita: {booksPrice}</p>
                            <button>Wyślij</button>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default OrderForm;