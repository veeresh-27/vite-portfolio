import ProfilePic from "../../assets/images/profilePic.png";
import { HyperLink, Svg } from "../../components";
import { Icon, icons } from "../../assets/constants/navbarIcons";
import { motion } from "framer-motion";

export function Home({ showDp = true }: any) {
  return (
    <>
      <div className="bg-[#2D2D2D] text-white px-4 md:px-20 h-screen mt-[200px]">
        {showDp && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.99, y: -40 }}
            animate={{ opacity: 1, scale: 0.99, y: 0 }}
            exit={{ opacity: 0, scale: 0.99, y: 40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center mt-[-80px] gap-4"
          >
            <img
              className="rounded-[40px] z-10 shadow-md"
              src={ProfilePic}
              width={220}
            />
            <div className="text-center w-full md:w-[520px] ">
              <h2 className="text-3xl md:text-4xl pb-2">Veeresh R M</h2>
              <p className="text-sm md:text-base">
                Full Stack Developer | Software Engineer @ First American
                (India) | React Developer | .Net Developer
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {icons.map((ele: Icon) => (
                <>
                  <HyperLink
                    key={ele.id}
                    link={ele.link}
                    title={ele.displayName}
                  >
                    <div className="flex gap-3 text-sm md:text-base items-center">
                      <div
                        className={`flex w-[36px] items-center justify-center`}
                      >
                        <Svg
                          src={ele.comp}
                          alt={ele.title}
                          height={ele.width}
                          width={ele.width}
                        />
                      </div>

                      {ele.link}
                    </div>
                  </HyperLink>
                </>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
