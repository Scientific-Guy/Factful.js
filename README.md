# Factful.js
A Package which can give you Random Facts, Random Nasa Images in an easy way! If you can add more facts to the package in this Repo! Go to `/utils/facts` update or create more fact Json files and do a Pull request and help others ;)

# Index
- Importing Module
- Getting Random Facts
- Getting Random Nasa Image
- Typescript Example

# Links
- [GitHub](https://github.com/Scientific-Guy)
- [Discord Server](https://discord.gg/FrduEZd)

## Quick Example
#### 1. Importing Module
```js 
// Import Modules
const factful = require('factful.js')
```

#### 2. Getting Facts
```js 
const facts = factful.fact()

// Getting Random Fact from Random Cateogary
console.log(facts.all)

// Getting Random Fact from a Paticular Cateogary
// Current Cateogaries: emoji, space, cat, dog, covid, computer, food
console.log(facts.emoji)
console.log(facts.space)
console.log(facts.cat)
console.log(facts.dog)
console.log(facts.covid)
console.log(facts.computer)
console.log(facts.food)
```

#### 3. Getting Random Nasa Image
```js 
// Will return you the Image URL not the Image File!
console.log(factful.nasa())
```

#### 4. Typescript Example
```ts
// Import package
import * as factful from 'factful.js'

// Getting Random fact
const facts = factful.fact()

// Getting Random Fact from Random Cateogary
console.log(facts.all)

// Getting Random Fact from a Paticular Cateogary
// Current Cateogaries: emoji, space, cat, dog, covid, computer, food
console.log(facts.emoji)
console.log(facts.space)
console.log(facts.cat)
console.log(facts.dog)
console.log(facts.covid)
console.log(facts.computer)
console.log(facts.food)

// Will return you the Image URL not the Image File!
console.log(factful.nasa())
```

### © Science Spot | Decimal Development - 2020
