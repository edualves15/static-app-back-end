function success(res, data, message = 'Success') {
  res.json({ status: 'success', message, data });
}

function error(res, message = 'Error', statusCode = 400) {
  res.status(statusCode).json({ status: 'error', message });
}

module.exports = { success, error };
