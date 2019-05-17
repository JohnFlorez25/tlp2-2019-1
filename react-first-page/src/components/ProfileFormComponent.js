import React from 'react'

class ProfileFormComponent extends React.Component{
    
    //creamos el metodo HandleChange
    //este metodo recibe el evento y ahi puedo ver ese valor
    handleChange = e => {
        //esto me evidencia que se esta realizando un evento
        //console.log({ e });
        //SI QUIERO VER EL VALOR DEL EVENTO DEBO USAR
        //OTRO VALOR ES SABER EL INPUT QIUE CAUSO ESTE EVENTO
        console.log({ 
            name: e.target.name,
            value: e.target.value })
    };

    handleClick = e => {
        console.log("Han presionado el boton")
    };

    handleSubmit = e => {
        //SINO QUIERO QUE EL FORMULARIO SE ENVIE DEBO HACE EL PREVENT DEFAULT
        //DEL EVENTO
        e.preventDefault();
        console.log("Form submit")
    };

    render(){
        return(
            <div>
                <h1>Nuevo Asistente</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Nombres</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
                    </div>
                    {/* type="button"  */}
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </div>
        )
    }
}

export default ProfileFormComponent;