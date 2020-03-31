const controller = require('../controllers/' + 'users');
const router = require('express').Router();

/** [GET] /users/
 * 
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successfull response tog et all users
 */
router.get('/', controller.getAll);

/** [GET] /users/:id
 * 
 * @swagger
 * /users/{id}:
 *  get:
 *    description: Use to request one users
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Numeric ID of the user to get
 *    responses:
 *      '200':
 *        description: A successfull response to get ONE user
 */
router.get('/:id', controller.getOne);


/** [POST] /users/:id
 * 
 * @swagger
 * /users:
 *  post:
 *    description: Use to create one users
 *    responses:
 *      '200':
 *        description: A successfull response to create ONE user
 */
router.post('/', controller.createOne);


/** [PUT] /users/:id
 * 
 * @swagger
 * /users:
 *  put:
 *    description: Use to update one users
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Numeric ID of the user to get
 *    responses:
 *      '200':
 *        description: A successfull response to update ONE user
 */
router.put('/:id', controller.updateOne);


/** [DELETE] /users/:id
 * 
 * @swagger
 * /users:
 *  delete:
 *    description: Use to update one users
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Numeric ID of the user to get
 *    responses:
 *      '200':
 *        description: A successfull response to update ONE user
 */
router.delete('/:id', controller.deleteOne);

module.exports = router;