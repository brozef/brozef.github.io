const options:Intl.DateTimeFormatOptions = { weekday: 'short', timeZone:'Australia/Brisbane', hour12: true, hour: 'numeric', minute: 'numeric'};
const formatter:Intl.DateTimeFormat = new Intl.DateTimeFormat('en-GB', options);

export type TimeInfo = {
  time: string;
  activity: string;
  secondsToMin: number;
};

export function getMyCurrentTime(): TimeInfo {
   //convert client time to my timezone
   const clientDate = new Date();
   const myDate = new Date(clientDate.toLocaleString("en-US", {timeZone: "Australia/Brisbane"}));

   const day = myDate.getDay();
   const hours = myDate.getHours();

   let activity = "./assets/couch.webp";
   if (day == 0 || day == 6) {
      //weekends
      if (day == 0 && hours > 4 && hours < 12) {
         activity = "./assets/cycle.webp";
      } else if ((day == 6 && hours > 5 && hours < 7)
            || (day == 0 && hours > 16 && hours < 18)) {
         activity = "./assets/couch.webp"; // todo: change to walk
      } else if (hours > 20 || hours < 6) {
         activity = "./assets/sleep.webp";
      }
   } else {
      //weekdays
      if ((day == 2 || day == 4) && hours > 4 && hours < 9) {
         activity = "./assets/cycle.webp";
      } else if (hours > 5 && hours < 8) {
         activity = "./assets/couch.webp"; // todo: change to walk
      } else if (hours > 8 && hours < 18) {
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
