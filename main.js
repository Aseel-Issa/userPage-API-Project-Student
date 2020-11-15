



// setTimeout(function(){ 
//     const render = new Renderer()
//     render.renderFriends()
//  }, 5000);

//  setTimeout(function(){ 
//     const render = new Renderer()
//     render.renderAbout()
//  }, 5000);

//  setTimeout(function(){ 
//     const render = new Renderer()
//     render.renderQuote()
//  }, 5000);

//  setTimeout(function(){ 
//     const render = new Renderer()
//     render.renderPokemon()
//  }, 5000);

//  setTimeout(function(){ 
//     const render = new Renderer()
//     render.renderMainUser()
//  }, 5000);

$('#load').click(function(){
    const manager = new APIManager()
    manager.getRandomPokemon()
    manager.getRandomQuote()
    manager.getRandomText()
    manager.getRandomUsers()
})

$('#display').click(function(){
    const render = new Renderer()
    render.renderFriends()
    render.renderAbout()
    render.renderQuote()
    render.renderPokemon()
    render.renderMainUser()
})





