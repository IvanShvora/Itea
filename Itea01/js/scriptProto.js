const oneUser = {
    age: 26
};

const twoUser = {
    bornDate: 1993
};
const user = {
    name: 'ivan'
};

user.__proto__ = oneUser;
oneUser.__proto__ = twoUser;
for (let key in user) {
    console.log('user.' + key + ':' + user[key]);
}