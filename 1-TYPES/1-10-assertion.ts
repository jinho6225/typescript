{
    /**
     * Type Assertions 💩 똥이다 100퍼센트 장담할때? 그런 순간은 없다ㅋ
     */

    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //😱
    
    function findNumbers(): number[] | undefined {
        return undefined
    }
    const numbers = findNumbers()!; //const numbers = findNumbers(); 
    //numbers?.push(2); // 😱
    numbers.push(2); // 😱 // numbers!.push(2);
}