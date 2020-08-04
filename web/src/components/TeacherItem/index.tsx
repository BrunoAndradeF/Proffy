import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeachItem() {
    return(
        <article className="teacher-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/52292817?s=460&v=4" alt="Bruno Andrade"/>
                <div>
                  <strong>Bruno Andrade</strong>
                  <span>Programação</span>
                </div>
              </header>

              <p>
                Estudante apaixonado pelas tecnologias da informática.
                <br /><br />
                Venha aprender linguagens de programação e como solucionar problemas através delas.
              </p>

              <footer>
                <p>
                  Preço/hora
                  <strong>R$ 15,00</strong>
                </p>
                <button type="button">
                  <img src={whatsappIcon} alt="Whatsapp"/>
                  Entrar em contato
                </button>
              </footer>
            </article>
    );
}

export default TeachItem;