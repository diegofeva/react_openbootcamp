import React, {useState} from 'react';
import Proptypes from 'prop-types';


    let red = 0;
    let green = 200;
    let blue = 150;

    // Estilos para usuarios logeado
    const loggedStyle = {
        backgroundColor: `rgb(${red},${green},${blue})`,
        color: "white",
        fontWeight: "bold"
    }
    
    //Estilos para usuario no logeado
    const unloggedStyle = {
        backgroundColor: 'tomato',
        color: "white",
        fontWeight: "bold",
    }

/**
 * login / logout buttons  
 */

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
        )
} 

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
        )
} 



function OptionalRenderer() {

    const [access,setAcess] = useState(false);
    const [nMessages,setnMessage] = useState(0);

    const loginAction = () => {
        setAcess(true);
    }

    const logoutAction = () => {
        setAcess(false);
    }

    // ? (expresión true) && expresión ==> se renderiza la expresión
    // ? (expresión false) && expresión ==> no se ejecuta la expresión
    




    // const updateAccess = () => {
    //     setAcess(!access);
    // } 

    let optionalButton;

    // if(access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //      optionalButton= <button onClick={updateAccess}>Login</button>
    // }


    if(access) {
            optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}>Logout</LogoutButton>
        } else {
             optionalButton= <LoginButton propStyle={loggedStyle} loginAction={loginAction}>Login</LoginButton>
        }


    // Unread messages
    let addMessages = () => {
        setnMessage(nMessages + 1)
    }




    return (
        <div>

            {/* Optional button */}
            {optionalButton}
            {/* N Mesages unread */}
            {/* {nMessages === 1 && <p>You have {nMessages} new message</p> }
            {nMessages > 1 && <p>You have {nMessages} new messages</p>}
            {nMessages === 0 && <p>Their are no more new messages</p>}
             */}

            {/* Ternary operator */}
            {access ? (<div>
                {nMessages > 0 ? 
                    <p>You have {nMessages} new message{nMessages > 1? "s" : null }</p> :
                    <p>Their are no more new messages</p>
                }
                <button onClick={addMessages}> {nMessages === 0? "Add your first message" : "Add new message"} </button>
            </div> ) : null}
        </div>
    );
};

OptionalRenderer.propTypes = {

}

export default OptionalRenderer;