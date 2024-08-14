//Singleton Method of Object

// const InstagramUser =new Object();   Singleton Object
const InstagramUser = {} //Non-Singleton Object

InstagramUser.Id = '01'
InstagramUser.Name = 'Abhi'
InstagramUser.Email = 'abhi@gmail.com'
InstagramUser.isLoggedIn = false

console.log(InstagramUser);

const X_User= {
    Email: 'abhi@gmail.com',
    UserName: {
        UserfullName: {
            FirstName: 'John',
            LastName: 'Carter'
     
       },
       Password :'password@123'
    },
    isLoggedIn: false
}

console.log(X_User.UserName);
