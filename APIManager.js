//This is the class that will manage all your APIs

class APIManager {
    constructor() {
      //  this.data = {}
    }

    getRandomUsers(){
        const userAPI = new RandomUserAPI()
        userAPI.request()
    }

    getRandomQuote(){
        const quotesAPI = new KanyeAPI()
        quotesAPI.request()
    }

    getRandomPokemon(){
        const pokemonAPI = new PokeAPI()
        pokemonAPI.request()
    }

    getRandomText(){
        const baconAPI = new BaconAPI()
        baconAPI.request()
    }
}
