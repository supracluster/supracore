const stdout = require('stdout-stream')
const stackTrace = require('stack-trace')
const chalk = require('chalk')

class UnitLogger {
  fatal (error, message = '', meta = {}) {
    stdout.write(chalk.bgRed(`${JSON.stringify({
      message: message || error.message,
      error: { ...error },
      meta,
      stack: stackTrace.parse(error)
    })}\n`))
  }

  error (error, message = '', meta = {}) {
    stdout.write(chalk.red(`${JSON.stringify({
      message: message || error.message,
      error: { ...error },
      meta,
      stack: stackTrace.parse(error)
    })}\n`))
  }

  warn (message = '', meta = {}) {
    stdout.write(chalk.yellow(`${JSON.stringify({ message, meta })}\n`))
  }

  info (message = '', meta = {}) {
    stdout.write(chalk.cyan(`${JSON.stringify({ message, meta })}\n`))
  }
}

module.exports = { UnitLogger }
