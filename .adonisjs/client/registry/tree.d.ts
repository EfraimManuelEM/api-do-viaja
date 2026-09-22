/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      requestCode: typeof routes['auth.access_token.request_code']
      verifyCode: typeof routes['auth.access_token.verify_code']
      me: typeof routes['auth.access_token.me']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
  }
  newAccount: {
    index: typeof routes['new_account.index']
    show: typeof routes['new_account.show']
    update: typeof routes['new_account.update']
    destroy: typeof routes['new_account.destroy']
  }
  accesses: {
    store: typeof routes['accesses.store']
    me: typeof routes['accesses.me']
  }
  adms: {
    store: typeof routes['adms.store']
    index: typeof routes['adms.index']
    show: typeof routes['adms.show']
    update: typeof routes['adms.update']
    destroy: typeof routes['adms.destroy']
  }
  viagems: {
    index: typeof routes['viagems.index']
    show: typeof routes['viagems.show']
    store: typeof routes['viagems.store']
    update: typeof routes['viagems.update']
    destroy: typeof routes['viagems.destroy']
  }
  assentos: {
    index: typeof routes['assentos.index']
    show: typeof routes['assentos.show']
    store: typeof routes['assentos.store']
    destroy: typeof routes['assentos.destroy']
    update: typeof routes['assentos.update']
  }
  leitors: {
    index: typeof routes['leitors.index']
    store: typeof routes['leitors.store']
    update: typeof routes['leitors.update']
    destroy: typeof routes['leitors.destroy']
  }
  pagamentos: {
    index: typeof routes['pagamentos.index']
    meusPagamentos: typeof routes['pagamentos.meus_pagamentos']
    show: typeof routes['pagamentos.show']
    store: typeof routes['pagamentos.store']
    update: typeof routes['pagamentos.update']
    destroy: typeof routes['pagamentos.destroy']
  }
}
