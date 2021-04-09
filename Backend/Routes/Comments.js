'use strict'

const express = require('express');
const CommentController = require('../Controllers/Comments');

const router = express.Router();

const multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/comments'});
//rutas de prueba
router.get('/test-de-controlador', CommentController.test);

//rutas útiles
router.post('/save', CommentController.save);
router.get('/comments/:last?', CommentController.getComments);
router.get('/comment/:id', CommentController.getOneComment);
router.put('/comment/:id', CommentController.update);
router.delete('/comment/:id', CommentController.delete);
router.post('/upload-imagen/:id', md_upload, CommentController.upload);
router.get('/search/:search', CommentController.search);



module.exports = router;
