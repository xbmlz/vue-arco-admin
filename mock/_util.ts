export function resultOk<T = any>(data: T, { msg = 'success' } = {}) {
  return {
    code: 0,
    msg,
    data,
  }
}

export function resultError(msg = 'Request failed', { code = -1, data = null } = {}) {
  return {
    code,
    msg,
    data,
  }
}

export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}
