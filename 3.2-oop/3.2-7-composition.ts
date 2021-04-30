{
 
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; //class level
        private coffeeBeans: number = 0; //instance (object) level
        
        constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans:number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }
        clean() {
            console.log('cleaning the machine...🧼')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans!');
            }
        
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private preheat(): void {
            console.log(`heating up...🔥`);
            
        }
        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕️`);
            return {
                shots,
                hasMilk: false
            }            
        }
        makeCoffee(shots:number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('steaming some milk 🍼')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class AutomaticSugarMixer {
        private getSugar() {
            console.log(`getting some sugar 🍭`)
            return true
        }
        addSuger(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar()
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }

    class CaffeeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer) {
            super(beans)
        }
        makeCoffee(shots:number): CoffeeCup {
            const coffee = super.makeCoffee(shots);            
            return this.milkFrother.makeMilk(coffee)
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugarMixer) {
            super(beans);
        }        
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.sugar.addSuger(coffee)
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(private beans: number, private milk: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            const sugarAdded = this.sugar.addSuger(coffee)
            return this.milk.makeMilk(sugarAdded);
        }
    }

    const machines = [
        new CoffeeMachine(16),
        new CaffeeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]

}