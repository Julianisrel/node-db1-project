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
        res.json(accounts)
    } catch (err) {
        next(err)
    }
})
// Create new account
// router.post("/", async (req, res, next) => {
//     try {
//         const [id] = await db
//         .insert ({
//             name: req.body.name,
//             budget: req.body.budget
//         })
//         .into("accounts")
//
//         const account = await db("accounts")
//             // .select("*")
//             // .from("accounts")
//             .where("id", id)
//             // .limit(1)
//             .first()
//         res.status(201).json(account)
//     } catch (err){
//         next(err)
//     }
// })
// Update Account
// router.post("/", async (req, res, next) => {
//     try {
//         const [id] = await db
//         .insert ({
//             name: req.body.name,
//             budget: req.body.budget
//         })
//         .into("accounts")
//
//         const account = await db("accounts")
//             // .select("*")
//             // .from("accounts")
//             .where("id", id)
//             // .limit(1)
//             .first()
//         res.status(201).json(account)
//     } catch (err){
//         next(err)
//     }
// })
// Delete Account
// router.delete("/:id", async (req, res, next) => {
//     try {
//         await db("accounts")
//         .where("id", req.params.id)
//         .delete()
//
//         res.status(200).json({account: "your account has been deleted"})
//     }   catch(err){
//         next(err)
//     }
// })



// // Create new account
// router.post("/new", async (req, res, next) => {
//     try {
//         const accountId = await db
//         .insert ({
//             name: req.body.name || req.query.name,
//             budget: req.body.budget || req.query.budget
//         })
//         .into("accounts")
//         const account = await db
//         .select("*")
//         .from("accounts")
//         .where("id", accountId)
//         .limit(1)
//         res.json(account)
//     } catch (err){
//         next(err)
//     }
// })

module.exports = router