const crypto = require('crypto');

const originalCreateHash = crypto.createHash;

crypto.createHash = (algorithm, options) => {
  const safeAlgorithm = algorithm === 'md4' ? 'sha256' : algorithm;
  return originalCreateHash.call(crypto, safeAlgorithm, options);
};

