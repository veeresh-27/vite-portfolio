import ProfilePic from "../../assets/images/profilePic.png";
import {  Svg } from "..";
import { Icon, icons } from "../../assets/constants/navbarIcons";
import { Link } from "react-router-dom";

export function Header({ showDp=true }: any) {
  return (
    <>
      <div className="fixed flex justify-center w-full bg-[#454545] text-white h-[200px] pt-4 md:pt-[16px] px-4 md:px-[30px] ">
        {!showDp && (
          <div className="flex justify-between md:w-[720px] h-full">
            <div className="flex flex-col gap-3">
              {icons.map((ele: Icon) => (
                <>
                  {ele.position === "left" && (
                    <Link key={ele.id} to={ele.link} title={ele.title}>
                      <Svg src={ele.comp} alt={ele.title} width={ele.width} />
                    </Link>
                  )}
                </>
              ))}
            </div>
            <div className="flex flex-col items-center mt-[-80px] gap-2 self-end pb-4">
              <div className="flex gap-4 items-center">
                <img className="rounded-[10px] z-10 shadow-md" src={ProfilePic} width={60} />
                <h2 className="text-xl md:text-3xl pb-2">Veeresh R M</h2>
              </div>

              <p className="text-xs md:text-sm md:w-[360px] text-center">
                Full Stack Developer | Software Engineer @ First American (India) | React Developer
                | .Net Developer
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {icons.map((ele: Icon) => (
                <>
                  {ele.position === "right" && (
                    <Link key={ele.id} to={ele.link} title={ele.title}>
                      <Svg src={ele.comp} alt={ele.title} width={ele.width} />
                    </Link>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
