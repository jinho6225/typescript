{
    //JavaScript
    //old: var 💩
    // var age = 5; 
    // age = 1;

    //let es6
    // let name = 'hello'
    // name = 'hi'

    //const
    // const age = 5;
    // age = 5; // err occur


    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */

     // number
     const num: number = -6;

     //string
     const str: string = 'hello'

    //boolean
    const boal: boolean = false;

    //undefined
    let name: undefined; //💩
    let age: number | undefined
    age = undefined;
    age = 1
    function find(): number | undefined {
        return undefined;
    }

    //null
    let person: null; //💩
    let person2: string | null;
    person2 = null;
    person2 = 'hey'

    //unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any 💩
    let anything: any = 0;
    anything = 'hello';

    //void
    function print(): void {
        console.log('hello')
        return;
    }
    let unusable: void = undefined; //💩

    //never
    function throwError(message: string): never {
        //message => server (log)
        throw new Error(message);
        while (true) {}
    }
    let neverEnding: never; //💩

    //object
    let obj: object; //💩
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'ellie'})
    acceptSomeObject({animal: 'dog'})


}