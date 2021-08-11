// MODAL

function openModal() {
  const modalC = document.querySelectorAll('.modal-container')[0];
  const modal = document.querySelectorAll('.modal')[0];

  document.getElementById('btnRegister').addEventListener('click', (e) => {
  // muestra el Modal
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
  });
}

function closeModal() {
  const cerrar = document.querySelectorAll('.close')[0];
  const modal = document.querySelectorAll('.modal')[0];
  const modalC = document.querySelectorAll('.modal-container')[0];

  cerrar.addEventListener('click', () => {
    modal.classList.toggle('modal-close');

    setTimeout(() => {
      modalC.style.opacity = '0';
      modalC.style.visibility = 'hidden';
    }, 900);
  });
}

// funcion para crear usuario en firebase
function registerUser() {
  document.getElementById('btnRegisterUser').addEventListener('click', () => {
    const username = document.getElementById('nombreContactoReg').value;
    const email = document.getElementById('emailContactoReg').value;
    const password = document.getElementById('passwordReg').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        //updateProfile, actualiza el nombre del perfil del usuario
        result.user.updateProfile({ 
          displayName: username,
        });

        const configuracion = {
          url: 'http://localhost:5000/', //revisar
        };

        result.user.sendEmailVerification(configuracion)

          .catch((error) => {
            console.error(error);
            document.getElementById('messageModal').innerHTML(error.message);
          });
        // se debe cerrar para que el user valide primero
        firebase.auth().signOut(); 

        const message = 'Revisa tu email para verificar correo e Inicia Sesión';
        document.getElementById('messageModal').innerHTML = message;
      }) //revisar 

      .catch((error) => {
        console.log(error);
        document.getElementById('messageModal').innerHTML = error;
      });
  });
}

// para logearse con Google
function logInGoogle() {
  document.getElementById('btnGoogle').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.href = '#/home';
      })

      .catch((error) => {
        console.error(error);
      });
  });
}

// para cerrar sesión
function logOut() {
  
  document.getElementById('logOut').addEventListener('click', () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('sesion cerrada');
        window.location.hash = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

// para iniciar sesión
function signIn() {
  document.getElementById('btnSingIn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  // firebase encuentra al user
      .then(() => {
        window.location.href = '#/home';
      })
    // si hay error en la valudación del user
      .catch((error) => {
        console.log(error);
        document.getElementById('message').innerHTML = error;
      });
  });
}

//  funcion que observa los cambios del usuario
function onAuth(looged, logout) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (typeof looged === 'function') {
        looged();
      }
    } else if (typeof logout === 'function') {
      logout();
    }
  });
}

export {
  registerUser, signIn, logOut, openModal, closeModal, logInGoogle, onAuth,
};
