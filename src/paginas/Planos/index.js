import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './style.css';

const Planos = () => {
    return(
        <EstruturaPagina>
            <div className="planos-container">
                <div className="plano">
                    <h2>Plano PREMIUM PLUS</h2>

                    <h3>Mensal</h3>
                    <p>R$ 49,90</p>
                    <h3>Anual</h3>
                    <p>R$ 499,00</p>

                    <Link to="/" className="btn-contratar">Contratar {'>'}</Link>
                </div>

                <div className="plano">
                    <h2>Plano PREMIUM</h2>

                    <h3>Mensal</h3>
                    <p>R$ 27,99</p>
                    <h3>Anual</h3>
                    <p>R$ 279,90</p>

                    <Link to="/" className="btn-contratar">Contratar {'>'}</Link>
                </div>

                <div className="plano">
                    <h2>Plano Básico</h2>

                    <h3>Mensal</h3>
                    <p>R$ 23,99</p>
                    <h3>Anual</h3>
                    <p>R$ 239,90</p>

                    <Link to="/" className="btn-contratar">Contratar {'>'}</Link>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Planos;