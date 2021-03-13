import React from "react";
import "./style.css";
import informatica from "./Img/informatica.jpg";
import planejamento from "./Img/planejamento.jpg";
import seguranca from "./Img/seguranca.jpg";

function Card(){
    return(
        <section>

            <div className="card-container">
                <div className="Titulo">
                    <h2>Informatica</h2>
                </div>
            
                <div className="img">
                    <img src={informatica} alt="Peças de computador" id="imgCard" />
                </div>

                <div className="descricao">
                    <p><strong>Informática Básica</strong></p>
                    <p><strong>Duração: </strong>80 horas</p>
                    <p><strong>Preço: </strong> Grátis</p>
                    <a href="https://suicobrasileira.sp.senai.br/curso/54433/115/informatica-basica" target="_blank">
                        <button className="botao">Inscrava-se</button>
                    </a>
                </div>
            </div>

            <div className="card-container">
                <div className="Titulo">
                    <h2> Gestão - Planejamento</h2>
                </div>

                <div className="img">
                    <img src={planejamento} alt="Reunião" id="imgCard" />
                </div>

                <div className="descricao">
                    <p><strong>Finanças Pessoais</strong></p>
                    <p><strong>Duração: </strong>14 horas</p>
                    <p><strong>Preço: </strong>Grátis</p>
                    <a href="https://suicobrasileira.sp.senai.br/curso/78402/115/competencia-transversal-financas-pessoais" target="_blank">
                        <button className="botao">Inscreva-se</button>
                    </a>
                </div>
            </div>

            <div className="card-container">
                <div className="Titulo">
                    <h2>Segurança do Trabalho</h2>
                </div>

                <div className="img">
                    <img src={seguranca} alt="Equipamentos de Segurança" id="imgCard" />
                </div>

                <div className="descricao">
                    <p><strong>Segurança do Trabalho</strong></p>
                    <p><strong>Duração: </strong>14 horas</p>
                    <p><strong>Preço: </strong>Grátis</p>
                    <a href="https://suicobrasileira.sp.senai.br/curso/78398/115/competencia-transversal-seguranca-no-trabalho" target="_blank">
                        <button className="botao">Inscreva-se</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Card;