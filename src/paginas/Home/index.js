import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Servicos from '../../componentes/Servicos';

import './style.css';

const Home = () => {
    return(
        <EstruturaPagina>
            <div className="home-apresentacao">
                <div className="limitar-container">
                    <h1>Os melhores aparelhos dentários</h1>
                    <p>Confira abaixo todas as especialidades odontológicas que oferecemos!</p>

                    <Servicos />
                </div>
            </div>

            <h2 className="titulo-sessao">Por que usar <b>aparelho ordotôndico?</b></h2>

            <img src="assets/aparelho.png" className="img-aparelho" 
                alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho"/>
            
            <ul class="lista-sobre-aparelho limitar-container">
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>
                        Dentes desalinhados causam problemas nos dentes e podem afetar 
                        a digestão dos alimentos e a respiração
                    </p>
                </li>

                <li>
                    <h3>Melhorar a dicção e a higiente bucal</h3>
                    <p>
                        Muitas pessoas não conseguem nem usar fio dental devido a posição
                        de sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma mais ampla.
                    </p>
                </li>

                <li>
                    <h3>Corrigir espaços entre os dentes</h3>
                    <p>
                        Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. 
                        Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.
                    </p>
                </li>
                
            </ul>

            <div className="home-depoimentos">
                <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>
                <ul className="lista-depoimentos">
                    <li>
                        <img className="img-aparelho" src="assets/cliente01.png"
                             alt="Depoimento do cliente Alberto Silva" title="Depoimento do cliente Alberto Silva"></img>
                        <p>Alberto Silva</p>
                        <p>"Usei aparelho por 4 anos e agora posso sorrir novamente."</p>
                    </li>

                    <li>
                        <img className="img-aparelho" src="assets/cliente02.png"
                             alt="Depoimento da cliente Eliana Oliveira" title="Depoimento da cliente Eliana Oliveira"></img>
                        <p>Eliana Oliveira</p>
                        <p>"Meus dentes eram espaçados e depois de 2 anos estão no lugar certo."</p>
                    </li>

                    <li>
                        <img className="img-aparelho" src="assets/cliente03.png"
                             alt="Depoimento da cliente Maria Souza" title="Depoimento da cliente Maria Souza"></img>
                        <p>Maria Souza</p>
                        <p>"Comecei a usar ano passado e já estou sentindo a diferença."</p>
                    </li>
                </ul>
            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>
            </div>

        </EstruturaPagina>
    );
}

export default Home;