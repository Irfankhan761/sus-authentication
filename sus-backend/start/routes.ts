/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
const ServicespagesController = () => import('#controllers/servicespages_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// router.post('/register', [AuthController, 'register'])
// router.post('/login', [AuthController, 'login'])

router
  .group(() => {
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
  })
  .prefix('user')
router
  .group(() => {
    router.post('/addServiceCard', [ServicespagesController, 'addServiceCard'])
    router.get('/getServiceCard', [ServicespagesController, 'getServiceCard'])
    router.put('/updateServiceCard/:id', [ServicespagesController, 'updateServiceCard'])
    router.delete('/delelteServiceCard/:id', [ServicespagesController, 'delelteServiceCard'])
  })
  .prefix('/services')
router
  .group(() => {
    router.post('/addServiceDetail', [ServicespagesController, 'addServiceDetail'])

    router.get('/getServiceDetail/:id', [ServicespagesController, 'getServiceDetail'])

    router.put('/updateServiceDetail/:id', [ServicespagesController, 'updateServiceDetail'])
    router.delete('/deleteServiceDetail/:id', [ServicespagesController, 'deleteServiceDetail'])
  })
  .prefix('/servicedetails')
