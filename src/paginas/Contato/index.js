import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import ContatoMapa from '../../componentes/Mapa';
import Dentistas from '../../componentes/Dentistas';
import './style.css';

const Contato = () => {
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>
                    <p>Agende uma consulta pelo telefone: (11) 5647-0007</p>

                    <Dentistas />
                </div>

                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>
                    <p>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro, São Paulo - SP</p>
                    <ContatoMapa />
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Contato;