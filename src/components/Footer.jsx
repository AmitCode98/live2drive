import React from "react";
import Logo from "../assets/icons/logo.svg";
import MatureLogo from "../assets/images/mature-logo.png";
import GitIcon from "../assets/icons/git-icon.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";

const Footer = () => {
  const footerSections = [
    {
      title: "THE PROJECT",
      items: ["GAME", "ROADMAP", "NFT MINT"],
    },
    {
      title: "LEGAL STUFF",
      items: [
        "TERMS & CONDITIONS",
        "PRIVACY POLICY",
        "FAQ & SUPPORT",
        "CONTACT",
      ],
    },
    {
      title: "MORE STUFF",
      items: ["MARKETPLACE", "WHITEPAPER", "AUCTION TERMS", "NETWORK"],
    },
  ];

  return (
    <footer className="py-10 border-t border-muted">
      {/* footer two column */}
      <div className=" container flex items-end justify-between">
        {/* first column */}
        <div className="flex flex-col gap-7 w-[26%] border-r border-muted p-10">
          <div className="relative flex items-center justify-center">
            <div className="h-[50px] w-[50px] absolute rounded-full bg-muted blur-[45px]"></div>
            <img src={Logo} alt="company logo" className="relative z-20 " />
          </div>
          <p className="text-white text-base font-normal font-red-hat-display">
            In the mystical realm of Elysium, darkness is spreading, threatening
            to consume the once vibrant lands. As the chosen hero
          </p>
          <div className="flex items-center gap-7 ">
            <img src={MatureLogo} alt="img" />
            <div className="uppercase font-semibold text-base font-red-hat-display">
              {['game','roadmap','blood',"vlolence"].map((item,index)=>(
                <h5 key={index}>{item}</h5>
              ))}
            </div>
          </div>
        </div>

        {/* second column */}
        <div className="">
          <div className="flex gap-[170px] border-b border-muted py-7 px-5 ">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-5  ">
                <h5 className="font-red-hat-display font-extrabold text-base text-muted  ">
                  {section.title}
                </h5>

                <ul className="flex flex-col gap-5">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="font-red-hat-display font-light text-base text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between py-7 px-5 ">
            <div className="flex items-center gap-5">
              {[GitIcon,FacebookIcon,LinkedinIcon,InstagramIcon].map((icon,index)=>(
                <img key={index} src={icon} alt="icon" />

              ))}
            </div>
            <p className="text-sm font-normal font-red-hat-display text-muted">
              Copyright ©2024, Live to Drive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
