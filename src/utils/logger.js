/**
 * Conditional logger utility
 * Only logs when DEBUG mode is enabled
 */

const isDebugMode = import.meta.env.DEBUG === 'true';

/**
 * Logs messages only in debug mode
 * @param {...any} args - Arguments to log
 */
export const debugLog = (...args) => {
  if (isDebugMode) {
    console.log('[DEBUG]', ...args);
  }
};

/**
 * Logs errors only in debug mode
 * @param {...any} args - Arguments to log
 */
export const debugError = (...args) => {
  if (isDebugMode) {
    console.error('[DEBUG ERROR]', ...args);
  }
};

/**
 * Logs warnings only in debug mode
 * @param {...any} args - Arguments to log
 */
export const debugWarn = (...args) => {
  if (isDebugMode) {
    console.warn('[DEBUG WARN]', ...args);
  }
};
