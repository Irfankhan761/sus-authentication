// start/kernel.ts
import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

// Error handler
server.errorHandler(() => import('#exceptions/handler'))

// Middleware for all requests
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
])

// Middleware for registered routes
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/auth/initialize_auth_middleware'),
])

// Named middleware
export const middleware = router.named({
  auth: () => import('#middleware/auth_middleware'),
})
