const stdout = require('stdout-stream')
const stackTrace = require('stack-trace')
const chalk = require('chalk')

class UnitLogger {
  constructor({ raw = true } = {}) {
    this.raw = raw
  }

  fatal (error, message = '', meta = {}) {
    this.raw
      ? stdout.write(`${JSON.stringify({ message: message || error.message, error: { ...error }, meta, stack: stackTrace.parse(error) })}\n`)
      : stdout.write(chalk.bgRed(`${message || error.message} ${JSON.stringify({ error: { ...error }, meta, stack: stackTrace.parse(error) })}\n`))
  }

  error (error, message = '', meta = {}) {
    this.raw
      ? stdout.write(`${JSON.stringify({ message: message || error.message, error: { ...error }, meta, stack: stackTrace.parse(error) })}\n`)
      : stdout.write(chalk.red(`${message || error.message} ${JSON.stringify({ error: { ...error }, meta, stack: stackTrace.parse(error) })}\n`))
  }

  warn (message = '', meta = {}) {
    this.raw
      ? stdout.write(`${JSON.stringify({ message, meta })}\n`)
      : stdout.write(chalk.yellow(`${message} ${JSON.stringify({ meta })}\n`))
  }

  debug (message = '', meta = {}) {
    this.raw
      ? stdout.write(`${JSON.stringify({ message, meta })}\n`)
      : stdout.write(chalk.cyan(`${message} ${JSON.stringify({ meta })}\n`))
  }

  info (message = '') {
    this.raw
      ? stdout.write(`${JSON.stringify({ message })}\n`)
      : stdout.write(chalk.green(`${message}\n`))
  }
}

module.exports = { UnitLogger }
