export const getFileSize = (byte: number) => {
  const kb = (byte / 1000).toFixed(2);
  const mb = (byte / 1000000).toFixed(2);
  const gb = (Number(mb) / 1000).toFixed(2);
  const tb = (Number(gb) / 1000).toFixed(2);
  if (Number(tb) >= 1) return `${tb}TB`;
  if (Number(gb) >= 1) return `${gb}GB`;
  if (Number(mb) >= 1) return `${mb}MB`;
  if (Number(kb) >= 1) return `${kb}KB`;
  return `${byte}B`;
};
