import form990 from "../assets/CG16_FORM_990.pdf"
import financialStatements from "../assets/CG16_Final_Financial_Statements_with_Supplementary_Material.pdf"
import strategicPlan from "../assets/Strategic_Plan_2015.pdf"

const governanceOpts  = [
      {
        "subtitle": "Form 990 Tax-Exempt Information Return",
        "description": "As a tax-exempt organization, Common Ground must file an annual information return with the IRS. This form is used to gather information about our organization and to verify that we follow tax law requirements for tax-exempt organizations. This form also informs the public about how an organization is governed. Please feel free to view the current form in pdf below.",
        "btn": {
          "link": form990,
          "label": "View 990 form"
        }
      },
      {
        "subtitle": "Financial Statements for Fiscal Year 15-16",
        "description": "Please feel free to view the pdf of the audit below.",
        "btn": {
          "link": financialStatements,
          "label": "View financial statements for Fiscal Year 15-16"
        }
      },
       {   
        "subtitle": "2015-2025 Strategic Plan",
        "description": "The following document outlines our core purpose, values, priorities, and vision as well as our strategic direction for the next ten years. Below is a pdf of Common Ground's strategic plan.", 
        "btn": {
          "link": strategicPlan,
          "label": "View Strategic Plan"
        }   
      }
    ]

export default governanceOpts
