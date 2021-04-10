'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Comment = require('../Models/Comments');

//CHECK IN POSTMAN USING x-www-form-urlencoded
const controller = {

    test: (req, res) => {
        return res.status(200).send({
            message: 'Testing controller function'
        });
    },

    save: (req, res) => {
        //Recoger parametros por post
        const params = req.body;
        //Validar datos
        try {
            var validate_name = !validator.isEmpty(params.name);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Faltan datos'
            });
        }
        if (validate_name && validate_content) {
            //Crear el objeto a guardar
            var comment = new Comment();

            //Asignar valores
            comment.name = params.name;
            comment.content = params.content;
            comment.rate = params.rate;

            //Guardar el articulo
            comment.save((err, commentStored) => {
                if (err || !commentStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Comentario no guardado'
                    });
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'sucess',
                    message: 'Comentario guardado'
                });

            })

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Datos no válidos'
            });
        }
    },

    getComments: (req, res) => {

        var query = Comment.find({});
        var last = req.params.last;

        if (last || last !== undefined) {
            query.limit(1);
        }
        query.sort('id').exec((err, comments) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al mostrar comentarios'
                });
            }
            if (!comments) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay comentarios'
                });
            }
            return res.status(200).send({
                status: 'sucess',
                comments
            });
        });

    },

    getOneComment: (req, res) => {

        //recoger el id de la url
        var commentId = req.params.id;
        //comprobar que exista
        if (!commentId) {
            return res.status(404).send({
                status: 'error',
                message: 'El comentario no existe'
            });
        }

        //buscar el articulo
        Comment.findById(commentId, (err, comment) => {
            if (err || !comment) {
                return res.status(500).send({
                    status: 'error',
                    message: 'El comentario no existe'
                });
            }
            //devolverlo
            return res.status(200).send({
                status: 'sucess',
                comment
            });
        });


    },

    update: (req, res) => {

        //Recoger el id del articulo
        var commentId = req.params.id;

        //Recoger los datos del put
        var params = req.body;

        //Validar los datos
        try {
            var validate_name = !validator.isEmpty(params.name);
            var validate_content = !validator.isEmpty(params.content);
            var validate_rate = !validator.isEmpty(params.rate);

        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if (validate_name && validate_content && validate_rate) {
            //Find an update
            Comment.findOneAndUpdate({_id: commentId}, params, {new: true}, (err, commentUpdated) => {
                if (err || !commentUpdated) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Actualización incorrecta'
                    });
                }
                return res.status(200).send({
                    status: 'sucess',
                    comment: commentUpdated
                });

            });
        } else {
            return res.status(500).send({
                status: 'error',
                message: 'Validación incorrecta'
            });
        }
    },

    delete: (req, res) => {
        //recoger el id del comentario
        var commentId = req.params.id;

        //buscar y borrar
        Comment.findOneAndDelete({_id: commentId}, (err, commentRemoved) => {
            if (err || !commentRemoved) {
                return res.status(500).send({
                    status: 'error',
                    message: 'No se ha podido borrar el comentario'
                });
            }

            return res.status(200).send({
                status: 'sucess',
                comment: commentRemoved
            });
        });

    },

    upload: (req, res) => {

        //Recoger el fichero de la petición

        var file_name = 'Imagen no subida...';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        //Conseguir el nombre y la extensión
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        /*LINUX O MAC*/
        //var file_sprit = file_path.split('/');

        //Comprobar la extensión y borrar el fichero si no es valido
        var file_name = file_split[2];
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        //Si es valido, buscar comentario asignar imagen y update
        if (file_ext !== 'png' && file_ext !== 'jpg' && file_ext !== 'jpeg' && file_ext !== 'gif') {
            fs.unlink(file_path, (err) => {
                return res.status(500).send({
                    message: 'La extensión de la imagen no es válida'
                });
            });
        } else {
            Comment.findOneAndUpdate({_id: req.params.id}, {image: file_name}, {new: true}, (err, commentUpdated) => {
                if (err || !commentUpdated) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'No se ha podido actualizar con la foto subida'
                    });
                }
                return res.status(200).send({
                    status: 'sucess',
                    comment: commentUpdated
                });
            })
        }
    },

    search: (req, res) => {

        var searchString = req.params.search;
        Comment.find({"$or": [
                {"name": {"$regex": searchString, "$options": "i"}},
                {"content": {"$regex": searchString, "$options": "i"}},
            ]})
            .sort([['date','descending']])
            .exec((err,comments)=> {
                if(err || !comments) {
                    return res.status(500).send({
                        status: 'sucess',
                       message: 'error en la petición'
                    });
                }
                if(comments.length === 0){
                    return res.status(500).send({
                        status: 'sucess',
                        message: 'No hay comentarios con esa palabra'
                    });
                }
                return res.status(200).send({
                    status: 'sucess',
                    comments
                });
            })

    }
};

module.exports = controller;