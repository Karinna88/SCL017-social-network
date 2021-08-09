import MockFirebase from '../_mocks_/firebase-mock.js';

import { crearPost } from '../src/fireBase/post.js';

global.firebase = MockFirebase();

describe('crearPost', () => {
  it('deberia de poder crear un post', () => crearPost('Que buena es esta pelicula').then((data) => {
    expect(data).tobe('el post fue creado');
  }));
});
