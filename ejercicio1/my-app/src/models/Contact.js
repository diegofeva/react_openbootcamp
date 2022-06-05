class Contact  {
    NOMBRE = "";
    APELLIDO = "";
    email = "";
    conectado = false;


    constructor(NOMBRE,APELLIDO,email,conectado) {
        this.NOMBRE = NOMBRE;
        this.APELLIDO = APELLIDO;
        this.email = email;
        this.conectado = conectado;
    }
}

export default Contact