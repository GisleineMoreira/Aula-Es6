//EventEmitter
/* 
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Gisleine Santos' });
____________________________________________

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
 const users = new Users();

 // .once loga apenas uma vez (o primeiro)
 // .on loga varias vez (quantas vzs voce pedir)

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Gisleine Santos' });
________________________________________________

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}
const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Moreira Gisleine' });
users.userLogged({ user: 'Mari Maria' });*/
