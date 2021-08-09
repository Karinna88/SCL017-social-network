export const home = `
    <div id=" sectionHome">
      <header class="header">
      <a href="#/home"><img href="#/home" src="/images/4.png"/></a>
       <div id="nombre">  </div>
        <a class="a" href="#/perfil"><i class="fa fa-user" > </i><br> Mi Perfil</a>
        <a class="a" id="logOut"><i class="fa fa-power-off"> </i><br>Salir</a>
      </header>

      <div class='box'>
        <div id="photo" class="photo"> </div>
        <form id='post' class='containerPost'>
          <textarea required id='textPost' class="boxPost" type="textarea" rows="4"  placeholder="¿Qué quieres compartir?"></textarea> 
            <div class="divenviar">
              <div class="file" >
                <label for="file"><i class="fa fa-file-image"></i>  IMAGEN</label>
                <input id='file' name="uploadedfile" type="file" hidden/>
              </div>
                <progress class="uploader" id="uploader" value="0" max="100" >0%</progress>
                <button id="btnCrearPost" class="btn" type="button" value"txtoBnt><i class="fa fa-paper-plane"></i> PUBLICAR</button>  
              </div>     
            </form>
            <div class="homepost" id="boxPosted">      
            </div>
       </div>
      <footer class="footer">
         <a  href="#/perfil"><i class="fa fa-user"> </i><br> Mi Perfil</a>
         <a  id="logOut"><i class="fa fa-power-off"> </i><br>Salir</a>
       </footer>
  </div>
`;
