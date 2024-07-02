export const truncateText = (text: string | undefined, maxLength: number) => {
  if (!text) return '';

  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};
