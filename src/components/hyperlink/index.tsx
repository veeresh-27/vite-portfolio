import { HyperLinkProps } from "../../interface";

export function HyperLink({ link, title, children }: HyperLinkProps) {
  return (
    <>
      <a href={link} title={title} target="_blank">
        {children}
      </a>
    </>
  );
}
