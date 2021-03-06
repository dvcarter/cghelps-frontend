import form990 from "../assets/CG16_FORM_990.pdf"
import form990_17 from "../assets/CG17_FORM_990.pdf"
import financialStatements from "../assets/CG16_Final_Financial_Statements_with_Supplementary_Material.pdf"
import financialStatements_17 from "../assets/CG17_Final_Financial_Statements_with_Supplementary_Material.pdf"
import annualreport_17 from "../assets/2016-17_Common_Ground_Annual_Report-Corrected.pdf"
import annualreport from "../assets/2015-16_Common_Ground_Annual_Report.pdf"
import strategicPlan from "../assets/Strategic_Plan_2015.pdf"

const governanceOpts  = [
      {
        "subtitle": "Annual Report", 
        "description": "Our Annual Report gives a glimpse of our fiscal year milestones and community impact as well as an announcement of the appreciation for the community support that makes our mission possible. Please feel free to view our annual reports from the last two fiscal years in the pdfs below.",
        "btn0": {
            "link":annualreport, 
            "label": "Annual Report for Fiscal Year 15-16"
        },
          "btn1": {
              "link": annualreport_17,
              "label":"Annual Report for Fiscal Year 16-17"
          }
      },
    {
        "subtitle": "Form 990 Tax-Exempt Information Return",
        "description": "As a tax-exempt organization, Common Ground must file an annual information return with the IRS. This form is used to gather information about our organization and to verify that we follow tax law requirements for tax-exempt organizations. This form also informs the public about how an organization is governed. Please feel free to view the current form in pdf below.",
        "btn0": {
          "link": form990,
          "label": "View 990 form for Fiscal Year 15-16"
        },
        "btn1": {
            "link": form990_17,
            "label": "View 990 form for Fiscal Year 16-17"
        }
      },
      {
        "subtitle": "Financial Statements",
        "description": "Please feel free to view the pdf of the audit below.",
        "btn0": {
          "link": financialStatements,
          "label": "View financial statements for Fiscal Year 15-16"
        },
        "btn1": {
            "link": financialStatements_17,
            "label": "View financial statements for Fiscal Year 16-17"
        }
      },
       {   
        "subtitle": "2015-2025 Strategic Plan",
        "description": "The following document outlines our core purpose, values, priorities, and vision as well as our strategic direction for the next ten years. Below is a pdf of Common Ground's strategic plan.", 
        "btn0": {
          "link": strategicPlan,
          "label": "View Strategic Plan"
        },
        "btn1": {
            "link": null,
            "label": null
        }
      }
    ]

export default governanceOpts
