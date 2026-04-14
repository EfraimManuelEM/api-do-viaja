import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.me': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'new_account.index': { paramsTuple?: []; params?: {} }
    'new_account.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_account.update': { paramsTuple?: []; params?: {} }
    'new_account.destroy': { paramsTuple?: []; params?: {} }
    'viagems.index': { paramsTuple?: []; params?: {} }
    'viagems.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'viagems.store': { paramsTuple?: []; params?: {} }
    'viagems.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'viagems.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.index': { paramsTuple?: []; params?: {} }
    'assentos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.store': { paramsTuple?: []; params?: {} }
    'assentos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.index': { paramsTuple?: []; params?: {} }
    'pagamentos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.store': { paramsTuple?: []; params?: {} }
    'pagamentos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'auth.access_token.me': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'new_account.index': { paramsTuple?: []; params?: {} }
    'new_account.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'viagems.index': { paramsTuple?: []; params?: {} }
    'viagems.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.index': { paramsTuple?: []; params?: {} }
    'assentos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.index': { paramsTuple?: []; params?: {} }
    'pagamentos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'auth.access_token.me': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'new_account.index': { paramsTuple?: []; params?: {} }
    'new_account.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'viagems.index': { paramsTuple?: []; params?: {} }
    'viagems.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.index': { paramsTuple?: []; params?: {} }
    'assentos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.index': { paramsTuple?: []; params?: {} }
    'pagamentos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_token.store': { paramsTuple?: []; params?: {} }
    'viagems.store': { paramsTuple?: []; params?: {} }
    'assentos.store': { paramsTuple?: []; params?: {} }
    'pagamentos.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'new_account.update': { paramsTuple?: []; params?: {} }
    'viagems.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'new_account.destroy': { paramsTuple?: []; params?: {} }
    'viagems.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'assentos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagamentos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}