function checkUserValid(goodUsers){
    return function allUSerValid(submittedUsers)
    {
        return submittedUsers.every(x=>x.id === goodUsers.id);
    };
}
console.log(checkUserValid([{id:1,id:2,id:3}]));
module.exports = checkUserValid;