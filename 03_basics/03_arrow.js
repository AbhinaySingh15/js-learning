const user = {
    username: "abhinay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); /**here this. is acting as what belongs to current context. context means what its value is. */
        //console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);



/**this. is only work with objects not with functiom*/

// function chai(){
//     let username = "histesh"
//     console.log(this.username);
// }

// chai()


