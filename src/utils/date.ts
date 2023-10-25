import { format, formatDistance } from "date-fns";

const formatDate = (date: string): string =>
  format(new Date(date), "MMM dd, yyyy 'at' HH:mm");

const formatDateAgo = (date: string): string =>
  formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });

export { formatDate, formatDateAgo };
