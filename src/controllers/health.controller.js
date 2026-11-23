// GET /api/v1/health
const VERSION = '0.1.0';

function health(req, res) {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    version: VERSION
  });
}

module.exports = { health, VERSION };
