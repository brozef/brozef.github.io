const options:Intl.DateTimeFormatOptions = { weekday: 'short', timeZone:'Australia/Brisbane', hour12: true, hour: 'numeric', minute: 'numeric'};
const formatter:Intl.DateTimeFormat = new Intl.DateTimeFormat('en-GB', options);

export function getMyCurrentTime(): string {
   return formatter.format(new Date());
}
