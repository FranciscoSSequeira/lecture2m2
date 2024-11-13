const addUserButton = document.getElementById("addUserButton");

let i = 1;

class User {
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

class Repository{
    constructor(){
        this.users = [];
    }
    createUser({id, name, username, email}) {
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
    }

}

const repository = new Repository();

const addUser = () => {

    if ( i > 10 ) return alert("No hay mas usuarios");

    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
        i++; 
        repository.createUser(data); 
        console.log(repository.users);
    })
};
addUserButton.addEventListener("click" , addUser);

// ahora cada vez que se aprieta el button aparece un nuevo usuario
