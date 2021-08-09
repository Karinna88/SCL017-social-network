import { templateRegistro } from './templateRegistro.js';

export const templateInicioSesion = () => {
  const templateInicioSesion = `

   
            <main id="homeSigIn" class= "containerFondo">

            <div class= "containerDiv">

            <section class="sectionLogo">
            <img src="./images/1 (2).png" class="logo" alt="logo">
            </section>
            <div class="div2">
            <section>
                <input class="inputlogIn" type="email"    id="email" placeholder="E-mail">
                <input class="inputlogIn" type="password" id="password" placeholder="Contraseña">
            </section>

            <section>
                <button class="btnLogin" id="btnSingIn">ENTRAR</button>
            </section>

            <p id="message"></p>

            <section>
                <p class="textLogin">Ingresa con:</p>

                <button id="btnGoogle"> 
                    <img class="btnIcon" src="./images/google-removebg-preview.png"  alt="google">
                </button> 
               
            </section>

            <section>
                <button class="btnLogin" id="btnRegister">REGISTRATE</button>
            </section>
            </div>
            </div>
        </main>  
        `;

  return templateInicioSesion + templateRegistro;
};
