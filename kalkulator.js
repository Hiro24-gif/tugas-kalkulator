var wow = require('readline-sync');
console.log('--------------------');
console.log('+ = tambah')
console.log('- = kurang')
console.log('x = kali')
console.log('% = bagi')
console.log('--------------------');
let metod = wow.question('pilih metode ')
let bill2 = wow.questionInt('input bilangan kedua ')

if (metod == '+') {
    console.log(bill1 + bill2)
} else {
    if (metod == '-') {
        console.log(bill1 - bill2)
    } else {
        if (metod == 'x') {
            console.log(bill1 * bill2)
        } else {
            if (metod == '%') {
                console.log(bill1 / bill2)
            } else {
                console.log('masukan metode yang benar')
            }
        }

    }
}