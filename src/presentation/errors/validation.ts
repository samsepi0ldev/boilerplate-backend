export class ParamInUserError extends Error {
  constructor(paramName: string) {
    super(`Param ${paramName} in use`)
    this.name = 'ParamInUserError'
  }
}
