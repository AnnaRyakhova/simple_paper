import { FC, ReactNode } from 'react'

interface Button {
    children: ReactNode,
    className: string,
}

const Button: FC<Button> = ({ children, className }) => {
    return (
        <button className={className}>{children}</button>
    )
}

export default Button;
