// Do not change any of the function names

function makeCat(name, age) {
 var newCat = {
     name: name,
     age: age,
     meow: function(){
         return 'Meow!';
     }
 };
    return newCat;
}

function addProperty(object, property) {
         object[property]= null;
    return object;
} 

function invokeMethod(object, method) {
   object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
    mysteryNumberObject.mysteryNumber *= 5;
    return mysteryNumberObject.mysteryNumber;
}

function deleteProperty(object, property) {
    delete object[property];
    return object;
}

function newUser(name, email, password) {
    var Person = {
        name: name,
        email: email,
        password: password
    };
    return Person;
}

function hasEmail(user) {
 if (user.email){
     return true;
 }else {
     return false;
 }
}

function hasProperty(object, property) {
    for (var key in object){
        if (key === property){
            return true;
        }
        return false;
    }
}

function verifyPassword(user, password) {
    if (user.password === password){
        return true;
    }else 
        return false;
}

function updatePassword(user, newPassword) {
    user.password = newPassword;
    return user;
}

function addFriend(user, newFriend) {
    user.friends.push(newFriend);
    return user;
}

function setUsersToPremium(users) {
   for (var i=0; i<users.length; i++){
        users[i].isPremium=true;
    } return users;
}

function sumUserPostLikes(user) {
    var totalLikes =0;
    for (var i=0; i<user.posts.length; i++){
        totalLikes += user.posts[i].likes;
    } return totalLikes;
}

function addCalculateDiscountPriceMethod(storeItem) {
    storeItem.calculateDiscountPrice = function(){
        var discountPrice = storeItem.price - (storeItem.price*storeItem.discountPercentage);
        return(discountPrice);
    };
    return(storeItem);
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
