console.log('Ajax Encadenado/Anidado')

const url = 'https://jsonplaceholder.typicode.com/posts/'

/* ----------------------------------------------------------- */
/*    Petición asincrónica usando Ajax NO anidado (desorden)   */
/* ----------------------------------------------------------- */
function getPost(id) {
    let xhr = new XMLHttpRequest
    xhr.open('get',url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
        }
    })
    xhr.send()
}

function getPosts() {
    console.log('inicio de las peticiones')
    getPost(1)
    getPost(2)
    getPost(3)
    console.log('fin de las peticiones')
}

//getPosts()


/* ----------------------------------------------------------- */
/*       Petición asincrónica usando Ajax anidado (orden)      */
/* ----------------------------------------------------------- */
function getPostCb(id,cb) {
    let xhr = new XMLHttpRequest
    xhr.open('get',url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
            if(cb) cb(respuesta)
        }
    })
    xhr.send()
}

//PROBLEMA: CALLBACK HELL!!!!
function getPostsCb() {
    console.log('inicio de las peticiones')
    getPostCb(1, respuesta => {
        getPostCb(2, respuesta => {
            getPostCb(3, respuesta => {
                getPostCb(4, respuesta => {
                    getPostCb(5, respuesta => {
                        getPostCb(6, respuesta => {
                            getPostCb(7, respuesta => {
                                getPostCb(8, respuesta => {
                                    getPostCb(9, respuesta => {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    console.log('fin de las peticiones')
}

//getPostsCb()


/* ----------------------------------------------------------------------- */
/*       Petición asincrónica usando Ajax anidado con Promise (orden)      */
/* ----------------------------------------------------------------------- */
function getPostPromise(id, nodebug) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest
        xhr.open('get',url+id)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let respuesta = JSON.parse(xhr.response)
                if(!nodebug) console.log(respuesta)
                resolve(respuesta)
            }
            else {
                let error = {
                    type: 'error status',
                    body: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => {
            let error = {
                type: 'error ajax',
                body: e
            }
            reject(error)
        })
        xhr.send()
    })
}

/* ----------------------------------------------------------------------- */
/*        Promise con console.log interno (con sintaxis then catch)        */
/* ----------------------------------------------------------------------- */
function getPostsPromiseThenCatch1() {
    console.log('inicio de las peticiones')
    getPostPromise(1)
    .then(() => getPostPromise(2))
    .then(() => getPostPromise(3))
    .then(() => getPostPromise(4))
    .then(() => getPostPromise(5))
    .then(() => getPostPromise(6))
    .then(() => getPostPromise(7))
    .then(() => getPostPromise(8))
    .then(() => getPostPromise(9))
    .catch( error => console.log(error))
    console.log('fin de las peticiones')
}

/* ----------------------------------------------------------------------- */
/*        Promise sin console.log interno (con sintaxis then catch)        */
/* ----------------------------------------------------------------------- */
function getPostsPromiseThenCatch2() {
    console.log('inicio de las peticiones')
    getPostPromise(1, true)
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(2, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(3, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(4, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(5, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(6, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(7, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(8, true)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(9, true)
    })
    .then(respuesta => {
        console.log(respuesta)
    })
    .catch( error => console.log(error))
    console.log('fin de las peticiones')
}

//getPostsPromiseThenCatch1()
//getPostsPromiseThenCatch2()


/* ----------------------------------------------------------------------- */
/*        Promise con console.log interno (con sintaxis async await)       */
/* ----------------------------------------------------------------------- */
async function getPostsPromiseAsyncAwait1() {
    console.log('inicio de las peticiones')
    try {
        await getPostPromise(1)
        await getPostPromise(2)
        await getPostPromise(3)
        await getPostPromise(4)
        await getPostPromise(5)
        await getPostPromise(6)
        await getPostPromise(7)
        await getPostPromise(8)
        await getPostPromise(9)
    }
    catch(error) {
        console.log(error)
    }
    console.log('fin de las peticiones')
}

/* ----------------------------------------------------------------------- */
/*        Promise sin console.log interno (con sintaxis async await)       */
/* ----------------------------------------------------------------------- */
//async function getPostsPromiseAsyncAwait2() {
const getPostsPromiseAsyncAwait2 = async() => {

    console.log('inicio de las peticiones')
    try {
        for(let i=1; i<=9; i++) {
            let respuesta = await getPostPromise(i,true)
            console.log(respuesta)
        }
        /*
        let respuesta = await getPostPromise(1,true)
        console.log(respuesta)
        respuesta = await getPostPromise(2,true)
        console.log(respuesta)
        respuesta = await getPostPromise(3,true)
        console.log(respuesta)
        respuesta = await getPostPromise(4,true)
        console.log(respuesta)
        respuesta = await getPostPromise(5,true)
        console.log(respuesta)
        respuesta = await getPostPromise(6,true)
        console.log(respuesta)
        respuesta = await getPostPromise(7,true)
        console.log(respuesta)
        respuesta = await getPostPromise(8,true)
        console.log(respuesta)
        respuesta = await getPostPromise(9,true)
        console.log(respuesta)
        */
    }
    catch(error) {
        console.log(error)
    }
    console.log('fin de las peticiones')
}

//getPostsPromiseAsyncAwait1()
//getPostsPromiseAsyncAwait2()

function getPostFetch(id) {
    fetch(url+id)
    .then(response => response.json())
    .then(datos => console.log(datos))
}

/* -------------------------------------------------------------------- */
/*   Petición asincrónica usando Ajax con fetch NO anidado (desorden)   */
/* -------------------------------------------------------------------- */
getPostFetch(1)
getPostFetch(2)
getPostFetch(3)
getPostFetch(4)
