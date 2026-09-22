/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('code', [controllers.AccessToken, 'requestCode'])
        router.post('veri', [controllers.AccessToken, 'verifyCode'])
        router.get('me', [controllers.AccessToken, 'me']).use(middleware.auth())
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('/profile', [controllers.Profile, 'show'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
      
      router
        .group(() => {
          router.get('/user', [controllers.NewAccount, 'index'])
          router.get('/user/:id', [controllers.NewAccount, 'show'])
          router.put('/user', [controllers.NewAccount, 'update'])
          router.delete('/user', [controllers.NewAccount, 'destroy'])
      })

      router 
        .group(() => {
          router.post('/ad', [controllers.Accesses, 'store'])
          router.post('/adm', [controllers.Adms, 'store'])
          router.get('/adm', [controllers.Adms, 'index'])
          router.get('/adm/:id', [controllers.Adms, 'show'])
          router.put('/adm/:id', [controllers.Adms, 'update'])
          router.delete('/adm/:id', [controllers.Adms, 'destroy'])
          router.get('mee', [controllers.Accesses, 'me']).use(middleware.auth())
        })

      router
        .group(() => {
          router.get('/viagem', [controllers.Viagems, 'index'])
          router.get('/viagem/:id', [controllers.Viagems, 'show'])
          router.post('/viagem', [controllers.Viagems, 'store'])
          router.put('/viagem/:id', [controllers.Viagems, 'update'])
          router.delete('/viagem/:id', [controllers.Viagems, 'destroy'])
      })

      router 
        .group(() => {
          router.get('/assento', [controllers.Assentos, 'index'])
          router.get('/assento/:id', [controllers.Assentos, 'show'])
          router.post('/assento', [controllers.Assentos, 'store'])
          router.delete('/assento/:id', [controllers.Assentos, 'destroy'])
          router.put('/assento/:id', [controllers.Assentos, 'update'])
        })
 
        router 
          .group(() => {
            router.get('/ler', [controllers.Leitors, 'index'])
            router.post('/ler', [controllers.Leitors, 'store'])
            router.put('/ler/:id', [controllers.Leitors, 'update'])
            router.delete('/ler/:id', [controllers.Leitors, 'destroy'])
          })

      router
        .group(() => {
          router.get('/pagamento', [controllers.Pagamentos, 'index'])
          router.get('/paga', [controllers.Pagamentos, 'meusPagamentos']) 
          router.get('/pagamento/:id', [controllers.Pagamentos, 'show'])
          router.post('/pagamento', [controllers.Pagamentos, 'store'])
          router.put('/pagamento/:id', [controllers.Pagamentos, 'update'])
          router.delete('/pagamento/:id', [controllers.Pagamentos, 'destroy'])
        })

    })


  .prefix('/api/v1') 
