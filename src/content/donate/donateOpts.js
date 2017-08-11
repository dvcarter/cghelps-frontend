import onlineDonate from "../assets/OnlineDonate_white.png"
import telephoneDonate from "../assets/telephonedonate.png"
import envelopeDonate from "../assets/envelope.png"


const donateOpts = [
      {
        name: "online-donates",
        title: "ONLINE",
        description: "Paypal makes it easy to donate to Common Ground online anytime",
        image: onlineDonate,
        btn: {
          label: "Give Now",
          link: "https://commongroundhelps.z2systems.com/np/clients/commongroundhelps/donation.jsp?campaign=1096&"
        }
      },
      {
        name: "phone-donates",
        title: "By PHONE",
        description: "We're happy to accept your gift by phone Monday through Friday from 8:30am to 5pm",
        image: telephoneDonate,
        btn: {
          label: "Call 248-456-8150",
          link: "tel:12484568150"
        }
      },
      {
        name: "mail-donates",
        title: "BY MAIL",
        description: "Simply print our donation form and mail it in with your gift",
        image: envelopeDonate,
        btn: {
          label: "Download Form",
          link: "../assets/2013OnlineMailDonationForm.pdf"
        }
      }
]

export default donateOpts