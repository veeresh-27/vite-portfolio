import { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

interface HyperLinkProps {
    link: string;
    title: string;
    children: ReactNode;
}

const HyperLink: FC<HyperLinkProps> = ({ link, title, children }) => {

    return (
        <>
            <Link className={'bg-[#454545] flex items-center p-3 rounded-lg drop-shadow-[-3px_3px_4px_rgba(11,11,11,0.61)]'} to={link} title={title} target="_blank">
                {children}
            </Link>
        </>
    );
};

export {HyperLink};