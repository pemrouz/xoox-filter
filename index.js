module.exports = fn => next => (acc, v) => fn(v) 
  ? next(acc, v)
  : acc