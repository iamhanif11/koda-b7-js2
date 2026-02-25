let belanja = 900000;
let totalBelanja;
if (belanja < 500000){
    totalBelanja = belanja;
}else if (belanja >= 500000 && belanja <= 1000000){
    totalBelanja = belanja - (0.05 * belanja);
}else if (belanja > 1000000) {
    totalBelanja = belanja - (0.1 * belanja);
}

console.log("Total belanja anda adalah: ", totalBelanja)