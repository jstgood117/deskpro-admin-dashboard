/**
 * There are two mechanisms for logging:
 *
 * Logging meant mostly for developers:
 *
 * a) debug('mylogger')
 *    A logger that can be turned on/off and prints to console (https://www.npmjs.com/package/debug)
 *
 * b) invariant(mustBeTrue, 'my error message')
 *    Throws if the condition is false. In prod, the message is stripped out (to minify source).
 *
 * c) warning(shouldBeTrue, 'my error message')
 *    Logs to console.error if conditioni s false.
 *    warning() calls are completely removed during prod.
 *
 * Then theres logging that we use for analytics/reports:
 *
 * a) captureError('my message', Error)
 *    Capture an Error and log to our logging platform.
 *    This should be used in try/catch, error boundaries, etc.
 *
 * b) captureWarning('my message')
 *    Log a warning to our logging platform.
 *    warning() is only available during dev, while captureWarning()
 *    would represent a warning that we think could happen during runtime
 *    that we want to know about (e.g. a performance issue).
 *
 * c) trackEvent('my.event.id')
 *    Log an interesting event to the logging platform.
 */


import logrocket from 'logrocket';
import debug from 'debug';
import invariant from 'invariant';
import warning from 'warning';

const rollbar = require('rollbar/dist/rollbar.noconflict.umd');

const logContext = {
    user: {
        identity: 'unknown'
    },
    app: {
        environment: process.env.NODE_ENV || 'development',
        version: (window as any).DP_VERSION_ID || process.env.DP_VERSION_ID || 'development'
    }
};

let Rollbar: any;
let LogRocket: any;

if ((window as any).DP_USE_CRASH_LOGGING || window.localStorage.getItem('window.DP_USE_CRASH_LOGGING')) {
    Rollbar = new rollbar({
        accessToken: '1040735a62d047d98ad6f82116207963',
        captureUncaught: true,
        captureUnhandledRejections: true,
        environment: logContext.app.environment,
        payload: {
            person: logContext.user,
            context: logContext.app,
            client: {
                javascript: {
                    code_version: logContext.app.version,
                    source_map_enabled: true,
                    guess_uncaught_frames: true
                }
            }
        }
    });
}

if ((window as any).DP_USE_SESS_RECORDING || window.localStorage.getItem('window.DP_USE_SESS_RECORDING')) {
    LogRocket = logrocket;
    LogRocket.init('dgjfde/deskpro', {
        release: logContext.app.version
    });

    if (Rollbar) {
        LogRocket.getSessionURL((sessionURL: any) => {
            Rollbar.configure({
                transform (obj: any) {
                    obj.sessionURL = sessionURL;
                }
            });
        });
    }
}

/**
 * Capture an error for logging.
 *
 * @param string msg
 * @param Error  error
 * @param object extra
 */
const captureError = (msg: string, error: Error, extra?: object) => {

    if (Rollbar) {
        Rollbar.error(msg, error);
    }
    if (LogRocket) {
        LogRocket.captureException(error, {
            extra: {
                msg,
                ...logContext.app,
                ...(extra||{})
            }
        });
    }
};

/**
 * Capture a warning for logging.
 *
 * @param string msg
 * @param Error  error
 * @param object extra
 */
const captureWarning = (msg: string, extra?: object) => {

    if (Rollbar) {
        Rollbar.warning(msg, extra);
    }
    if (LogRocket) {
        LogRocket.captureMessage(msg, { extra: { ...logContext.app, ...(extra||{}) } });
    }
};

const trackDebug = debug('app:track');

/**
 * Track an in-app event for analytics.
 *
 * @param string id
 * @param object extra
 */
const trackEvent = (id: string, extra?: object) => {
    trackDebug('event: %s %j', id, extra);
    if (LogRocket) {
        LogRocket.track(id);

        if (extra) {
            LogRocket.captureMessage(id, { extra: { ...logContext.app, ...extra} });
        }
    }
}

/**
 * Set app context variables
 *
 * @param context
 */
const setAppContext = (context: object) => {
    logContext.app = {
        ...logContext.app,
        ...context
    };
    if (Rollbar) {
        Rollbar.configure({
            payload: {
                context: logContext.app
            }
        })
    }
}

/**
 * Set user context
 *
 * @param context Should contain at least 'identity' representing the user id.
 */
const setUserContext = (context: object) => {
    logContext.user = {
        ...logContext.user,
        ...context
    };

    if (LogRocket) {
        LogRocket.identify(logContext.user.identity, logContext.user);
    }
    if (Rollbar) {
        Rollbar.configure({
            payload: {
                person: logContext.user
            }
        })
    }
};

const appDebug = debug('app:main');

export {
    debug,
    appDebug,
    invariant,
    warning,

    captureError,
    captureWarning,
    trackEvent,

    setAppContext,
    setUserContext,

    Rollbar,
    LogRocket
};