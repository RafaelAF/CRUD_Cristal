let nome = document.getElementById('name');
let endereco = document.getElementById('adress');
let telefone = document.getElementById('phone');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');


let btn = document.getElementById('singup');


let displayUsers = document.getElementById('listaDeUsuarios')


class User{
    constructor({name, adress, tel, email, cpf}){
        this.nome = name;
        this.adress = adress;
        this.tel = tel;
        this.email = email;
        this.cpf = cpf;
    }
}

let usuarios = []


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(nome.value && endereco.value && telefone.value && email.value && cpf.value){

        let user = new User({
            name: nome.value,
            adress: endereco.value,
            tel: telefone.value,
            email: email.value,
            cpf: cpf.value
        })
        usuarios = [...usuarios, user]
        console.log(usuarios)
        nome.value = '';
        endereco.value = '';
        telefone.value = '';
        email.value = '';
        cpf.value = '';
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        let item = document.createTextNode(`${user.nome} cadastro: ${user.cpf}`)
        li.appendChild(item)
        displayUsers.appendChild(li)

    }else{
        console.log('preencha todos os campos')
    }
    
})