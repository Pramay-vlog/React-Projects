import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    ...rest
}) {

    const classes = className(rest.className, 'flex items-center px-4 py-2 border', {

        'border-blue-200 bg-blue-400 text-white': primary,
        'border-gray-200 bg-gray-700 text-white': secondary,
        'border-green-200 bg-green-400 text-black': success,
        'border-yellow-200 text-black bg-yellow-300': warning,
        'border-red-200 text-black bg-red-400': danger,
        'rounded-full': rounded,

    })

    return <button className={classes} > {children} </button>

}

Button.propTypes = {

    // only one of these value to be store as props
    // Number(!!undefined) == 0;

    checkButtonVariants: ({ primary, secondary, success, warning, danger }) => {

        const value = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

        if (value > 1) {
            throw new Error("Button Enums Error: only one prop can be use from: [primary, secondary, success, warning, danger]")
        }

    }

}

export default Button;