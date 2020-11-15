
class Renderer {

    renderMainUser() {
        $('.user-container').empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(mainUser);
        $('.user-container').append(newHTML);
    }

    renderFriends() {
        $('.friends-container').empty()
        const source = $('#firends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(friendsList);
        $('.friends-container').append(newHTML);

    }

    renderPokemon() {
        $('.pokemon-container').empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemon);
        $('.pokemon-container').append(newHTML);

    }

    renderAbout() {
        $('.meat-container').empty()
        const source = $('#about-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(about);
        $('.meat-container').append(newHTML);
    }

    renderQuote(){
        $('.quote-container').empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(quote);
        $('.quote-container').append(newHTML);
    }
}