{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number,       
      private milk: MilkMaker,
      private sugar: SugarPower) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded);
    }
  }


  interface MilkMaker {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }
  interface SugarPower {
    addSugar(cup: CoffeeCup): CoffeeCup
  }
  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkMaker {
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkMaker {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilkSteamer implements MilkMaker {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
      };
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarPower {
    private getSugar() {
      console.log("Getting some sugar from jar 🍬");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class PrimiumSugarMixer implements SugarPower {
    private getSugar() {
      console.log("Getting really good premium sugar from the sky ❄️");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugarMixer implements SugarPower {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
      };
    }
  }

  // Favor COMPOSITION over inheritance

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const noMilk = new NoMilkSteamer()
  const candySugar = new CandySugarMixer();
  const premiumSugar = new PrimiumSugarMixer();
  const noSugar = new NoSugarMixer()

  const customCoffeeMachin = new CoffeeMachine(48, noMilk, noSugar)
  console.log(customCoffeeMachin.makeCoffee(1))
}
