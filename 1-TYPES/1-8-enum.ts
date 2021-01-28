{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, 'WEDNESDAY': 2})
    const dayOfToday = DAYS_ENUM.MONDAY; 
    
    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday = 'mon', // 0
        Tuesday = 'tue', // 1
        Wednesday = 'wed',
        Thursday = 'thur',
        Friday = 'fri',
        Saturday = 'sat',
        Sunday = 'sun' // 6
    }
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    // day = 1;
    console.log(day)

    let dayofWeek: DaysOfWeek = 'Monday'
    dayofWeek = 'Wednesday';
}