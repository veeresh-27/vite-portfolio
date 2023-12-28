import { SvgProps } from "../../interface";

export function Svg({ src, alt, width = "100%", height = "100%" }: SvgProps) {
  return (
    <>
      <img src={src} alt={alt} width={width} height={height} />
    </>
  );
}
