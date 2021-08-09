import { templateInicioSesion } from './pages/templateInicioSesion.js';
import { home } from './pages/templateHome.js';
import {
  registerUser, signIn, logOut, openModal, closeModal, logInGoogle, onAuth,
} from './fireBase/auth.js';
import {
  listenersPosts, listarPosts, listenerFile, mostrarNombreUsuario, mostrarsaludo, mostrarPhoto,
} from './fireBase/postController.js';
import { perfil } from './pages/templatePerfil.js';


// changeRouter funcion para elegir la ruta a la que me dirijo
export const changeRouter = (hash) => {
  const rootPage = document.getElementById('root');
  switch (hash) {
    case '':
    case '#':
    case '#/login':
      rootPage.innerHTML = templateInicioSesion();
      signIn();
      openModal();
      closeModal();
      registerUser();
      logInGoogle();
      break;
    case '#/home':
      rootPage.innerHTML = home;
      listenersPosts();
      listarPosts();
      listenerFile();
      logOut();
      onAuth(mostrarsaludo);
      break;
    case '#/perfil':
      rootPage.innerHTML = perfil;
      listenersPosts();
      listarPosts(firebase.auth().currentUser.uid); //para el perfil
      listenerFile();
      logOut();
      onAuth(mostrarNombreUsuario);
      mostrarPhoto();
      break;
    default:
      rootPage.innerHTML = '<h2>Página no existe</h2>';
      break;
  }
};
