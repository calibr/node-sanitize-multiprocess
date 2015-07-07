var
  workerFarm = require('worker-farm'),
  workers = workerFarm(require.resolve('./worker'));

module.exports = workers;