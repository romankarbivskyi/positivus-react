import { teamMembers } from "@/data/team";
import { Button, Heading } from "./ui";
import { FaLinkedinIn } from "react-icons/fa";
import { type TeamMember } from "@/types";

const Team = () => {
  return (
    <div className="container mx-auto flex flex-col px-5 sm:px-10">
      <div className="mb-20 flex flex-col items-center gap-10 md:flex-row">
        <Heading>Team</Heading>
        <p className="max-w-[580px] text-center md:text-start">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamMember {...member} />
        ))}
      </div>
      <Button className="mt-10 w-full self-end sm:w-[269px]">
        See all team
      </Button>
    </div>
  );
};

export default Team;

type TeamMemberProps = TeamMember;

const TeamMember = ({
  name,
  description,
  role,
  pictureUrl,
  linkedIn,
}: TeamMemberProps) => {
  return (
    <div className="shadow-[0_5px_0_0_theme('colors.dark')] flex flex-col gap-7 rounded-[45px] border px-[35px] py-10">
      <div className="relative flex items-end gap-5">
        <img
          src={pictureUrl}
          alt={`${name} picture`}
          className="object-contain"
        />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
        <a
          href={linkedIn}
          className="absolute top-0 right-0 rounded-full bg-black p-2"
        >
          <FaLinkedinIn className="fill-green" />
        </a>
      </div>
      <div className="w-full border"></div>
      <div>{description}</div>
    </div>
  );
};
