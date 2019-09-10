export const formatDateString = string => {
  const date = new Date(string);

  let options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return date.toLocaleDateString('en-us', options).replace(',', ' at');
};
