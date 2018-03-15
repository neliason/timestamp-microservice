
# Timestamp REST API Microservice

Takes ISO-8601 and unix date formats as input.

#### Example usage:
* [url]/api/timestamp/2015-12-15
* [url]/api/timestamp/1450137600000

#### Example output:
* { "unix": 1450137600000, "utc": "December 15, 2015" }
* { "unix": 1450137600000, "utc": "Tue, 15 Dec 2015 00:00:00 GMT" }
