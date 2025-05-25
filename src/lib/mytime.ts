const options:Intl.DateTimeFormatOptions = { weekday: 'short', timeZone:'Australia/Brisbane', hour12: true, hour: 'numeric', minute: 'numeric'};
const formatter:Intl.DateTimeFormat = new Intl.DateTimeFormat('en-GB', options);

export type TimeInfo = {
  time: string;
  activity: string;
};

export function getMyCurrentTime(): TimeInfo {
   const date = new Date();
   const day = date.getDay();
   const hours = date.getHours();

   let activity = "./assets/couch.webp";
   if (day == 0 || day == 6) {
      //weekends
      if (hours > 4 && hours < 12) {
         activity = "./assets/cycle.webp";
      } else if (hours > 20 || hours < 5) {
         activity = "./assets/sleep.webp";
      }
   } else {
      //weekdays
      if (hours > 9 && hours < 17) {
         activity = "./assets/office.webp";
      } else if (hours > 20 || hours < 6) {
         activity = "./assets/sleep.webp";
      }
   }

   return {
      activity,
      time: formatter.format(date)
   };
}
