export const fakeLikeApi = (shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Like failed");
      else resolve("Like success");
    }, 500);
  });
};
