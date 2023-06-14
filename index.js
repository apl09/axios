// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista (array) de usuarios.

function getTodos() {
axios   .get('https://jsonplaceholder.typicode.com/users')
        .then(res => console.log(res))
        .catch(err => console.error(err))

}
getTodos()


// Imprimir por consola solo el nombre de los usuarios.
function getTodos2() {                             
    axios   .get('https://jsonplaceholder.typicode.com/users')         
            .then(res => console.log(res.data.map(nombre => nombre.name )))
            .catch(err => console.error(err))
              
    }
    getTodos2()




// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios,
// rellenarla con la respuesta de la API. Este proceso debe realizarse fuera de cualquier función.
users= []
function rellenarUsers() {                             
    axios   .get('https://jsonplaceholder.typicode.com/users')         
            .then(res => users = res.data)
            .catch(err => console.error(err))
              
    }
    rellenarUsers()
    console.log(users)




// Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía
// debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.
// // archivo JS


// // variable global
// // petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.

const showUsers =()=> users.map(element => console.log(element))
console.log(showUsers())





// Crea un botón que, cuando lo cliques, ejecute la función que habías creado.

const boton = document.querySelector('#btn')
//boton.addEventListener('click',showUsers)



// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML).

const pintar = document.querySelector('#showDom') 
const paintUsers =()=> users.map(element =>  pintar.innerHTML += `<p>Name: ${element.name}</p>`)
    


boton.addEventListener('click',paintUsers)
 

//Imprimir por consola la lista de razas de todos los perros.


function todosLosCHuchos() {
    axios   .get('https://dog.ceo/api/breeds/list/all')
            .then(res => console.log(res.data.message))
            .catch(err => console.error(err))
    
    }
    todosLosCHuchos()
    
    

// Imprimir por consola una imagen (= url) random de una raza.
const imagen = document.querySelector('#image')

function todosLosCHuchos2() {
    axios   .get('https://dog.ceo/api/breeds/image/random')
            .then(res => imagen.innerHTML = res)
            .catch(err => console.error(err))
    
    }
    todosLosCHuchos2()
    



// Imprimir por consola todas las imágenes de una raza concreta.
    