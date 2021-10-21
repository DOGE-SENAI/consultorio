import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './style.css';

const Missao = () => {
    return(
        <EstruturaPagina>
            <div className="cards-container">
                <div className="card">
                    <h2 className="titulo-card">Foco</h2>
                    <p>
                    Atender pessoas que buscam um profissional atencioso para 
                    a solução de um problema bucal em uma clínica multidisciplinar.
                    </p>
                </div>
                <div className="card">
                    <h2 className="titulo-card">Missão</h2>
                    <p>
                    Propiciar acesso a uma odontologia moderna com conforto, conveniência 
                    e qualidade, sempre com compromisso social.
                    </p>
                </div>
                <div className="card">
                    <h2 className="titulo-card">Visão</h2>
                    <p>
                    Continuar a ser a referência nacional em atendimento odontológico de qualidade; 
                    manter o reconhecimento de sua excelência no atendimento ao cliente, e ser, 
                    cada vez mais, recomendada como negócio pela satisfação de seus franqueados.
                    </p>
                </div>
                <div className="card">
                    <h2 className="titulo-card">Valores</h2>
                    <p>
                    A grande paixão da Sorridents é cuidar da saúde bucal das pessoas, 
                    por este motivo realiza um atendimento alegre e humanizado. De um jeito 
                    simples, mantém uma relação de respeito e transparência com seus clientes.
                    </p>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Missao;