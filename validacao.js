
// Palavra 1 - CPU
var cpu = ["c", "p", "u"];

// Palavra 2 - ULA
var ula = [
    "u", "l", "a"
]
// Palavra 3 - REGISTRADORES
var registradores = [
    "r", "e", "g", "i", "s", "t", "r", "a", "d", "o", "r", "e", "s"
]
// Palavra 4 - RAM
var ram = [
    "r", "a", "m"
]
// Palavra 5 - ROM
var rom = [
    "r", "o", "m"
]
// Palavra 6 - EPROM
var eprom = [
    "e", "p", "r", "o", "m"
]
// Palavra 7 - FLASH
var flash = [
    "f", "l", "a", "s", "h"
]
// Palavra 8 - MEMORIA DE MASSA
var memoriaDeMassa = [
    "m", "e", "m", "o", "r", "i", "a", "d", "e", "m", "a", "s", "s", "a"
]
// Palavra 9 - DMA
var dma = [
    "d", "m", "a"
]
// Palavra 10 - CS
var cs = [
    "c", "s"
]
// Palavra 11 - ADRESS BUS
var adressBus = [
    "a", "d", "r", "e", "s", "s", "b", "u", "s"
]
// Palavra 12 - DATABUS
var dataBus = [
    "d", "a", "t", "a", "b", "u", "s"
]
// Palavra 13 - i5
var i5 = [
    "i", "5"
]
// Palavra 14 - i7
var i7 = [
    "i", "7"
]
// Palavra 15 - DUALCORE
var dualcore = [
    "d", "u", "a", "l", "c", "o", "r", "e"
]
// Palavra 16 -  QUADCORE
var quadcore = [
    "q", "u", "a", "d", "c", "o", "r", "e"
]
// Palavra 17 - THREADS
var threads = [
    "t", "h", "r", "e", "a", "d", "s"
]
// Palavra 18 - CACHE
var cache = [
    "c", "a", "c", "h", "e"
]

// ALFABETO
// var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// VARIÁVEIS
var palavra01 = [
   "0","1","2"
   /* inputCPULetra1.value.toLowerCase(), inputCPULetra2.value.toLowerCase(), inputCPULetra3.value.toLowerCase() */
]


// VALIDAÇÕES

// if (palavra01.length == 3) {
//     if (palavraLetra01 == cpu[0] && palavra01Letra2 == cpu[1] && palavra01Letra3 == cpu[2]) {
//         verde
//     } else {
//         vermelho
//     }
// }

setInterval(() => {
    palavra01.splice(0, 1, inputCPULetra1.value.toLowerCase())
    palavra01.splice(1, 1, inputCPULetra2.value.toLowerCase())
    palavra01.splice(2, 1, inputCPULetra3.value.toLowerCase())


    if (palavra01.length == 3) {
      
        if (palavra01[0] == cpu[0] && palavra01[1] == cpu[1] && palavra01[2] == cpu[2]) {
         /* document.getElementById(); */
         console.log("verde")
         
        } else if(palavra01[0] == '' && palavra01[1] == '' && palavra01[2] == '') {
            console.log("branco")
        } else {
         console.log("vermelho")
        }
    }
}, 1000);
   