import React from 'react';

import './style.css';

const Servicos = () => {
    return (
        <ul className="lista-servicos">
            <li>
                <img src="assets/dente.png" alt="Logo" title="Logo" />
                <p>Pré-avaliação</p>
            </li>
            <li>
                <img src="assets/dente.png" alt="Logo" title="Logo" />
                <p>Aparelhos Ordotôndicos</p>
            </li>
            <li>
                <img src="assets/dente.png" alt="Logo" title="Logo" />
                <p>Exames de Imagem Digital</p>
            </li>
            <li>
                <img src="assets/dente.png" alt="Logo" title="Logo" />
                <p>Clareamento Dental</p>
            </li>
        </ul>
    );
}

export default Servicos;