export const getSessionText = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Good Afternoon';
  } else if (currentHour >= 17 && currentHour < 21) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
};

export function getNextDates() {
  const today = new Date();

  const formatDate = date => {
    return date.toISOString().split('T')[0];
  };

  const formatShortDate = date => {
    const options = {month: 'short', day: '2-digit'};
    return date.toLocaleDateString('en-US', options).replace(',', '');
  };

  const formatFullDate = date => {
    const options = {weekday: 'short', month: 'short', day: '2-digit'};
    return date
      .toLocaleDateString('en-US', options)
      .replace(',', '')
      .replace(' ', ',');
  };

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const nextDay1 = new Date(tomorrow);
  nextDay1.setDate(tomorrow.getDate() + 1);

  const nextDay2 = new Date(nextDay1);
  nextDay2.setDate(nextDay1.getDate() + 1);

  const dates = [
    { index: 0, label: 'Today', date: formatDate(today) },
    { index: 1, label: 'Tomorrow', date: formatDate(tomorrow) },
    { index: 2, label: formatShortDate(nextDay1), date: formatDate(nextDay1) },
    { index: 3, label: formatFullDate(nextDay2), date: formatDate(nextDay2) },
  ];

  return dates;
}
