import groupVolunteer from "../assets/groupvolunteer.jpg";
import bonding from "../assets/bonding.jpg";
import sponsorships from "../assets/sponsorships.jpg";
import GetInvolved from "../assets/getinvolved.jpg";
import fundraising from "../assets/groupsupport.jpg";

const getInvolved = [
      {
        hero: GetInvolved,
        heroTitle: "This is a title",
        heroSubtitle: "This is a subtitle",
        subtitle: "Trained Volunteering",
        image: groupVolunteer,
        description: "We provide extensive training to qualified volunteers interested in staffing our Resource & Crisis Helpline or Youth Residential Programs.",
        btn: {
          label: "Volunteer",
          link: "volunteer",
        }
      },
      {
        subtitle: "Fundraising Events",
        image: bonding,
        description: "The annual Birmingham Street Art Fair is our largest fundraiser, and we're always looking for enthusiastic volunteers to help make it a success.",
        btn: {
          label: "Help us Today",
          link: "fundraising"
        }
      },
      {
        subtitle: "Community Outreach",
        image: sponsorships,
        description: "We're always striving to increase awareness of Common Ground and our services. Help Spread the word at events throughout our community.",
        btn: {
          label: "Become a Sponsor",
          link: "sponsorships"
        }
      },
    {
        subtitle: "Consumer Feedback",
        image: fundraising,
        description: "Because the unique perspective of someone who has received services matters! We have been there and know first-hand the challenges of moving from a crisis to hope.",
        btn: {
            label: "Find out More",
            link: "cacgroup"
        }
    }
    ]

export default getInvolved
