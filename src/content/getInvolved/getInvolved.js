import groupVolunteer from "../assets/groupvolunteer.jpg";
import bonding from "../assets/bonding.jpg";
import sponsorships from "../assets/sponsorships.jpg";

const getInvolved = [
      {
        subtitle: "Trained Volunteering",
        image: groupVolunteer,
        description: "We provide extensive training to qualified volunteers interested in staffing our Resource & Crisis Helpline or Youth Residential Programs.",
        btn: {
          label: "volunteer",
          link: "/get-involved/volunteer"
        }
      },
      {
        subtitle: "Fundraising Events",
        image: bonding,
        description: "The annual Birmingham Street Art Fair is our largest fundraiser, and we're always looking for enthusiastic volunteers to help make it a success.",
        btn: {
          label: "Help us Today",
          link: "/get-involved/fundraising"
        }
      },
      {
        subtitle: "Community Outreach",
        image: sponsorships,
        description: "We're always striving to increase awareness of Common Ground and our services. Help Spread the word at events throughout our community.",
        btn: {
          label: "Become a Sponsor",
          link: "/get-involved/sponsorships"
        }
      }
    ]

export default getInvolved
