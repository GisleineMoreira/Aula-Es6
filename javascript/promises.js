//programação assíncrona

//PROMISES FUNCIONAM EM FAVOR DAS CALLBACKS, e podem ser:
//Pending
//Fulfilleds
//Rejected

const doSomethingPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1500);
});


const doOtherThingPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('Second data');
    }, 1000);
});

//.race faz com q a promisse q resolver 1°  seja executada, retorna os valores
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    
});

/*
//executa promises SEQUENCIALMENTE e faz TRATAMENTO DE ERRO:
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => 
{ console.log(data[0].split(''));
  console.log(data[0].split(''));
})
.catch(err => {
    console.log(err);
});




//executa as duas promises em PARALELO:
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => 
{ console.log(data);
});

//executa as promises uma após a outra SEQUENCIALMENTE:

doSomethingPromise()
    .then(data => 
        {console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    //tratamento de erro:
    .catch(error => console.log('Ops', error)); */
