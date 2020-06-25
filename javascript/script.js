
/* O FETCH SÓ VAI DAR UM ERRO NA PROMISSE SE HOUVER ERRO DE REDE
UM STATUS DIFERENTE DE 200


fetch('/data.json').then(responseStrem => {
    responseStrem.json().then(data =>{
        console.log(data);
    });
});

fetch('http://localhost:5500/data.json')
.then(responseStream => {
    if (responseStream.status === 200){
     return responseStream.json();
    } else {
        throw new Error('Request error');
    }
 })
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Erro:', err);
});
____________________________________________

//ES7 - Async / Await:

const simpleFunc = async () => {
    return 12345;
};
simpleFunc().then(data => {
    console.log(data);
});
const simpleFunc = async () => {
    throw new Error('OH NO!');
    return 12345;
};
simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
___________________________________
//await:


const asyncTimer = () => 
new Promise ((resolve, reject)=> {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();

    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    _____________________________________
    
    RESOLVE O CÓDIGO ASSÍNCRONO DE MANEIRA SEQUENCIADA (maneira síncrona) :
    
    
const asyncTimer = () => 
new Promise ((resolve, reject)=> {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream => 
        resStream.json()
        );

    return dataJSON;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    _____________________________________*/

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);

    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });