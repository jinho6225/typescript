{
    //Array
    const fruits: string[] = ['🍅', '🍌'];
    const score: Array<number> = [1,3,4];
    function printArray(fruits: readonly string[]) {}
    // function printArray(fruits: readonly Array<number>) {} // <- 허용되지 않음

    //Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123]
    student[0] // name
    student[1] // 123
    const [name, age] = student;

}