const express = require('express');
const db = require('../data/dbConfig')

const router = express.Router();

// 


router.get("/", async (req, res, next) => {
    try {
     const accounts = await db.select("*").from("accounts")
    
     res.json(accounts)
    } catch (err) {
        next(err)
    }

})

// 

router.("/", async (req, res, next) => {
    try {

    } catch {
        
    }

})


// 



router.("/", async (req, res, next) => {
    try {

    } catch {
        
    }

})

// 
router.("/", async (req, res, next) => {
    try {

    } catch {
        
    }

})

// 

router.("/", async (req, res, next) => {
    try {

    } catch {
        
    }

})

// 

router.("/", async (req, res, next) => {
    try {

    } catch {
        
    }

})