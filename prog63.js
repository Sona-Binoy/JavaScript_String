
//replace

string='I joined Microsoft ,but office of Microsoft is too far'
str1=string.replace('Microsoft','Google')//it replaces only first searchvalue
console.log(str1);

str2=string.replaceAll('Microsoft','Google')//it replaces all the searchvalue in the string
console.log(str2);

// remove space using replace()

str='hello world'
console.log(str.replace(' ',''));