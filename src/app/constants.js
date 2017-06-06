/**
 * constants.js
 *
 * Application constants.
 */

/**
 * isProduction
 */
export const isProduction = process.env.NODE_ENV === 'production';

/**
 * isCordova
 */
export const isCordova = process.env.CORDOVA === 'true';

/**
 * isBrowser
 */
export const isBrowser = process.env.BROWSER === true;

/**
 * debugMode
 */
export const debugMode = !isProduction;

/**
 * config
 */
export const config = process.env.CONFIG;
