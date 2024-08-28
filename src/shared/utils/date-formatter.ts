type FormatType = 'tooltip' | 'thread-details' | 'list-item';

const lookup: { [key: string]: Intl.DateTimeFormatOptions } = {
  'list-item': { timeStyle: 'short' },
  tooltip: {
    weekday: 'long',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  },
  'thread-details': {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  },
};

export const formatDateString = (
  type: FormatType,
  dateString: string
): string => {
  return new Date(dateString).toLocaleTimeString('en-US', lookup[type]);
};
