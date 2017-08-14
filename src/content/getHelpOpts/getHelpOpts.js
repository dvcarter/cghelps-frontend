import redPhone from "../assets/Call_White_Red.png"
import personPurple from "../assets/InPerson_White_purple.png"
import chatWhitePurple from "../assets/Chate_White_purple.png"
import onlineChatWhite from "../assets/OnlineChat_white.png"
import SeekHelp from "../assets/seekhelp.jpg"

const getHelpOpts = [
      {
        hero: SeekHelp,
        heroTitle: "We listen. We care. We help.",
        heroSubtitle: "At Common Ground, we're dedicated to helping people move from crisis to hope.",
        name: "call-helps",
        title: "CALL",
        description: "Are you facing a crisis? Call us for free and confidential counseling, information, and referrals",
        image: redPhone,
        btn: {
          label: "Call 1.800.231.1127",
          link: "tel:18002311127"
        }
      },
      {
        name: "visit-helps",
        title: "VISIT",
        description: "You're also welcome to visit one of our Oakland County facilities to talk with us in person.",
        image: personPurple,
        btn: {
          label: "Find Crisis Center",
          link: "get-help/visit"
        }
      },
      {
        name: "text-helps",
        title: "TEXT",
        description: "If you're not ready to talk, you can use a mobile phone to text with us instead. Available from 4pm to 10pm Monday through Friday",
        image: chatWhitePurple,
        btn: {
          label: "Text \"Hello\"",
          link: "sms:18002311127"
        }
      },
      {
        name: "chat-helps",
        title: "CHAT",
        description: "From 4pm to 10pm Monday through Friday, you can use our online chat service",
        image: onlineChatWhite,
        btn: {
          label: "Chat Sign-in",
          link: "get-help/chat-with-us"
        }
      }
    ]

export default getHelpOpts
