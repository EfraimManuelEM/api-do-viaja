/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
    }
  }
  'auth.access_token.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_token_controller').default['store']>>>
    }
  }
  'auth.access_token.me': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/auth/me'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_token_controller').default['me']>>>
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'new_account.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/user'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['index']>>>
    }
  }
  'new_account.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['show']>>>
    }
  }
  'new_account.update': {
    methods: ["PUT"]
    pattern: '/api/v1/user'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['update']>>>
    }
  }
  'new_account.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/user'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['destroy']>>>
    }
  }
  'viagems.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/viagem'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/viagems_controller').default['index']>>>
    }
  }
  'viagems.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/viagem/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/viagems_controller').default['show']>>>
    }
  }
  'viagems.store': {
    methods: ["POST"]
    pattern: '/api/v1/viagem'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/viagems_controller').default['store']>>>
    }
  }
  'viagems.update': {
    methods: ["PUT"]
    pattern: '/api/v1/viagem/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/viagems_controller').default['update']>>>
    }
  }
  'viagems.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/viagem/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/viagems_controller').default['destroy']>>>
    }
  }
  'assentos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/assento'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assentos_controller').default['index']>>>
    }
  }
  'assentos.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/assento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assentos_controller').default['show']>>>
    }
  }
  'assentos.store': {
    methods: ["POST"]
    pattern: '/api/v1/assento'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assentos_controller').default['store']>>>
    }
  }
  'assentos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/assento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assentos_controller').default['destroy']>>>
    }
  }
  'assentos.update': {
    methods: ["PUT"]
    pattern: '/api/v1/assento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/assentos_controller').default['update']>>>
    }
  }
  'pagamentos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/pagamento'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pagamentos_controller').default['index']>>>
    }
  }
  'pagamentos.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/pagamento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pagamentos_controller').default['show']>>>
    }
  }
  'pagamentos.store': {
    methods: ["POST"]
    pattern: '/api/v1/pagamento'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pagamentos_controller').default['store']>>>
    }
  }
  'pagamentos.update': {
    methods: ["PUT"]
    pattern: '/api/v1/pagamento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pagamentos_controller').default['update']>>>
    }
  }
  'pagamentos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/pagamento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pagamentos_controller').default['destroy']>>>
    }
  }
}
