// JavaScript advancet unit testing creating function for testing.

export default function kelvinFunction(kelvin, therm) {
    const celsius = kelvin - 273;
    const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    const newton = Math.floor(celsius * (33 / 100));

    if (typeof kelvin !== "number") {
        return "provide first argument number";
    }
    if (therm !== "c" && therm !== "f" && therm !== "n") {
        return "provide second argument 'c', 'f', 'n'";
    }

    let convertedTherm;

    switch (therm) {
        case "c":
            convertedTherm = kelvin - 273;
            break;
        case "f":
            convertedTherm = Math.floor(celsius * (9 / 5) + 32);
            break;
        case "n":
            convertedTherm = Math.floor(celsius * (33 / 100));
            break;
        default:
            return false;
    }

    return convertedTherm;
}
