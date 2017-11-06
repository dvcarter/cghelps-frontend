import helpingHand from "../assets/helpinghand.jpg"
import youthFamily from "../assets/youthfamily.jpg"
import seekHelp from "../assets/seekhelp.jpg"
import health from "../assets/health.jpg"
import ResourceGroup from "../assets/grouphero.jpg"

const resourceOpts = [
      {
        hero: ResourceGroup,
        heroTitle: "A title here",
        heroSubtitle: "A subtitle here",
        subtitle: "Suicide Prevention & Survivors",
        image: helpingHand,
        description: "Is someone you love at risk? Learn some of the early warning signs, and discover what we can do together to help prevent suicides in our community.",
        btn: {
          label: "Read more >>",
          link: "/resources/suicide-prevention"
        }
      },
      {
        subtitle: "Youth & Family",
        image: youthFamily,
        description: "Struggling to keep the peace? Knowledge is power. Find out how to improve relationships between teens and parents, so everyone can thrive.",
        btn: {
          label: "Read more >>",
          link: "/resources/youth-and-family"
        }
      },
      {
        subtitle: "Victims of Crime",
        image: seekHelp,
        description: "Not sure where to turn? Consider our list of local organizations dedicated to helping people cope with crime-related issues and challenges.",
        btn: {
          label: "Read more >>",
          link: "/resources/victims-of-crime"
        }
      },
     /* {
        subtitle: "Physical & Mental Health",
        image: health,
        description: "Is Someone you know experiencing a mental health or other type of crisis? Learn more about helpful programs and services available here in our community.",
        btn: {
          label: "Read more >>",
          link: "/resources/physical-and-mental-health"
        }
      }*/
    ]
export default resourceOpts
