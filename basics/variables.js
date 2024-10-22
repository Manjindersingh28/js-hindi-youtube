const accountID = 1234 //const value which cannot be changed
let accontName = "manjinder" //let declaration can be changed
var accountState= "punjab" //acts same as let but recommended not to use much
let accountNumber;
// Prefer not to use var because of issue in block scope and functional scope


accountState = "bihar" //changong values
accontName ="mani"

console.table([accountID, accontName, accountState, accountNumber]) //getting multiple values in a tabular form.