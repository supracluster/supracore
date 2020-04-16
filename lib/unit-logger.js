const stdout = require('stdout-stream')
const stackTrace = require('stack-trace')
const chalk = require('chalk')

class UnitLogger {
  constructor({ raw = true } = {}) {
    this.raw = raw
  }

  fatal (error, message = '', meta = {}) {
    const payload = `${JSON.stringify({
      message: message || error.message,
      error: { ...error },
      meta,
      stack: stackTrace.parse(error)
    })}\n`

    this.raw ? stdout.write(payload) : stdout.write(chalk.bgRed(payload))
  }

  error (error, message = '', meta = {}) {
    const payload = `${JSON.stringify({
      message: message || error.message,
      error: { ...error },
      meta,
      stack: stackTrace.parse(error)
    })}\n`

    this.raw ? stdout.write(payload) : stdout.write(chalk.red(payload))
  }

  warn (message = '', meta = {}) {
    const payload = `${JSON.stringify({ message, meta })}\n`
    this.raw ? stdout.write(payload) : stdout.write(chalk.yellow(payload))
  }

  info (message = '', meta = {}) {
    const payload = `${JSON.stringify({ message, meta })}\n`
    this.raw ? stdout.write(payload) : stdout.write(chalk.cyan(payload))
  }
}

module.exports = { UnitLogger }
