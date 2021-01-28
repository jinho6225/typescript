{
    /**
     * Type Inference 💩 똥이다 사용하지 말아라
     */

    let text = 'hello';
    function print(message: string) {
        console.log(message)
    }
    print('hello')
    
    function add(x: number, y: number) {
        return x + y;
    }

    const result = add(1, 2);

}