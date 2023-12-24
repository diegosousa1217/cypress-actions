const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQzODRmODRjLTE0ODItNDVjYy05NjI1LTk3YzE4ZjYxY2ExZS0xNzAzMzc1NDYwMTk3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmFkYWViZDEtY2NkZC00YzI5LWFhZDctMDVhYjNiZjg1N2VjIiwidHlwZSI6InQifQ.snxPuJ1knIlAhVvT93G72dsb6gFr5gnEt4YSsvZw_h4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
