/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sumNum(a, b)
{
    if (a === b)
    {
        return (a + b) * 3
    } else
    {
        return a + b
    }
}
console.log('---ex.1---')
console.log(sumNum(4, 4))
console.log(sumNum(2, 4))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkNum(a, b)
{
    if ((a === 50 || b === 50) || (a + b === 50))
    {
        return true
    } else
    {
        return false
    }
}
console.log('---ex.2---')
console.log(checkNum(1, 5))
console.log(checkNum(10, 50))
console.log(checkNum(10, 40))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log('---ex.3---')
function removeChar()
{
    let str = 'string'
    let newStr = str.slice(3)
    console.log(newStr)
}
removeChar()
/*
4)
Create a function to find the largest of three given integers.
*/
console.log('---ex.4---')
function largestNum(a, b, c)
{
    if ((a > b) && (a > c)) 
    {
        console.log('The largest is ', a)
    }
    else if ((b > a) && (b > c))
    {
        console.log('The largest is ', b)
    }
    else if ((c > a) && (c > b))
    {
        console.log('The largest is ', c)
    }
    else
    {
        console.log('i do not know')
    }
}
largestNum(3, 2, 1)
largestNum(6, 4, 5)
largestNum(8, 9, 7)
largestNum(10, 12, 11)
largestNum(13, 14, 15)
largestNum(17, 16, 18)
largestNum(17, 18, 18)
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log('---ex.5---')
function checkTwoNum(a, b)
{
    if ((a >= 40 && a <= 60) || (a >= 70 && a <= 100))
    {
        return true
    }
    else if ((b >= 40 && b <= 60) || (b >= 70 && b <= 100))
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(checkTwoNum(30, 100))
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log('---ex.6---')
function createNewStr(number)
{
    let str = 'striveschool'
    for (let i = 0; i < number; i++)
    {
        console.log(str)
    }
}
createNewStr(3)

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log('---ex.7---')
function displayCity(cityName)
{
    if ((cityName.startsWith('Los')) || (cityName.startsWith('New')))
    {
        return cityName
    } else
    {
        return ''
    }
}
console.log(displayCity('Los Angeles'))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log('---ex.8---')
let arr = [1, 2, 3]
function calcSum()
{
    const sumWithInitial = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
    return sumWithInitial
}
console.log(calcSum())

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/