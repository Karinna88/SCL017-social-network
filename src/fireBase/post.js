import { listarPosts } from './postController.js';

function crearPost(autor, comentario, imagen) {
  const textPost = document.getElementById('textPost').value;
  if (textPost.length === 0) {
    alert('Ingresa un texto valido');
  } else {
    const dataBase = firebase.firestore();
    const obj = {
      autor,
      comentario,
      imagen,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
      like: [],
      userId: firebase.auth().currentUser.uid, // para agregar id al documento de firestore
      userName: firebase.auth().currentUser.displayName,

    };

    return dataBase.collection('posts').add(obj)
      .then(() => {
        // console.log("Id del post => ${refDoc.id}")
        listarPosts();
      })

      .catch(() => {
        // alert('error creando el post => ${error}');
        alert('error creando el post');
      });
  }
  return false;
}

// CON ESTA FUNCIÓN VAMOS A OBTENER LA LISTA DE POSTS

function obtenerPost(idUser, callBack) {
  //  console.log(idUser);
  const dataBase = firebase.firestore();
  if (idUser) {
    dataBase.collection('posts')
      .orderBy('fecha', 'desc')// para que aparezcan los post en orden/
      .where('userId', '==', firebase.auth().currentUser.uid)
      .get()
      .then(callBack);
  } else {
    dataBase.collection('posts')
      .orderBy('fecha', 'desc')// para que aparezcan los post en orden/
      .get()
      .then(callBack);
  }
}

// funcion para eliminar Post  ******REVISAR
const deletePost = (postId) => {
  console.log(postId);
  const isConfirm = window.confirm('¿Seguro quieres eliminar tu post?');
  if (isConfirm === true) {
    firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .delete()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('error al eliminar post:  ', error);
      });
  }
};

// PARA EDITAR LOS POST
const updatePost = (id, updatedPost) => database.collection('post').doc(id).update(updatedPost);

// Función like

function tooggleLike(postId, uid) {
  const idUser = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then((doc) => {
           console.log(doc.data().like);

           if (isLiked (doc.data().like, idUser)){
             //aqui se remueve el like
             firebase.firestore().collection('posts').doc(postId).update({
               like: firebase.firestore.FieldValue.arrayRemove(idUser),
             })
             document.getElementById(`like_${postId}`).innerHTML = doc.data().like.length - 1;
             document.getElementById(`btn_like_${postId}`).innerText = showFaceLike(doc.data().like.length - 1);
           }
           else{
             //aqui se añade el like
             firebase.firestore().collection('posts').doc(postId).update({
               like: firebase.firestore.FieldValue.arrayUnion(idUser),
             })
             document.getElementById(`like_${postId}`).innerHTML = doc.data().like.length + 1;
             document.getElementById(`btn_like_${postId}`).innerText = showFaceLike(doc.data().like.length + 1);

           }

    });
}

function showFaceLike(qty){
  if(qty > 0){
    return '😍';
  }else {
    return '🙂';
  }
}

// funcion para ver si el usuario actual esta dentro del array de like
function isLiked(likes, idUser){
  for (let i = 0; i < likes.length; i++){
    if (likes[i] === idUser){
      return true;
    }
  }
  return false;
}

export {
  crearPost, obtenerPost, tooggleLike, deletePost, updatePost,
};
