export const secondToTime = (seconds) => new Date(seconds * 1000).toISOString().substr(14, 5);
