sentence='good morning all'

//print all vowels from the string

vowels=['a','e','i','o','u','A','E','I','O','U']
character=sentence.split('')
for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}

console.log('-----------------------------------------------------------------');

//or

// str=sentence.split('')
// vowel=str.filter(item=>item=='a'||item=='e'||item=='i'||item=='o'||item=='u')
// console.log(vowel);

character.filter(char=>vowels.includes(char)).forEach(element => {console.log(element)});

//Array.from

Array.from(sentence).filter(char=>vowels.includes(char)).forEach(element => {console.log(element)});   


