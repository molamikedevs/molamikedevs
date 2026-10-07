export { cn } from 'cn';
import { type ContributionDay } from './github';

const dayFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});
const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
});

export function describeDay(day: ContributionDay) {
  const date = dayFormat.format(new Date(day.date));

  if (day.count === 0) return `No contributions on ${date}`;
  if (day.count === 1) return `1 contribution on ${date}`;
  return `${day.count} contributions on ${date}`;
}

// One label per month, placed on the week column that holds the 1st.
export function getMonthLabels(days: ContributionDay[], offset: number) {
  const labels: { month: string; column: number }[] = [];

  days.forEach((day, index) => {
    const date = new Date(day.date);

    if (date.getUTCDate() === 1) {
      labels.push({
        month: monthFormat.format(date),
        column: Math.floor((offset + index) / 7),
      });
    }
  });

  // Name the starting month too, unless it would crowd the next label.
  if (labels.length > 0 && labels[0].column >= 3) {
    labels.unshift({
      month: monthFormat.format(new Date(days[0].date)),
      column: 0,
    });
  }

  return labels;
}

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 15;

const requestTimes = new Map<string, number[]>();

// Allows MAX_REQUESTS per key inside a sliding window. It lives in memory, so
// each server instance counts separately: enough to stop casual abuse of the
// chat route, not a replacement for a shared store.
export function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestTimes.get(key) ?? []).filter(
    (time) => now - time < WINDOW_MS,
  );

  if (recent.length >= MAX_REQUESTS) {
    requestTimes.set(key, recent);
    return true;
  }

  // Keep the map from growing without limit on a long-lived instance.
  if (requestTimes.size > 5000) requestTimes.clear();

  recent.push(now);
  requestTimes.set(key, recent);
  return false;
}
