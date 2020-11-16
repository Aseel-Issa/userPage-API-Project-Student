
let quote ={text: ''}
let mainUser = {}
let friendsList = {friends: []}
let pokemon = {}
let about = {meat: ''}

class API {
    constructor(url, dataType) {
        this.url = url
        this.dataType = dataType
    }

    request(callback) {
        $.ajax({
            url: this.url,
            dataType: this.dataType,
            success: function (data) {
              //  console.log(data)
              callback(data)
            }
        });
    }

}


class RandomUserAPI extends API {
    constructor() {
        super('https://randomuser.me/api/?results=7&inc=name,location,picture', 'json')
    }

    successMethod(data) {
        mainUser = {
            firstName: data.results[0].name.first,
            lastName: data.results[0].name.last,
            city: data.results[0].location.city,
            state: data.results[0].location.state,
            picture: data.results[0].picture
        }
        for (let i=1; i<data.results.length; i++) {
            friendsList.friends[i-1] = {
                firstName: data.results[i].name.first,
                lastName: data.results[i].name.last
            }
        }
        console.log(mainUser)
        console.log(friendsList)
    }

    request() {
        super.request(this.successMethod)
    }
}

class KanyeAPI extends API {
    constructor() {
        super('https://api.kanye.rest', 'json')
    }

    successMethod(data) {
        quote.text = data.quote
        console.log(quote.text)
    }

    request() {
        super.request(this.successMethod)
    }
}

class PokeAPI extends API {
    constructor() {
        const ran = Math.floor(Math.random() * Math.floor(949))
        super(`https://pokeapi.co/api/v2/pokemon/${ran}/`, 'json')
    }

    successMethod(data) {
        pokemon = {
            name: data.name,
            picture: data.sprites.front_default
        }
        console.log(pokemon)
    }

    request() {
        super.request(this.successMethod)
    }
}

class BaconAPI extends API {
    constructor() {
        super(`https://baconipsum.com/api/?type=meat-and-filler`, 'json')
        this.result = ''
    }

    successMethod(data) {
        about.meat = data
        console.log(about.meat)
    }

    request() {
        super.request(this.successMethod)
    }
}