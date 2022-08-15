export function resultOk<T = Record>(result: T, { msg = 'ok' } = {}) {
  return {
    code: 0,
    msg,
    result,
  }
}

export function resultError<T = Record>(result: T, { msg = 'error' } = {}) {
  return {
    code: -1,
    msg,
    result,
  }
}
