str='hello'
console.log(str[1]);//e
console.log(str[4]);//o

//check whether the given string is palindrome or not

string='eye'

start=0
end=string.length-1
ispalindrom=true
while(start<end){
    if(string[start]!=start[end]){
        ispalindrom=false
    }
    start++
    end--
}
console.log(!ispalindrom?'palindrom':'  not palindrom');


//or

reverse=''
for(i=string.length-1;i>=0;i--)
{
    reverse+=string[i]
}
console.log(reverse==string?'palindrome':'not palindrome');