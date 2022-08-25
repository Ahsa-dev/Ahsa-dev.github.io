import React from 'react';
import "../styles/pinkyFonts.css";
import "../styles/pinkyStyles.css";

import "../scripts/countdown";
import "../scripts/fixedMessage";

import Bus from "../images/Bus.jpg";
import Trip from "../images/Trip.png";
import Boat from "../images/Boat.png";
import Bonfire from "../images/Bonfire.png";
import Popcorns from "../images/Popcorns.png";
import Pillow from "../images/Pillow.png";
import Kayak from "../images/Kayak.png";
import Hiking from "../images/Hiking.png";
import Peach from "../images/Peach.png";
import Bills from "../images/Bills.png";

const Glamping = () => {
    return (
        <>
            <link rel="stylesheet" href="./fonts/font-awesome/css/font-awesome.min.css"/>
            <div className="banner">
                <div className="banner-image"></div>
                <div className="banner-square initial">
                    <div className="banner-text">
                        <h1>Levit glamping</h1>
                    </div>
                </div>
            </div>
            <div className="main-description">
                <h2 className="description-text">Motivo y justificación para un <span>SI</span> inmediato de Sophie</h2>
                <p>Aventurate en una experiencia inolvidable para ti y para Juancito en la cual podrán conocer juntos un hermoso lugar en el cual compartirán grandes momentos, descansaran de la vida de la ciudad y por último y más importante van a <span>chupar frio</span> a menos que se cumpla lo siguiente:</p>
                <ol>
                    <li><p>Que Juancito haga su papel de macho protector y sea la cuchara <span>pequeña</span> grande</p></li>
                    <li><p>Que Sophie no le robe la cobija por la noche a Juancito</p></li>
                </ol>
            </div>
            <div className="parallax"></div>
            <div className="countdown-container">
                <h2>Faltan:</h2>
                <ul className="countdown">
                    <li className="days dots">
                        <div className="number">5</div>
                        <div className="label">Días</div>
                    </li>
                    <li className="hours dots">
                        <div className="number">2</div>
                        <div className="label">Horas</div>
                    </li>
                    <li className="minutes dots">
                        <div className="number">7</div>
                        <div className="label">Min.</div>
                    </li>
                    <li className="seconds">
                        <div className="number">53</div>
                        <div className="label">Seg.</div>
                    </li>
                </ul>
            </div>
            <div className="trip-start">
                <div className="trip-text">
                    <h2>Preparación</h2>
                    <p>El día de salida debemos preparar las maletas con ropa y todo lo que necesitemos para el viaje. La idea es pasar tiempo por fuera de la isla antes de ir directamente a esta,
                    estaremos en algunos lugares turísticos en la mañana para que nos de tiempo de hacer todo. Luego nos dirigiremos a la isla en la cual también hay unas actividades definidas tanto por ellos
                    como por nosotros (entre ellas un jacuzzi). Pero sin extenderme más, espero te gusten las actividades que preparé para ti.</p>
                </div>
                <img className="trip-image" src={Bus} alt="bus"/>
            </div>
        <div className="activities">
            <h2>Actividades</h2>
            <p>Dentro de nuestras actividades tenemos el siguiente itinerario</p>
            <ul>
                <li className="penhol">
                    <div className="description">
                        <h3>GUATAPÉ</h3>
                        <p>Desde medellín iremos a guatapé en un busesito, iremos caminando a la piedra del peñol en la cual Juancito tomará (contra su voluntad) una foto de Sophie sosteniendo la piedra del peñol</p>
                        <p className="hour">12:00pm</p>
                    </div>
                    <img className="activity-img" src={Trip} alt="trip"/>
                </li>
                <li className="arrive">
                    <div className="description">
                        <h3>LLEGADA</h3>
                        <p>Llegaremos a la "Marina Navegar" cerca a guatapé, desde ese punto emprenderemos un viaje en lancha hacia el punto de encuentro</p>
                        <p className="hour">4:00pm</p>
                    </div>
                    <img className="activity-img" src={Boat} alt="boat"/>
                </li>
                <li className="bonfire">
                    <div className="description">
                        <h3>FOGATITA</h3>
                        <p>En la noche se realiza una fogata con masmelos en la cual pasaremos un buen tiempo de calidad</p>
                        <p className="hour">6:00pm</p>
                    </div>
                    <img className="activity-img" src={Bonfire} alt="bonfire"/>
                </li>
                <li className="movie">
                    <div className="description">
                        <h3>NOCHE DE PELI</h3>
                        <p>Luego de los masmelos el lugar ofrece una noche de pelis con palomitas, esperemos y nos dejen llevar las cobijas para el frio</p>
                        <p className="hour">8:00pm</p>
                    </div>
                    <img className="activity-img" src={Popcorns} alt="popcorns"/>
                </li>
                <li className="mimir">
                    <div className="description">
                        <h3>MIMIR</h3>
                        <p>Con la cantidad de actividades que hicimos en el día seguramente estaremos muy cansados por lo cual lo siguiente es dormir temprano para iniciar un nuevo día con las actividades que nos quedan</p>
                        <p className="hour">11:00pm</p>
                    </div>
                    <img className="activity-img" src={Pillow} alt="pillow"/>

                </li>
                <li className="kayak">
                    <div className="description">
                        <h3>KAYAK</h3>
                        <p>En la mañana podremos ir a una actividad de kayak, en la cual Juancito irá adelante para evitar que Sophie lo bañe temprano</p>
                        <p className="hour">6:00am</p>
                    </div>
                    <img className="activity-img" src={Kayak} alt="kayak"/>
                </li>
                <li className="hiking">
                    <div className="description">
                        <h3>CAMINATA GUIADA</h3>
                        <p>Luego del kayak y descansar un poco, emprenderemos una caminada guiada por el lugar en el cual podremos conocer un poco de la naturaleza y tendremos espacio para respirar mucho aire fresco</p>
                        <p className="hour">9:30am</p>
                    </div>
                    <img className="activity-img" src={Hiking} alt="hiking"/>
                </li>
                <li className="peach">
                    <div className="description">
                        <h3>SALIDA</h3>
                        <p>Por último saldremos del complejo a la hora que la lancha salga de la isla, y regresaremos a casa a continuar con nuestra gran aventura</p>
                        <p className="hour">3:00pm</p>
                    </div>
                    <img className="activity-img" src={Peach} alt="peach"/>
                </li>
            </ul>
        </div>
        <div className="pocket-pain">
            <div className="glamping-prices">
                <h2>Glamping:</h2>
                <p>$660.000 + $90.000</p>
            </div>
            <img className="pocket-pain-img" src={Bills} alt="bills"/>
            <div className="bus-prices">
                <h2>Bus persona:</h2>
                <p>$17.000</p>
            </div>
        </div>
        <footer>
            Derechos reservados por <span>Juancito</span> 2022 <i className="fa fa-copyright" aria-hidden="true"></i>
        </footer>
        <script src="../../scripts/countdown.js"></script>
        <script src="../../scripts/fixedMessage.js"></script>
        </>
    );
}

export default Glamping;