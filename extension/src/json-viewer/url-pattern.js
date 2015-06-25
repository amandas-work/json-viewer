// https://gist.github.com/dperini/729294
// Regular Expression for URL validation
//
// Author: Diego Perini
// Updated: 2010/12/05
// License: MIT
//
// Copyright (c) 2010-2013 Diego Perini (http://www.iport.it)
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

module.exports = new RegExp(
  "^" +
    // protocol identifier
    "(?:(?:https?|ftp)://)" +
    // user:pass authentication
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
    // -- removed private and local exclusion
    //   // IP address exclusion
    //   // private & local networks
    //   "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
    //   "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
    //   "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
    //   // IP address dotted notation octets
    //   // excludes loopback network 0.0.0.0
    //   // excludes reserved space >= 224.0.0.0
    //   // excludes network & broacast addresses
    //   // (first & last IP address of each class)
    //   "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
    //   "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
    //   "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
    // "|" +
    // --
    // -- included 0-9 to host, domain and TLD identifier
      // host name
      "(?:(?:[a-z0-9\\u00a1-\\uffff0-9]-*)*[a-z0-9\\u00a1-\\uffff0-9]+)" +
      // domain name
      "(?:\\.(?:[a-z0-9\\u00a1-\\uffff0-9]-*)*[a-z0-9\\u00a1-\\uffff0-9]+)*" +
      // TLD identifier
      "(?:\\.(?:[a-z0-9\\u00a1-\\uffff]{2,}))" +
      // TLD may end with dot
      ".?" +
    ")" +
    // port number
    "(?::\\d{2,5})?" +
    // resource path
    "(?:[/?#]\\S*)?" +
  "$", "i"
);