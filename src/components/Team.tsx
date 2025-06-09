import { Button, Heading } from "./ui";
import { FaLinkedinIn } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  pictureUrl: string;
  linkedIn: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    pictureUrl: "/images/team/Picture.png",
    linkedIn: "#",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    pictureUrl: "/images/team/Picture1.png",
    linkedIn: "#",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    pictureUrl: "/images/team/Picture2.png",
    linkedIn: "#",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    pictureUrl: "/images/team/Picture3.png",
    linkedIn: "#",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    pictureUrl: "/images/team/Picture4.png",
    linkedIn: "#",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    pictureUrl: "/images/team/Picture5.png",
    linkedIn: "#",
  },
];

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
