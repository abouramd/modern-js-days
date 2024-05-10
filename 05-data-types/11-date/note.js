/* Creation
 * To create a new Date object call new Date() with one of the following arguments:
 * 
 * new Date()
 * Without arguments – create a Date object for the current date and time:
 */
{
    {
        let now = new Date();
        console.log(now); // shows current date/time
    }

    // Create a Date object with the time equal to number of milliseconds(1 / 1000 of a second) passed after the Jan 1 st of 1970 UTC + 0.
    {

        // 0 means 01.01.1970 UTC+0
        let Jan01_1970 = new Date(0);
        console.log(Jan01_1970);

        // now add 24 hours, get 02.01.1970 UTC+0
        let Jan02_1970 = new Date(24 * 3600 * 1000);
    }
    /* new Date(datestring)
     * If there is a single argument, and it’s a string, then it is parsed automatically.
     * The algorithm is the same as Date.parse uses, we’ll cover it later.
     */
    {
        let date = new Date("2017-01-26");
        console.log(date);
    }

    // new Date(year, month, date, hours, minutes, seconds, ms)
    {
        console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // 1 Jan 2011, 00:00:00
        console.log(new Date(2011, 0, 1)); // the same, hours etc are 0 by default
    }
    /*
    Access date components
    There are methods to access the year, month and so on from the Date object:

    getFullYear()
    Get the year (4 digits)

    getMonth()
    Get the month, from 0 to 11.

    getDate()
    Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

    getHours(), getMinutes(), getSeconds(), getMilliseconds()
    Get the corresponding time components.

    getDay()
    Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.

    getTime()
    Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

    getTimezoneOffset()
    Returns the difference between UTC and the local time zone, in minutes:
    */

    /*
    Setting date components
    The following methods allow to set date/time components:

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
    */

    {
        // Date to number, date diff
        // When a Date object is converted to number, it becomes the timestamp same as date.getTime():

        let date = new Date();
        console.log(+date); // the number of milliseconds, same as date.getTime()
    }

    //date().snow

    {
        // There’s a special method Date.now() that returns the current timestamp.
        let start = Date.now(); // milliseconds count from 1 Jan 1970

        // do the job
        for (let i = 0; i < 100000; i++) {
            let doSomething = i * i * i;
        }

        let end = Date.now(); // done

        console.log(`The loop took ${end - start} ms`); // subtract numbers, not dates
    }

    // Date.parse from a string
    {
        /* The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

        YYYY-MM-DD – is the date: year-month-day.
        The character "T" is used as the delimiter.
        HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
        The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
        Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

        The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

        For instance:
		*/

        let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

        console.log(ms); // 1327611110417  (timestamp)
    }
}