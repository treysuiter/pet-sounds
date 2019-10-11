console.log("snorpy")

const myPet = {
    name: "Biscuit",
    species: "Cat",
    nicknames: ["Bisky", "BeBe", "Asshole"],
    age: 10,
    meow: function () {
        console.log("meow")
    },
    purr: function () {
        console.log("purrrrrrr")
    },
    whine: function () {
        console.log("waaaaaah")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes("fish") || toy.includes("mouse")) {
            this.favoriteToys.push(toy)
        }
    }
}

myPet.meow()
myPet.purr()
myPet.whine()

myPet.play("fish toy")
myPet.play("mouse thing")
myPet.play("ball")

console.log(myPet.favoriteToys)
