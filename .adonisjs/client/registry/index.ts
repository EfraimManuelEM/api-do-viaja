/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'auth.access_token.me': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/auth/me',
    tokens: [{"old":"/api/v1/auth/me","type":0,"val":"api","end":""},{"old":"/api/v1/auth/me","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/me","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['auth.access_token.me']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'new_account.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['new_account.index']['types'],
  },
  'new_account.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/user/:id',
    tokens: [{"old":"/api/v1/user/:id","type":0,"val":"api","end":""},{"old":"/api/v1/user/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/user/:id","type":0,"val":"user","end":""},{"old":"/api/v1/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['new_account.show']['types'],
  },
  'new_account.update': {
    methods: ["PUT"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['new_account.update']['types'],
  },
  'new_account.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['new_account.destroy']['types'],
  },
  'viagems.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/viagem',
    tokens: [{"old":"/api/v1/viagem","type":0,"val":"api","end":""},{"old":"/api/v1/viagem","type":0,"val":"v1","end":""},{"old":"/api/v1/viagem","type":0,"val":"viagem","end":""}],
    types: placeholder as Registry['viagems.index']['types'],
  },
  'viagems.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/viagem/:id',
    tokens: [{"old":"/api/v1/viagem/:id","type":0,"val":"api","end":""},{"old":"/api/v1/viagem/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/viagem/:id","type":0,"val":"viagem","end":""},{"old":"/api/v1/viagem/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['viagems.show']['types'],
  },
  'viagems.store': {
    methods: ["POST"],
    pattern: '/api/v1/viagem',
    tokens: [{"old":"/api/v1/viagem","type":0,"val":"api","end":""},{"old":"/api/v1/viagem","type":0,"val":"v1","end":""},{"old":"/api/v1/viagem","type":0,"val":"viagem","end":""}],
    types: placeholder as Registry['viagems.store']['types'],
  },
  'viagems.update': {
    methods: ["PUT"],
    pattern: '/api/v1/viagem/:id',
    tokens: [{"old":"/api/v1/viagem/:id","type":0,"val":"api","end":""},{"old":"/api/v1/viagem/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/viagem/:id","type":0,"val":"viagem","end":""},{"old":"/api/v1/viagem/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['viagems.update']['types'],
  },
  'viagems.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/viagem/:id',
    tokens: [{"old":"/api/v1/viagem/:id","type":0,"val":"api","end":""},{"old":"/api/v1/viagem/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/viagem/:id","type":0,"val":"viagem","end":""},{"old":"/api/v1/viagem/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['viagems.destroy']['types'],
  },
  'assentos.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/assento',
    tokens: [{"old":"/api/v1/assento","type":0,"val":"api","end":""},{"old":"/api/v1/assento","type":0,"val":"v1","end":""},{"old":"/api/v1/assento","type":0,"val":"assento","end":""}],
    types: placeholder as Registry['assentos.index']['types'],
  },
  'assentos.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/assento/:id',
    tokens: [{"old":"/api/v1/assento/:id","type":0,"val":"api","end":""},{"old":"/api/v1/assento/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/assento/:id","type":0,"val":"assento","end":""},{"old":"/api/v1/assento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['assentos.show']['types'],
  },
  'assentos.store': {
    methods: ["POST"],
    pattern: '/api/v1/assento',
    tokens: [{"old":"/api/v1/assento","type":0,"val":"api","end":""},{"old":"/api/v1/assento","type":0,"val":"v1","end":""},{"old":"/api/v1/assento","type":0,"val":"assento","end":""}],
    types: placeholder as Registry['assentos.store']['types'],
  },
  'assentos.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/assento/:id',
    tokens: [{"old":"/api/v1/assento/:id","type":0,"val":"api","end":""},{"old":"/api/v1/assento/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/assento/:id","type":0,"val":"assento","end":""},{"old":"/api/v1/assento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['assentos.destroy']['types'],
  },
  'assentos.update': {
    methods: ["PUT"],
    pattern: '/api/v1/assento/:id',
    tokens: [{"old":"/api/v1/assento/:id","type":0,"val":"api","end":""},{"old":"/api/v1/assento/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/assento/:id","type":0,"val":"assento","end":""},{"old":"/api/v1/assento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['assentos.update']['types'],
  },
  'pagamentos.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/pagamento',
    tokens: [{"old":"/api/v1/pagamento","type":0,"val":"api","end":""},{"old":"/api/v1/pagamento","type":0,"val":"v1","end":""},{"old":"/api/v1/pagamento","type":0,"val":"pagamento","end":""}],
    types: placeholder as Registry['pagamentos.index']['types'],
  },
  'pagamentos.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/pagamento/:id',
    tokens: [{"old":"/api/v1/pagamento/:id","type":0,"val":"api","end":""},{"old":"/api/v1/pagamento/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/pagamento/:id","type":0,"val":"pagamento","end":""},{"old":"/api/v1/pagamento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pagamentos.show']['types'],
  },
  'pagamentos.store': {
    methods: ["POST"],
    pattern: '/api/v1/pagamento',
    tokens: [{"old":"/api/v1/pagamento","type":0,"val":"api","end":""},{"old":"/api/v1/pagamento","type":0,"val":"v1","end":""},{"old":"/api/v1/pagamento","type":0,"val":"pagamento","end":""}],
    types: placeholder as Registry['pagamentos.store']['types'],
  },
  'pagamentos.update': {
    methods: ["PUT"],
    pattern: '/api/v1/pagamento/:id',
    tokens: [{"old":"/api/v1/pagamento/:id","type":0,"val":"api","end":""},{"old":"/api/v1/pagamento/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/pagamento/:id","type":0,"val":"pagamento","end":""},{"old":"/api/v1/pagamento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pagamentos.update']['types'],
  },
  'pagamentos.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/pagamento/:id',
    tokens: [{"old":"/api/v1/pagamento/:id","type":0,"val":"api","end":""},{"old":"/api/v1/pagamento/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/pagamento/:id","type":0,"val":"pagamento","end":""},{"old":"/api/v1/pagamento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['pagamentos.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
