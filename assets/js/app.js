const cl = console.log;

const loginForm = document.getElementById("loginForm")
const emailControl = document.getElementById("email")
const passwordControl = document.getElementById("password")

const newAPI = (ele) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ele.email === `abcd1234@gmail.com` && ele.password === `abcd@1323`){
                resolve(`successfully logIn!!!`)
            }else{
                reject(`Invalid UserName or Password`)
            }
        }, 500)
    })
   return promise
}


const onLogIn = (eve) => {
    //  cl(`submitted`)
     eve.preventDefault()
     let obj = {
        email : emailControl.value,
        password : passwordControl.value
     }
     newAPI(obj)

     .then((res) => {
        // cl(res)
        Swal.fire({
            icon: 'success',
            title: 'successfully Login!!!',
          })
     })
     .catch((err) => {
        // cl(err)
        Swal.fire({
            icon: 'error',
            title: 'Invalid UserName or Password',
          })
     })
     .finally(() => {
        loginForm.reset()
     })
}


loginForm.addEventListener("submit", onLogIn)
