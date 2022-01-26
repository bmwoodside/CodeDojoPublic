const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const User = {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
};

const Company = {
    _id:faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    },
};

app.get("/api/users/new", (req, res) => {
    res.json( User );
});

app.get("/api/companies/new", (req, res) => {
    res.json( Company );
});

app.get("/api/user/company", (req, res) => {
    res.json( {User, Company} );
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );