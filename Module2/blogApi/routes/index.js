const express = require('express')
const router = express.Router()

const posts = require('./posts.js')
const comments = require('./comments.js')

// Posts routine
router.get('/', function(req, res) {
    posts.getPosts(req, res)
})

router.get('/posts', function(req, res) {
    posts.getPosts(req, res)
})

router.post('/', function(req, res) {
    posts.addPost(req, res)
})

router.post('/posts', function(req, res) {
    posts.addPost(req, res)
})

router.put('/posts/:postId', function(req, res) {
    posts.updatePost(req, res)
})

router.delete('/posts/:postId', function(req, res) {
    posts.removePost(req, res)
})

// Comments routing
router.get('/posts/:postId/comments', function(req, res) {
    comments.getComments(req, res)
})

router.post('/posts/:postId/comments', function(req, res) {
    comments.addComment(req, res)
})

router.put('/posts/:postId/comments/:commentId', function(req, res) {
    comments.updateComment(req, res)
})

router.delete('/posts/:postId/comments/:commentId', function(req, res) {
    comments.removeComment(req, res)
})

module.exports.router = router