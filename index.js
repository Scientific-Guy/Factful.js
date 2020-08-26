// Greet Message
console.log('Thanks for using Factful.js')

// Importing files
// 1. Fact Files
const emojiFacts = require('./utils/facts/emoji.json')
const spaceFacts = require('./utils/facts/space.json')
const computerFacts = require('./utils/facts/computer.json')

// 2. Importing Other Files
const nasaImages = require('./utils/others/nasa.json')

// 4. Code starts

function fact () {
  const catFacts = require("cat-facts").random()
  const dogFacts = require("dog-facts").random()
  const covidFacts = require("covid-facts").random()
  let allFacts = [
    catFacts, dogFacts, covidFacts, emojiFacts[Math.floor(Math.random() * emojiFacts.length)], spaceFacts[Math.floor(Math.random() * spaceFacts.length)], computerFacts[Math.floor(Math.random() * computerFacts.length)]
  ]
  const all = allFacts[Math.floor(Math.random() * allFacts.length)], emoji = emojiFacts[Math.floor(Math.random() * emojiFacts.length)], space = spaceFacts[Math.floor(Math.random() * spaceFacts.length)], cat = catFacts, dog = dogFacts, covid = covidFacts, computer = computerFacts[Math.floor(Math.random() * computerFacts.length)]

  return{
    all, emoji, space, cat, dog, covid, computer
  }
}

function nasa(){
  return nasaImages[Math.floor(Math.random() * nasaImages.length)]
}

// 5. Export all Modules
module.exports.fact = fact
module.exports.nasa = nasa
module.exports.version = require('./package.json').version
