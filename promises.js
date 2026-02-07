 const promiseOne= new Promise(function(resolve,reject){
      
    setTimeout(function(){
        console.log('hii i am vinit ');
        resolve()
    },1000)
  
       
 })

  promiseOne.then(function(){
     console.log('async task 1');
  })

  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('heyy!');
        resolve()
    },1000)
  }).then(function(){
    console.log('async task two');
  })

  const promiseThree= new Promise(function(resolve,reject){
    resolve({username:'vinit',email:'vinit@example.com',mobile:'9898898998'})
  })

  promiseThree.then(function(user){
    console.log(user);
  })

  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const error = true;

        if (!error) {
            resolve({ username: "vinit", email: "vinit@example.com" });
        } else {
            reject("js error");
        }
    }, 1000); 
});

promiseFour
    .then(function (user) {
        console.log(user);
    })
    .catch(function (error) {
        console.log(error);
    });
