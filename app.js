const startBtn = document.querySelector('.start__container');
const contadorRojo = document.querySelector('.cantidadRojo');
const contadorAzul = document.querySelector('.cantidadAzul');
const pantallaDeCarga = document.querySelector('.pantallaDeCarga__container');
const numeros = document.querySelector('.numbers');
const cuentaRegresiva = document.querySelector('.cuentaRegresiva')
let innerContadorAzul = 0;
let innerContadorRojo = 0;
// function pantallaFade(fn){
//     setTimeout(()=>{
//         console.log("La pantalla desvanecio")
//         return fn()
//     },3000)
// }

// pantallaFade(()=>{
//     pantallaDeCarga.classList.add('pantallaDeCargaOff')
// })

let cuentaAtras = (valor) => {
    innerContadorAzul = 0
    innerContadorRojo = 0
    numeros.style.display = "flex"
    return new Promise((resolve, reject) => {
            resolve(valor)
        })
        .then(valor => {
            setTimeout(() => {
                numeros.innerHTML = valor
                return new Promise((resolve, reject) => {
                        resolve(valor - 1)
                    })
                    .then(valor => {
                        setTimeout(() => {
                            numeros.innerHTML = valor
                            return new Promise((resolve, reject) => {
                                    resolve(valor - 1)
                                })
                                .then(valor => {
                                    setTimeout(() => {
                                        numeros.innerHTML = valor
                                        return new Promise((resolve, reject) => {
                                                resolve("Go")
                                            })
                                            .then(valor => {
                                                setTimeout(() => {
                                                    numeros.innerHTML = valor
                                                    //Llamada a una nueva funcion una vez aparece el "GO"
                                                    //Comienzo del verdadero juego
                                                    //Poner un contador de 10s hasta que puedan dejar de apretar su respectiva tecla
                                                    if (valor == "Go") {
                                                        let comienzaELJuego = () => {
                                                            numeros.innerHTML = " "
                                                            console.log("ComienzaElJuego")
                                                            //Funcion de apretar teclas
                                                            const apretandoTeclas = (e) => {
                                                                if (e.key == "a") {
                                                                    contadorAzul.innerHTML = innerContadorAzul;
                                                                    innerContadorAzul += 1
                                                                } else if (e.key == "l") {
                                                                    contadorRojo.innerHTML = innerContadorRojo;
                                                                    innerContadorRojo += 1
                                                                }
                                                            }
                                                            //Sumamos 1 al apretar la a o l
                                                            document.addEventListener("keydown", apretandoTeclas)
                                                            //Cuenta Regresiva
                                                            let cuentaRegresivaFn = (contador) => {
                                                                if (contador < 0) {
                                                                    let ganador = innerContadorAzul > innerContadorRojo ? "Lado azul" : "Lado rojo";
                                                                    let puntos = innerContadorAzul > innerContadorRojo ? innerContadorAzul - 1 : innerContadorRojo - 1;
                                                                    alert("Se acabo el tiempo.")
                                                                    alert(`Gano el ${ganador} con ${puntos} puntos !  `)
                                                                    cuentaRegresiva.innerHTML = "10.00";
                                                                    contadorRojo.innerHTML = 0;
                                                                    contadorAzul.innerHTML = 0;
                                                                    document.removeEventListener("keydown", apretandoTeclas)
                                                                    alert("Reseteando contadores + removiendo eventos")
                                                                    return "Fin de la funcion";
                                                                }

                                                                setTimeout(() => {
                                                                    cuentaRegresiva.innerHTML = contador.toFixed(2)
                                                                    return cuentaRegresivaFn(contador - 0.1)
                                                                }, 100)


                                                            }
                                                            cuentaRegresivaFn(10)



                                                        }

                                                        return comienzaELJuego()
                                                    }
                                                }, 1000)
                                            })

                                    }, 1000)
                                })
                        }, 1000)
                    })
            }, 1000)
        })


}

startBtn.addEventListener('click', () => {
    let audioComienzo = new Audio("sounds/career.mp3")
    audioComienzo.play()
    return cuentaAtras(3)

});

//Funciones de comienzo de juego