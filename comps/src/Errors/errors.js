
const buttonVariationError = () => {
    throw new Error("Button Enums Error: only one prop can be use from: [primary, secondary, success, warning, danger]")
}

export { buttonVariationError };