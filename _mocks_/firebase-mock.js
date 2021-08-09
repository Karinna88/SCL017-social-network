const firestore = () => ({
  collection: (nameCollection) => ({
    add: (objData) => new Promise((resolve) => {
      resolve('el post fue creado');
    }),
  }),
});

const firebase = {
  firestore,
};

export default jest.fn(() => firebase);
