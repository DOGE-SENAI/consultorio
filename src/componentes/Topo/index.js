import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Topo = () => {
    return(
        <header className="topo">
            <div className="topo-conteudo">
                <Link className="topo-logo-box" to="/">
                    <img src="assets/dente.png" className="topo-logo" alt="Logo de dente" title="Logo de dente"></img>
                    <p className="topo-nome-empresa">Dentes saudáveis</p>
                </Link>

                <nav className="topo-links">
                    <Link className="topo-link home" to="/">Home</Link>
                    <Link className="topo-link" to="/missao">Missão</Link>
                    <Link className="topo-link" to="/planos">Planos</Link>
                    <Link className="topo-link" to="/contato">Contato</Link>
                </nav>
            </div>
        </header>
    );
}

export default Topo;

