module.exports = (page, limitEnv) => {
  const limit = +limitEnv;
  const startPage = 1;
  const pageNum = page || startPage;
  const offset = pageNum > startPage ? limit * (pageNum - startPage) : 0;
  return { offset, limit };
};
