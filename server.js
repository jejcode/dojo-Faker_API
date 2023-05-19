const express = require("express");
const { faker } = require('@faker-js/faker')
const app = express();
const port = 8000;

app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )
//functions to create new objects
const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.number.int()
    }
    return newFakeUser
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.number.int(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newFakeCompany
}

//api routes
app.get("/api/users/new", (req,res) => {
    res.json(createUser())
})
app.get("/api/companies/new", (req,res) => {
    res.json(createCompany())
})
app.get("/api/user/company", (req,res) => {
    res.json([createUser(),createCompany()])
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );