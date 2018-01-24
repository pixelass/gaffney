import trig1 from '@gaffney/trig1'
import trig2 from '@gaffney/trig2'
import conway from '@gaffney/conway'
import simple from '@gaffney/simple'

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

  trig1(...args) {
    return trig1(...args)
  }

  conway(...args) {
    return conway(...args)
  }

  simple(...args) {
    return simple(...args)
  }
}

export default Gaffney
