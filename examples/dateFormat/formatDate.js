export const formatDate = (dateStr) => {
  // Check if the input matches YYYY-MM-DD format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    throw new Error('Invalid date format. Expected YYYY-MM-DD');
  }

  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};
