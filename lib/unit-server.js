class UnitServer {
  constructor({ name, port, host, logger }) {
    logger.info(`${name} server start initialization: ${host}:${port}`)
  }
}

module.exports = { UnitServer }
