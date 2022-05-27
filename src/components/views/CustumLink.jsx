import {Link, useMatch, useResolvedPath} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
                className={`menu-item ${  match ? 'active' : null}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink