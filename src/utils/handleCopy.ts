export const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const text = e.currentTarget.innerHTML;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${text}주소가 복사 되었습니다.`);
    })
    .catch((err) => {
      console.log(err);
    });
  return;
};
