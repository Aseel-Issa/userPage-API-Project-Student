
Handlebars.registerHelper("capitalizeFirst", function (name) {
    const first = name.charAt(0).toUpperCase()
    return first + name.slice(1)
});

const displayUsersInDDL = function(){
    data = []
    let record
    for (let i = 0; i < localStorage.length; i++) {
        record = JSON.parse(localStorage.getItem(i))
        data.push({
            id: i,
            firstName: record.mainUser.firstName,
            lastName: record.mainUser.lastName
        })
    }
    const render = new Renderer()
    render.renderUserSelector(data)
}

const displayUser = function(){
    const render = new Renderer()
    render.renderFriends()
    render.renderAbout()
    render.renderQuote()
    render.renderPokemon()
    render.renderMainUser()
}

$('#load').click(function () {
    const manager = new APIManager()
    manager.getRandomPokemon()
    manager.getRandomQuote()
    manager.getRandomText()
    manager.getRandomUsers()
})

$('#display').click(function () {
    displayUser()
})

$('#saveUser').click(function () {
    let id = localStorage.length
    let user = {
        quote,
        mainUser,
        friendsList,
        pokemon,
        about
    }
    localStorage.setItem(id, JSON.stringify(user))
    displayUsersInDDL()
    
})

$('#loadUser').click(function () {
    let id = $('#userSelector').find(":selected").data().id
    let user = JSON.parse(localStorage.getItem(id))
    quote = user.quote
    mainUser = user.mainUser
    friendsList = user.friendsList
    pokemon = user.pokemon
    about = user.about
    displayUser()
})

const initPage = function(){
    displayUsersInDDL()
}

initPage()




