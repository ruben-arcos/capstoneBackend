// all this do is to show a message, we then connect this to messageRoutes.js, then we export it, then on main.js, we require, and use it

// Explanation:
// This code defines two functions: hello and privateHello, which are used to handle requests and responses for displaying messages.
// The hello function displays a public message, and the privateHello function displays a private message meant for logged-in users.
// These functions will be used in the messageRoutes.js module.
// After connecting the functions to messageRoutes.js, they will be exported to main.js
// In the main.js file, the exported functions will be required and used to handle incoming requests.


// Define the hello function to handle public messages
let hello = (req, res) => {
    // Log a message indicating the function has been called
    console.log('hello() from messages controller');
    // Respond with a public hello message
    res.send('Hello, this is a public hello')
}

// Define the privateHello function to handle private messages
let privateHello = (req, res) => {
    // Log a message indicating the function has been called
    console.log('Private hello from message controller')
    // Respond with a private hello message for logged-in users
    res.send('Hello! You are logged in')
}

// Export the hello and privateHello functions for use in other modules
module.exports = {
    hello,
    privateHello
}