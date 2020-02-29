const { DateTime } = require("luxon");

// Add a friendly date filter to nunjucks.
// Defaults to GOV.UK style format
// {{ date | friendlyDate('OPTIONAL FORMAT STRING') }}
// List of supported tokens: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens

module.exports = (dateObj, format = "d LLL y") => {
  return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
};

