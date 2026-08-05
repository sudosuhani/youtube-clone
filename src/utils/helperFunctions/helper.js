export function formatViews(number) {
    const num = parseInt(number)
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return num.toString();
    }
  }