function Iniciarsesion() {
    const email = document.getElementById("user").value
    const contraseña = document.getElementById("password").value
    const Cambiartexto = document.getElementById("Texto")
    const Usuario = "ejemplo@gmail.com";
    const Contraseña_ejemplo = "123456789";

    if (email === Usuario && contraseña === Contraseña_ejemplo) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Iniciaste sesión correctamente",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => { window.location.href = "index.html" }, 1000)
    }
    else if (contraseña !== Contraseña_ejemplo && email === Usuario) {
        Swal.fire({
            title: "Contraseña incorecta",
            footer: '<a href="#">Recuperar contraseña</a>',
            icon: "error"
        });
    }
    else if (contraseña === Contraseña_ejemplo && email !== Usuario) {
        Swal.fire({
            title: "E-mail incorecto",
            footer: '<a href="#">Recuperar E-mail</a>',
            icon: "error"
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Contraseña o correo incorecto",
            footer: 'si no tienes una cuenta registrate <a href="register.html">aqui</a>',
        });
    }
}
function Registrarse() {

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Signed in successfully"
    });
    setTimeout(() => { window.location.href = "login.html" }, 2500);
} 