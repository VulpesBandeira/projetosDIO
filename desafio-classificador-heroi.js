let nomeHeroi = 'Wolverine'
let xpHeroi = 0


for(let i = 0; i < 10500; i  += 1000){
	xpHeroi += 2000
    console.log('O herói ' + '' + nomeHeroi + ' '+ 'está no nível' + ' ' + i)


if(xpHeroi <= 1000){
	console.log('Ferro')
    
} else if (xpHeroi >= 1001 && xpHeroi <= 2000 ){
	console.log('Bronze')
    
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
	console.log('Prata')
    
} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
	console.log('Ouro')
    
} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
	console.log('Platina')

} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
	console.log('Ascendente')

} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
	console.log('Imortal')

} else {
	console.log('Radiante')
	
}

}
