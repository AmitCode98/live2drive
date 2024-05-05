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
    <footer className="2xl:mt-32">
      {/* <footer className="" style={{ backgroundColor: 'rgba(217, 217, 217, 0.01)' }}> */}
      {/* footer two column */}
      <div className="lg:hidden">
        <ul className="text-sm text-center text-[#b1b1b1] uppercase font-medium flex flex-col items-center">
          <li className="border-b w-full py-10">company</li>
          <li className="border-b w-full py-10">game ui</li>
          <li className="border-b w-full py-10">about us</li>
          <li className="border-b w-full py-10">back to top</li>
        </ul>
        <div className="flex flex-col md:flex-row items-center justify-between py-7 px-5 ">
          <div className="flex items-center gap-5">
            {[GitIcon, FacebookIcon, LinkedinIcon, InstagramIcon].map(
              (icon, index) => (
                <img key={index} src={icon} alt="icon" />
              )
            )}
          </div>
          <div className="pt-10 text-center">
            <p className="text-sm font-normal font-red-hat-display text-muted">
            2024 KAI USA LTD
            </p>
            <p className="text-sm font-normal font-red-hat-display text-muted pt-2">
            PRIVACY + TERMS |
            </p>
          </div>
        </div>
      </div>

      <div className="container hidden xl:block">
        <div className="flex  md:items-end md:justify-between">
          {/* first column */}
          <div className="flex flex-col gap-7 w-[26%] md:border-r md:border-muted p-10 ">
            <div className="relative flex items-center justify-center">
              <div className="h-[50px] w-[50px] absolute rounded-full bg-muted blur-[45px] hidden md:block"></div>
              <img
                src={Logo}
                alt="company logo"
                className="relative z-20 hidden md:block "
              />
            </div>
            <p className="text-white text-base font-normal font-red-hat-display hidden md:block">
              In the mystical realm of Elysium, darkness is spreading,
              threatening to consume the once vibrant lands. As the chosen hero
            </p>
            <div className="flex items-center gap-7 ">
              <img src={MatureLogo} alt="img" className="hidden md:block" />
              <div className="uppercase font-semibold text-base font-red-hat-display hidden md:block">
                {["game", "roadmap", "blood", "vlolence"].map((item, index) => (
                  <h5 key={index}>{item}</h5>
                ))}
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="">
            {/* footer three clumns */}
            <div className="flex flex-col items-start md:flex-row md:gap-[170px] border-b border-muted py-7 px-5 ">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <h5 className="font-red-hat-display font-extrabold text-base text-muted">
                    {section.title}
                  </h5>

                  <ul className="flex flex-col gap-5 ">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="font-red-hat-display font-light text-base text-muted hidden md:block"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* footer icon and compyright section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-7 px-5 ">
              <div className="flex items-center gap-5">
                {[GitIcon, FacebookIcon, LinkedinIcon, InstagramIcon].map(
                  (icon, index) => (
                    <img key={index} src={icon} alt="icon" />
                  )
                )}
              </div>
              <p className="text-sm font-normal font-red-hat-display text-muted">
                Copyright ©2024, Live to Drive. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
