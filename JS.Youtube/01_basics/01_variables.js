const accountId = 144553
let accountEmail = "priyank@gmail.com"
var accountPassword = "12345"
accountCity = "Aligarh"

// accountId = 2(Not allowed)
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Agra"
/*
prefer not too use var because of issue in block scope and functional scope

*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
