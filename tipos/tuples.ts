(() => {

    const hero: [string, number, boolean] = ['Dr Strange', 100, true];

    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero)

    const villian: [string, number] = ['Dr Strange', 100];

    villian[0] = 'Magneto';
    villian[1] = 26;


    // Defino un tipo de dato que sera una tupla que recibe un string, un numero y luego una cantidad no definida de bolleanos
    type StringNumberBooleans = [string, number, ...boolean[]];
    const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

})()