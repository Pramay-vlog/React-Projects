import useNavigation from '../hooks/use-navigation'
import classNames from "classnames";

function Link({ to, children, className, activePathName }) {
    const { navigate, currentPath } = useNavigation()

    const classes = classNames("text-blue-500",
        className,
        currentPath === to && activePathName
    )

    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey) return
        e.preventDefault()

        navigate(to)
    }

    return <a className={classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;