import ProfilePic from "../../assets/images/profilePic.png";
import { HyperLink, Svg } from "../../components";
import { Icon, icons } from "../../assets/constants/navbarIcons";

export function Home({ showDp = true }: any) {
  return (
    <>
      <div className="bg-[#2D2D2D] text-white px-4 md:px-20 h-screen mt-[200px]">
        {showDp && (
          <div className="flex flex-col items-center mt-[-80px] gap-4">
            <img className="rounded-[40px] z-10 shadow-md" src={ProfilePic} width={220} />
            <div className="text-center w-full md:w-[520px] ">
              <h2 className="text-3xl md:text-4xl pb-2">Veeresh R M</h2>
              <p className="text-sm md:text-base">
                Full Stack Developer | Software Engineer @ First American (India) | React Developer
                | .Net Developer
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {icons.map((ele: Icon) => (
                <>
                  <HyperLink key={ele.id} link={ele.link} title={ele.displayName}>
                    <div className="flex gap-3 text-sm md:text-base">
                      <Svg src={ele.comp} alt={ele.title} width={ele.width} />
                      {ele.link}
                    </div>
                  </HyperLink>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
