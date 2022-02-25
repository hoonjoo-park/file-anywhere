export const getExpDate = (exp: number) => {
  const expDate = new Date(exp * 1000).getTime();
  const now = new Date().getTime();
  const expLeft = expDate - now;
  const days = Math.floor(expLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((expLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  if (Number(hours) < 48 && Number(hours) > 0) {
    const interval = setInterval(function () {
      const now = new Date().getTime();
      const expLeft = expDate - now;
      const hours = Math.floor(
        (expLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((expLeft % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      return `${hours}시간 ${minutes}분`;
    }, 60000);
  }
  if (Number(hours) >= 48) {
    return `${days}`;
  }
  return "expired";
};
