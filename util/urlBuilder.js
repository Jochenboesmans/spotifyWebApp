/* Builds queries on top of supplied base url */

module.exports = (url, queries) => {
  let firstDone = false;
  for (let key in queries) {
    if (queries.hasOwnProperty(key)) {
      if (!firstDone) {
        url += `?`;
      } else {
        url += `&`;
      }
      url += `${key}=${queries[key]}`;
      firstDone = true;
    }
  }
  return url;
};