const stdout = require('stdout-stream')
const stackTrace = require('stack-trace')

class UnitLogger {
  fatal (error, message = '', meta = {}) {
    stdout.write(JSON.stringify({ error: stackTrace.parse(error), message: message || error.message , meta }))
  }

  error (error, message = '', meta = {}) {
    stdout.write(JSON.stringify({ error: stackTrace.parse(error), message: message || error.message , meta }))
  }

  warn (message = '', meta = {}) {
    stdout.write(JSON.stringify({ message, meta }))
  }

  info (message = '', meta = {}) {
    stdout.write(JSON.stringify({ message, meta }))
  }
}

module.exports = { UnitLogger }
