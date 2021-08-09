export const templateRegistro = `

   <div class="modal-container">
   <div class="modal modal-close">
     <p class="close">X</p>

             <div class="contentModal">
                    <div class="textInicioModal">
                       <h1> Bienvenido a Mira </h1>
                       <h3> Comparte reseñas sobre las peliculas y series que estas viendo.</h3>
                       <p class="textModal"> Comienza Ahora </p>
                    </div>
                    <div class="textFormModal">
                        <div class="registro-formulario">
                            <div class="input-field">
                                 <label for="nombreContactoReg">Nombre:</label>
                                <input id="nombreContactoReg"  type="text"  maxlength="50" data-length="50" required />
                                
                            </div>
                            <div class="input-field">
                                 <label for="emailContactoReg">E-mail:</label>
                                <input id="emailContactoReg" type="email"  maxlength="50" data-length="50" required />
                               
                            </div>
                            <div class="input-field">
                                 <label for="passwordReg">Password:</label>
                                <input id="passwordReg"  type="password"  maxlength="10" data-length="10" required />
                               
                            </div>
                            <div class="div-btnInicioSesion">
                                <button id="btnRegisterUser" class="btnLogin">Registrarse </button>
                            </div>      
                        
                            <div class="div-message">
                            <p id="messageModal">. </p>
                            </div>  
                    </div>
             </div>

       </div>
  </div>
   `;
