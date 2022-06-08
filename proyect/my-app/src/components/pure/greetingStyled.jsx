import React, {useState} from 'react';

//Definiendo estilos en constantes

// Estilos para usuarios logeado
const loggedStyle = {
    color: "white",
    fontWeight: "light"
}

//Estilos para usuario no logeado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold",
}

const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    //para así controlar si el usuario está o no logeado

    const [logged,setLogged] = useState(false);
    const greetingUser = <p>Hola, {props.name}</p>;
    const pleaseLoginn = () => (<p>Please log inn</p>);

    return (
        <div style={logged? loggedStyle : unloggedStyle}>
            {logged? (greetingUser) : (pleaseLoginn())}
            <button onClick={() => {
                console.log("boton pulsado");
                setLogged(!logged);
            }}>
                {logged? "Logout" : "Login"}
            </button>


        </div>
    );
};

export default GreetingStyled;