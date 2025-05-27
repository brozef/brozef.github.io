const options:Intl.DateTimeFormatOptions = { weekday: 'short', timeZone:'Australia/Brisbane', hour12: true, hour: 'numeric', minute: 'numeric'};
const formatter:Intl.DateTimeFormat = new Intl.DateTimeFormat('en-GB', options);

export type TimeInfo = {
  time: string;
  activity: string;
  secondsToMin: number;
};

export function getMyCurrentTime(): TimeInfo {
   //convert clienttime to my timezone
   const clientDate = new Date();
   const myDate = new Date(clientDate.toLocaleString("en-US", {timeZone: "Australia/Brisbane"}));

   const day = myDate.getDay();
   const hours = myDate.getHours();

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
      time: formatter.format(clientDate),
      secondsToMin: 60 - clientDate.getSeconds()
   };
}
