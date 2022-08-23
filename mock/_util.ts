export function resultOk<T = Record>(data: T, { msg = 'success' } = {}) {
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
