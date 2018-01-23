import trig2 from '@gaffney/trig2'

const defaultOptions = {}

class Gaffney {
  constructor(options = {}) {
    this.options = {
      ...defaultOptions,
      ...options
    }
  }
  trig2(...args) {
    return trig2(...args)
  }
}

export default Gaffney
