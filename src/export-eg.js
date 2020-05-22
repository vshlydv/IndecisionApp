export const isAdult = (age) => age > 18 ? "Yes" : "No";

export const canDrink = (age) => age > 0 ? "Yes" : "No";

const isSenior = (age) => age > 62 ? "Yes" : "No";

export default isSenior

// export default (age) => age >62 ? "Yes" : "No"

// export { isAdult, canDrink, isSenior as default}


