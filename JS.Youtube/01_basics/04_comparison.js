//console.log("2">1); // problem occurs after data changes

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0); //comparison and equality check work differently
// console.log(null!=0); 
// the reason is that an equality check == and comparisons <><=<= work differently. comparisons convert null to a number, treating it as 0
// that's why (3) null>=0 is true and (1) null > 0 false and it can give null sometimes NaN too


//console.log(undefined == 0); //and it give false for other operations too 
//and we should avoid these confusing conversions too make our code readable 

// Strict check(===) not only checks value but its data type also

