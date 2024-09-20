const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        // Verifica el nombre del archivo
        console.log('Archivo recibido:', file.originalname);
        cb(null, uuidv4() + '-' + file.originalname); // Nombre del archivo
    }
});

const upload = multer({ storage: storage });

// Asegurarse de que el body parser está antes de las rutas
router.use(express.json()); // Si usas JSON en el body
router.use(express.urlencoded({ extended: true })); // Si usas datos codificados en URL

// Definición de rutas
router
    .get('/', productosController.get)
    .get('/:id', productosController.getById)
    .post('/', upload.array('imagenes', 3), productosController.create)
    .put('/:id', upload.array('imagenes', 3), productosController.update)
    .delete('/:id', productosController._delete)

module.exports = router;
