import pig from "../assets/piggy_bank.jpg"
import bonding from "../assets/bonding.jpg"
import sponsorships from "../assets/sponsorships.jpg"
import wishList from "../assets/donation_list_2017-18.pdf"
import givingGuide from "../assets/Common_Ground_Planned_Giving_Guide.pdf"
const moreWays = [ 
    {
        img: sponsorships,
        title: "Employer Match",
        description: "Many Companies will double, or even triple, an employee's charitable donation. To see if your employer will match your gift to Common Ground, please check with your Human Resources/Personnel office.",
        btn: {
            link: null,
            label: null,
        }
    
    
    },
    {
        img: pig,
        title: "Stocks, Life Income Gifts, and Charitable Bequests",
        description: "To discuss these and other ways to create a lasting impact, such as naming Common Ground as a beneficiary of your life insurance policy, qualified retirement plan, or financial account, please call 248.456.8150",
        btn: {
            link: givingGuide,
            label: "Common Ground Giving Guide",
        }
    },
    {
        img: bonding,
        title: "In-Kind Gifts",
        description: "We welcome gifts of goods and services. To discuss services you or your company would like to donate, call our Community Engagement Specialist at 248-451-3734. Please check out our latest Wish list below",
        btn: {
            link: wishList,
            label: "2017-18 Donation Wish List"
        }
   
    }
]

export default moreWays
