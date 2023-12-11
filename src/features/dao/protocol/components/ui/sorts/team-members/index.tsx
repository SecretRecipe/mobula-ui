import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { RiTeamFill } from "react-icons/ri";
import { MediumFont, SmallFont } from "../../../../../../../components/fonts";
import { NextChakraLink } from "../../../../../../../components/link";
import { Tds, Ths } from "../../../../../../../components/table";
import { Asset } from "../../../../../../../interfaces/assets";
import { BoxContainer } from "../../../../../common/components/box-container";
import { thStyles } from "../../../../style";

interface TeamMembersProps {
  token: Asset;
}

export const TeamMembers = ({ token }: TeamMembersProps) => {
  const getDisplay = () => {
    if (token?.team?.length > 0) return "flex";
    return "hidden";
  };
  const display = getDisplay();

  return (
    <BoxContainer
      extraCss={`mb-5 relative transition-all duration-200 py-[15px] md:py-2.5 px-5 lg:px-[15px] md:px-2.5 rounded-2xl sm:rounded-0 ${display}`}
    >
      <div className="flex items-center">
        <RiTeamFill className="text-blue dark:text-blue" />
        <MediumFont extraCss="ml-2.5">Team members</MediumFont>
      </div>
      <div className="w-full mt-5 lg:mt-[15px] md:mt-2.5 overflow-x-scroll scroll">
        <table>
          <thead>
            <tr>
              <Ths extraCss={thStyles}>Role</Ths>
              <Ths extraCss={thStyles}>Name</Ths>
              <Ths extraCss={thStyles}>Telegram</Ths>
              <Ths extraCss={thStyles}>Twitter</Ths>
              <Ths extraCss={thStyles}>Contract</Ths>
              <Ths extraCss={thStyles}>Linkedin</Ths>
            </tr>
          </thead>
          <tbody>
            {token?.team?.map((member) => {
              console.log(member.linkedin.split("/in/")[1]);
              console.log(member.twitter.split("twitter.com/")[1]);
              return (
                <tr key={member}>
                  <Tds extraCss="px-2.5 py-[25px]">
                    <div className="flex items-center">
                      <SmallFont>{member.role}</SmallFont>
                    </div>
                  </Tds>
                  <Tds extraCss="px-2.5 py-[25px]">{member.name}</Tds>
                  <Tds extraCss="px-2.5 py-[25px]">
                    <NextChakraLink
                      href={member.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      extraCss={`${
                        member.telegram
                          ? "text-blue dark:text-blue"
                          : "text-light-font-40 dark:text-dark-font-40"
                      }`}
                    >
                      <div className="flex items-center">
                        {member.telegram?.split("t.me/")[1] || "--"}
                        {member.telegram ? (
                          <FiExternalLink className="text-light-font-40 dark:text-dark-font-40 ml-[7.5px] mb-0.5" />
                        ) : null}
                      </div>
                    </NextChakraLink>
                  </Tds>
                  <Tds extraCss="px-2.5 py-[25px]">
                    <NextChakraLink
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      extraCss={`${
                        member.twitter
                          ? "text-blue dark:text-blue"
                          : "text-light-font-40 dark:text-dark-font-40"
                      }`}
                    >
                      <div className="flex items-center">
                        {member.twitter.split("twitter.com/")[1] || "--"}
                        {member.twitter ? (
                          <FiExternalLink className="text-light-font-40 dark:text-dark-font-40 ml-[7.5px] mb-0.5" />
                        ) : null}
                      </div>
                    </NextChakraLink>
                  </Tds>
                  <Tds extraCss="px-2.5 py-[25px]">
                    <div className="flex items-center"></div>
                    <NextChakraLink
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      extraCss={`${
                        member.linkedin
                          ? "text-blue dark:text-blue"
                          : "text-light-font-40 dark:text-dark-font-40"
                      }`}
                    >
                      <div className="flex items-center">
                        {member.linkedin?.split("/in/")[1] || "--"}
                        {member.linkedin ? (
                          <FiExternalLink className="text-light-font-40 dark:text-dark-font-40 ml-[7.5px] mb-0.5" />
                        ) : null}
                      </div>
                    </NextChakraLink>
                  </Tds>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </BoxContainer>
  );
};
