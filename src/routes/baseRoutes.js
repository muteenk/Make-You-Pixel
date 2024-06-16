import express from 'express'

const baseRouter = new express.Router();

baseRouter.route("/").get((req, res) => {
    res.status(200).render("index.ejs")
})

export default baseRouter;