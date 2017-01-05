/**
 * Created by Shang, Erxin (Edwin) on 10/7/2016.
 */
let logger = require("loglevel");

logger.setLevel(logger.levels.WARN);

exports.logger = {
    debug:logger.debug,
    trace:logger.trace,
    info:logger.info,
    warn:logger.warn,
    error:logger.error
};