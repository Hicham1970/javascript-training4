//Get:
// axios
//   .get('https://reqres.in/api/users?page=2')
//   .then(res => {
//     console.log(res.data.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // Post:
// axios
//   .post('https://reqres.in/api/users', {
//     name: 'Mosh',
//     job: 'Software Engineer',
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Put:
// axios
//   .put('https://reqres.in/api/users/4', {
//     name: 'Mos',
//     job: 'Software Sealer',
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Delete:
axios
  .delete('https://reqres.in/api/users/4')
  .then(res => {
    console.log(res);
    console.log('Le statut de la reponse est : ', res.status);
  })
  .catch(err => {
    console.log(err);
  });
