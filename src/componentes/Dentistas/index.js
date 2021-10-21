import React from 'react';

const Dentistas = () => {
    return (
        <ul className="lista-medicos">
            <li>
                <img src="assets/medico01.png" className="img-aparelho"
                    alt="Dr. Hélio" title="Dr. Hélio" />
                <p>Dr. Hélio</p>
                <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
            </li>

            <li>
                <img src="assets/medico02.png" className="img-aparelho"
                    alt="Dr. Carlos" title="Dr. Carlos" />
                <p>Dr. Carlos</p>
                <p>Terças e quintas das 13:00 às 18:00</p>
            </li>

            <li>
                <img src="assets/medico03.png" className="img-aparelho"
                    alt="Dra. Suzana" title="Dra. Suzana" />
                <p>Dr. Suzana</p>
                <p>Terças, quintas e sábado das 08:00 às 12:00</p>
            </li>
        </ul>
    );

}

export default Dentistas;