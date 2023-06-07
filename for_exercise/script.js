/* 1. Crea un programa que imprima en consola los números impares del 1 al 50. */

for (let index = 0; index <= 50; index++) {
    console.log([index]);

}

/*2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, 
mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido
 por el usuario. https://pastebin.com/Zzk8g7Z6.*/

let userInput = parseInt(prompt("Por favor ingresa un número")) 

const pokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon',
    'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie','metapod',
    'butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot',
    'rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu',
    'sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m',
    'nidorino','nidoking','clefairy','clefable','vulpix', 'ninetales','jigglypuff',
    'wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect',
    'venonat','venomoth','diglett','dugtrio','meowth','persian', 'psyduck','golduck',
    'mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath',
    'abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell',
    'victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash',
    'slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel',
    'dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix',
    'drowzee','hypno','krabby','kingler','voltorb']

    for (let index = 0; index <= userInput; index++) {
        if (index % 5 == 0) {
            console.log(pokemons[index]);
            
        }
        
    }


/*3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los 
elementos que son tipo número.*/


const userArray = [4, "dos", 8, "tres", 5,9,1, "cero"];

for (let index = 0; index < userArray.length; index++) {
    if (isNaN(userArray[index])) {  
      console.log(); 
        
    } else{
        console.log(userArray[index]);
    }
}