/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/stores`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */


// Index Route (GET/Read): Will display all cookies
router.get('/', function (req, res) {
    db.Recipe.find({})
        .then(recipe => {
            res.render('recipes/recipe-index', {
                Recipe: recipe
            })
        })
})


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('recipes/create-recipe')
})


// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new cookie document using the form data, 
// and redirects the user to the new cookie's show page
router.post('/', (req, res) => {
    console.log(req.body)
    db.Recipe.create(req.body)
        .then(recipe => res.redirect('/recipes/' + recipe._id))
})


// Show Route (GET/Read): Will display an individual cookie document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Recipe.findById(req.params.id)
        .then(recipe => {
            res.render('recipes/recipe-details', {
                Recipe: recipe
                })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})


// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing cookie
router.get('/:id/edit', (req, res) => {
    db.Recipe.findById(req.params.id)
        .then(recipe => {
            // console.log(recipe)
            res.render('recipes/recipe-edit', {
                Recipe: recipe
            })
        })
})


// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified cookie document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    // console.log(req.body)
    db.Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(recipe => res.redirect('/recipes/' + recipe._id))
})


// Destroy Route (DELETE/Delete): This route deletes a cookie document 
// using the URL parameter (which will always be the cookie document's ID)
router.delete('/:id', (req, res) => {
    db.Recipe.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/recipes/'))
})


/* Export these routes so that they are accessible in `stores.js`
--------------------------------------------------------------- */
module.exports = router
