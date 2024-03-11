import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

export const formatDateEpochToFriendly = (epoch: number) => {
  const today = dayjs();
  const time = dayjs(epoch * 1000);
  const tomorrow = today.add(1, 'day');

  if (time.isSame(tomorrow, 'day')) {
    return 'Tomorrow';
  } else {
    // Custom format like "Sat, 27 May"
    return time.format('ddd, D MMM');
  }
};
