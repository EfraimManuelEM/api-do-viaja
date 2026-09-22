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
  'auth.access_token.request_code': {
    methods: ["POST"]
    pattern: '/api/v1/auth/code'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').requestCodeValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').requestCodeValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_token_controller').default['requestCode']>>>
    }
  }
  'auth.access_token.verify_code': {
    methods: ["POST"]
    pattern: '/api/v1/auth/veri'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').verifyCodeValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').verifyCodeValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_token_controller').default['verifyCode']>>>
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
  'accesses.store': {
    methods: ["POST"]
    pattern: '/api/v1/ad'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/adm').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/adm').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/accesses_controller').default['store']>>>
    }
  }
  'adms.store': {
    methods: ["POST"]
    pattern: '/api/v1/adm'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/adm').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/adm').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/adms_controller').default['store']>>>
    }
  }
  'adms.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/adm'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/adms_controller').default['index']>>>
    }
  }
  'adms.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/adm/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/adms_controller').default['show']>>>
    }
  }
  'adms.update': {
    methods: ["PUT"]
    pattern: '/api/v1/adm/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/adms_controller').default['update']>>>
    }
  }
  'adms.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/adm/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/adms_controller').default['destroy']>>>
    }
  }
  'accesses.me': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/mee'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/accesses_controller').default['me']>>>
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
  'leitors.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/ler'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/leitors_controller').default['index']>>>
    }
  }
  'leitors.store': {
    methods: ["POST"]
    pattern: '/api/v1/ler'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/leitors_controller').default['store']>>>
    }
  }
  'leitors.update': {
    methods: ["PUT"]
    pattern: '/api/v1/ler/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/leitors_controller').default['update']>>>
    }
  }
  'leitors.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/ler/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/leitors_controller').default['destroy']>>>
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
  'pagamentos.meus_pagamentos': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/paga'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/pagamentos_controller').default['meusPagamentos']>>>
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
