const stdout = require('stdout-stream')

class UnitLogger {
  fatal (message = '', error, meta = {}) {
    stdout.write()
  }

  error (message = '', error, meta = {}) {

  }

  warn (message = '', meta = {}) {

  }

  info (message = '', meta = {}) {

  }
}

module.exports = { UnitLogger }
