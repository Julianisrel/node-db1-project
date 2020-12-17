const express = require('express');
const db = require('../data/dbConfig')
const router = express.Router();


router.get("/test", async (req, res, next) => {
    try {
     const accounts = await db.select("*").from("accounts")
     res.json(accounts)
    } catch (err) {
        next(err)
    }
})
// Read account by ID
router.get("/:id", async (req, res, next) => {
    try {
        const account = await db
        .select("*")
        .from("accounts")
        .where("id", req.params.id)
        .limit(1)
        res.json(account)
    } catch (err) {
        next(err)
    }
})
// Create new account
router.post("/new", async (req, res, next) => {
    try {
        const id = await db
        .insert ({
            name: req.body.name,
            budget: req.body.budget
        })
        .into("accounts")

        const account = await db("accounts")
            // .select("*")
            // .from("accounts")
            .where("id", id)
            // .limit(1)
            .first()
        res.status(200).json(account)
    } catch (err){
        next(err)
    }
})
// Update Account
router.post("/:id/update", async (req, res, next) => {
    console.log('body: ', req)
    try {
        // const [id] = await db
        // .insert ({
        //     name: req.body.name,
        //     budget: req.body.budget
        // })
        // .into("accounts")
        console.log('re ', req)
        await db("accounts")
            .select("*")
            .from("accounts")
            .where("id", req.params.id)
            .update({budget: req.body.budget, name: req.body.name})

        const account = await db("accounts")
        .select("*")
        .from("accounts")
        .where("id", req.params.id)
        .first()
        res.status(200).json(account)
    } catch (err){
        next(err)
   }
 })
// Delete Account
router.delete("/:id/delete", async (req, res, next) => {
    try {
        await db("accounts")
        .where("id", req.params.id)
        .delete()

        res.status(200).json({account: "your account has been deleted"})
    }   catch(err){
        next(err)
    }
})





module.exports = router
