// Archivo JS princpal- punto de entrada de la aplicación

import { changeRouter } from './router.js';
import { onAuth } from './fireBase/auth.js';

onAuth(() => {
  changeRouter(window.location.hash);
}, () => {
  changeRouter('#/login');
});

// escucha los cambios de la url
window.addEventListener('hashchange', () => {
  changeRouter(window.location.hash);
});
