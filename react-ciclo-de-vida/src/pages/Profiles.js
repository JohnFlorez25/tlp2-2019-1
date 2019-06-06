import React from 'react';
import { Link } from 'react-router-dom'

import ProfileList from '../components/ProfileListComponent';
import confLogo from '../images/logoPoli.png'
import '../styles/Profiles.css'

class Profiles extends React.Component{

    
    // Debemos tener en cuenta que el constructor es especifico para recibir nuestros props
    //estos mismos props debemos utilizarlos para inicializar la super!! clase
    //SUGERENCIA: Al ser el constructor el primero a ejecutar es recomendable acá inicializar
    //NUESTROS ESTADOS
    constructor(props){
        super(props)
        // No podemos decir state solo, usamos la palabra reservada this
        this.state = {
            //INICIALIZAMOS NUESTRA DATA VACIO
            data: []
        };
        console.log('1. AJA! Primero el constructor!!');
    }
    //Componente did mount se convierte en un excelente lugar para recibir nuestra DATA
    //quiere decir que es ideal inicializar nuestro estado vacío y vamos a SIMULAR con
    //una función asincrona que recibimos la información (acá obtendríamos información de
    //nuestra api) USAMOS SETTIMEOUT
    componentDidMount(){
        console.log('3. Oh mi gudneeeesss =x el tercero es el DidMount')
        this.timeoutId = setTimeout(() => {
            //Esta funcion lo que realiza es una actualización de nuestro estado
            this.setState({
                data: [
                    {
                        "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        "firstName": "Juan",
                        "lastName": "Perez",
                        "email": "juan_perez@gmail.com",
                        "jobTitle": "Legacy Brand Director",
                        "twitter": "JuanPerez22221-7573",
                        "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                        "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        "firstName": "Maryem",
                        "lastName": "Ruiz",
                        "email": "myruiz@hotmail.com",
                        "jobTitle": "Human Research Architect",
                        "twitter": "myRuiz61545",
                        "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                        "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        "firstName": "John",
                        "lastName": "Florez",
                        "email": "johnfloro@hotmail.com",
                        "jobTitle": "National Markets Officer",
                        "twitter": "JohnFloro96105",
                        "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                ]
            })
        }, 3000);

    }

    // Junto a actualizar nuestros Datos llamamos a componentDidUpdate, el cual recibe
    // dos argumentos el primero seria nuestros props previos y el segundo el state que
    // teniamos antes
    componentDidUpdate(prevProps, prevState){
        console.log('5. si señor ahora estamos en DidUpdate ea ea ea ea ea')
        //imprimimos los valores que tenia antes 
        console.log({
            prevProps: prevProps, prevState: prevState
        })
        //Y LOS VAMOS A COMPARAR CON LOS VALORES QUE TENEMOS AHORA!!!
        console.log({
            props: this.props, state: this.state
        })
    }

    // Por ultimos tenemos nuestro component willunmount, este es el momento ideal para realizar
    // algun proceso necesario antes de que se vaya el componente del DOM, que salga de escena
    componentWillUnmount(){
        console.log('6. Ups!! ya me vooooyyy chaaaaiii!')
        //Para causar este efecto simplemente es pulsar en algun boton que me redireccione
        //a otra página
        clearTimeout(this.timeoutId)
    }

    render(){
        console.log('2/4. :O!!! El segundo es el render y tambien cuatro???')
        return (
            <React.Fragment>
                <div className="Profiles">
                    <div className="Profiles__hero">
                        <div className="Profiles__container">
                                <img className="Profiles_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div> 
                <div className="Profiles_container">
                    <div className="Profiles__buttons">
                        <Link to="/profiles/new" className="btn btn-primary">Nuevo Perfil</Link>
                    </div>
                </div>
                <div className="Profiles__list">
                    <div className="Profiles_container">   
                        <ProfileList profiles={this.state.data} />
                    </div>

                </div>
            </React.Fragment>
            
        )
    }
}

export default Profiles