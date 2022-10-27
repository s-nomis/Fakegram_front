import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

import "dayjs/locale/fr";

const CommentDate = ({ date }) => {
    const displayDate = () => {
        const localeObject = {
            name: "fr-comment", // name String
            weekdays:
                "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split(
                    "_"
                ), // weekdays Array
            weekdaysShort: "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"), // OPTIONAL, short weekdays Array, use first three letters if not provided
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), // OPTIONAL, min weekdays Array, use first two letters if not provided
            weekStart: 1, // OPTIONAL, set the start of a week. If the value is 1, Monday will be the start of week instead of Sunday。
            yearStart: 4, // OPTIONAL, the week that contains Jan 4th is the first week of the year.
            months: "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Decembre".split(
                "_"
            ), // months Array
            monthsShort:
                "Jan_Fev_Mar_Avr_Mai_Jui_Jui_Aou_Sep_Oct_Nov_Dec".split("_"), // OPTIONAL, short months Array, use first three letters if not provided
            ordinal: (n) => `${n}º`, // ordinal Function (number) => return number + output
            formats: {
                // abbreviated format options allowing localization
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
                // lowercase/short, optional formats for localization
                l: "D/M/YYYY",
                ll: "D MMM, YYYY",
                lll: "D MMM, YYYY h:mm A",
                llll: "ddd, MMM D, YYYY h:mm A",
            },
            relativeTime: {
                // relative time format strings, keep %s %d as the same
                future: "%s", // e.g. in 2 hours, %s been replaced with 2hours
                past: "%s",
                s: "%d sec",
                m: "1 min",
                mm: "%d min",
                h: "1 h",
                hh: "%d h", // e.g. 2 hours, %d been replaced with 2
                d: "1 j",
                dd: "%d j",
                M: "1 m",
                MM: "%d m",
                y: "1 an",
                yy: "%d ans",
            },
            meridiem: (hour, minute, isLowercase) => {
                // OPTIONAL, AM/PM
                return hour > 12 ? "PM" : "AM";
            },
        };
        dayjs.locale("fr-comment", localeObject);
        dayjs.extend(relativeTime);
        dayjs.extend(updateLocale);

        const now = new Date();
        return dayjs(date).from(now);
    };

    return <div>{displayDate()}</div>;
};

export default CommentDate;
