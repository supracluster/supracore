const stdout = require('stdout-stream')

class UnitLogger {
  fatal (error, message = '', meta) {
    stdout.write(JSON.stringify({ error, message: message || error.message , meta }))
  }

  error (error, message = '', meta) {
    stdout.write(JSON.stringify({ error, message: message || error.message , meta }))
  }

  warn (message = '', meta) {
    stdout.write(JSON.stringify({ message, meta }))
  }

  info (message = '', meta = {}) {
    stdout.write(JSON.stringify({ message, meta }))
  }
}

module.exports = { UnitLogger }
