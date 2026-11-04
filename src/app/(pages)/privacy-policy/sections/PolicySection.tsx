import type { ReactNode } from "react";

import { GUTTER } from "@/constants";

type Block =
  | { kind: "heading"; text: string }
  | { kind: "text"; text: ReactNode; bold?: boolean }
  | { kind: "list"; items: readonly ReactNode[] };

const CONTENT: readonly Block[] = [
  {
    kind: "text",
    text: 'Apex Kidney Care Private Limited, the owner and operator of www.apexkidneycare.com (both henceforth referred to as “AKC”, “we”, “us”, “our”) and its subsidiaries and affiliates, provide their services and information contained on this website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to this privacy policy, terms and conditions and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of this website.',
  },
  {
    kind: "text",
    text: 'AKC and its affiliates respect your privacy and value the trust you place in us, hence we insist upon the highest standards for secure transactions and customer information privacy. This Privacy Policy (“Policy”) describes in brief the manner in which your data is collected, used and shared by the website. You are advised to please read the Policy carefully to learn about our information gathering and dissemination practices. By streaming or accessing the website, you agree to the collection and use of Your data by Us in the manner provided in this Policy.',
  },
  {
    kind: "text",
    text: "Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.",
  },
  {
    kind: "text",
    text: "By visiting this Website or using our services, you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our website.",
  },
  {
    kind: "text",
    text: "By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy.",
  },
  {
    kind: "text",
    text: "This Policy applies only to our Services and we are not responsible for the content or privacy practices on any other website to which our website links or that links to our Services. We encourage you to review the privacy policies of those other websites or services so that you can understand how they collect, use and share your information.",
  },
  {
    kind: "heading",
    text: "1. Collection of Personally Identifiable Information and other Information",
  },
  {
    kind: "text",
    text: "When you use our website, we collect and store your personal information which is provided by you from time to time such as your name, email address, phone number and other relevant information as may be required for make an appointment.",
  },
  {
    kind: "text",
    bold: true,
    text: "In addition to the above, while you access or interact with the Services from any technological device which includes but is not limited to mobiles, tabs and computer system we may receive certain information, viz.:",
  },
  {
    kind: "list",
    items: [
      "The name of your internet service provider.",
      "The IP address of the computer you use to access our Services.",
      "The operating system you are using.",
      "The date and time you access our Services.",
      "The website address, if any, that linked you to our Services.",
      "Search engine, search terms and advertising clicks/actions.",
      "Surveys’ responses to the extent you do not include Personal Information.",
      "The manufacturer and model of your mobile device.",
      "Your mobile operating system.",
      "The type of mobile internet browsers you are using.",
      "Your geo-location.",
      "Information about how you interact with our website, such as how many times you use a specific part of the Website over a given time period, the amount of time you spend using the Website, how often you use the Website, actions you take in the Website and how you engage with the Website.",
      "Information to allow us to personalize the services and content available through the Website.",
    ],
  },
  {
    kind: "text",
    text: "Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose.",
  },
  {
    kind: "text",
    text: "In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us.",
  },
  {
    kind: "text",
    text: "Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service or feature on the Website. We may automatically track certain information about you based upon your behaviour on our Website. We use this information to do internal research on our users’ demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our website or not), which URL you next go to (whether this URL is on our website or not), your computer browser information, and your IP address.",
  },
  {
    kind: "text",
    text: "If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you.",
  },
  {
    kind: "heading",
    text: "2. Use of Demographic / Profile Data / Your Information",
  },
  {
    kind: "text",
    text: "We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.",
  },
  {
    kind: "text",
    text: "In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users’ activity on our website.",
  },
  {
    kind: "text",
    text: "We identify and use your IP address to help diagnose problems with our server, and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information.",
  },
  {
    kind: "text",
    bold: true,
    text: "To sum up all mentioned under this clause herein above and in addition to them, we may use your personal information for the following reasons:",
  },
  {
    kind: "list",
    items: [
      "To send you information about our new initiatives or other relevant information that we think you might find useful or interesting.",
      "To provide you with feedback and for other marketing activities.",
      "Tailor our sites to your interest.",
      "To get in touch with you when necessary.",
      "To preserve social history as governed by existing law or policy.",
      "To share your request internally for the completion of your service you requested for.",
    ],
  },
  { kind: "text", bold: true, text: "We use information internally to:" },
  {
    kind: "list",
    items: [
      "Our internal training purpose and data analysis.",
      "For research, analysis and other business-related purposes, subject to not directly disclosing any of your Personal Information.",
    ],
  },
  {
    kind: "text",
    bold: true,
    text: "Generally, we use anonymous traffic information to:",
  },
  {
    kind: "list",
    items: [
      "Reminds us of who you are in order to deliver to you a better and more personalized service.",
      "Recognize your access privileges to our website.",
      "Track your entries in some of our promotions.",
      "Help diagnose problems with our server.",
      "Administers our website.",
      "Track your session so that we can understand better how people use our website.",
    ],
  },
  { kind: "heading", text: "3. Communication triggered from User’s End:" },
  {
    kind: "text",
    text: "We strive to make sure that our user’s experience exceeds the expectations. There are many ways to reach us i.e., via phone, e-mail, and other social media channels. Once you initiate a communication from your end, to help improve our Service etiquettes to you, we may catalogue your contact information and correspondence details for later references. This eventually will also enable us to track the responses you provide to us as feedback for our e-mails and also the number of visits that you as a User make to our website. This methodology will help us to improve our Services from a customer delight stand point.",
  },
  { kind: "heading", text: "4. Sharing of personal information" },
  {
    kind: "text",
    text: "We may share personal information with our other corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.",
  },
  {
    kind: "text",
    text: "We may disclose personal information to third parties. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent. Such third parties do not have any right to use the Personal Information we share with them beyond what is necessary to assist us to provide the Services and we take reasonable steps to ensure that these third parties are obligated to protect the Personal Information in the same manner as contemplated herein.",
  },
  {
    kind: "text",
    text: "We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.",
  },
  {
    kind: "text",
    bold: true,
    text: "We may, however, disclose your Personal Information under the following circumstances:",
  },
  {
    kind: "list",
    items: [
      "To respond to court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims or",
      "If we believe it is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of our terms of use, or as otherwise required by law.",
    ],
  },
  {
    kind: "text",
    text: "In due course of time we might use your Personal Information for any new and unanticipated reason not expressly mentioned in this Policy. We will obtain your consent in such cases as may be required by law.",
  },
  {
    kind: "text",
    text: "We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or reorganization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.",
  },
  {
    kind: "text",
    bold: true,
    text: "Disclosure policy in compliance with rule 6 of the IT Rules 2011",
  },
  {
    kind: "text",
    text: "The Personal Information may be disclosed to any person, if such disclosure is required for a lawful purpose connected with a function or activity of Website.",
  },
  {
    kind: "text",
    text: "The Personal Information may be disclosed, where the disclosure is necessary for compliance of a legal obligation.",
  },
  {
    kind: "text",
    bold: true,
    text: "We do not rent, sell, publish or share your Personal Information and we will not disclose any of your personally identifiable information unless:",
  },
  {
    kind: "list",
    items: [
      "We have your permission.",
      "To help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, including cyber incidents potential threat, punishment of offences and to the safety or security of any person, violations of AKC ‘s terms of use or to defend against legal claims.",
      "Special circumstances such as compliance with subpoenas, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure.",
    ],
  },
  {
    kind: "heading",
    text: "5. What security procedures are in place to protect information from loss, misuse or alteration?",
  },
  {
    kind: "text",
    text: "To protect against the loss, misuse and alteration of the information under our control, and to comply with Rule 8 of IT Rules, 2011 (Reasonable security practices and procedures and sensitive personal data or information), we have in place appropriate physical, electronic, technical, operational and managerial procedures.",
  },
  {
    kind: "text",
    text: "Our website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.",
  },
  {
    kind: "text",
    text: "Our servers are accessible only to authorized personnel and your information is shared with respective personnel to complete the transaction and to provide the Services requested by you.",
  },
  {
    kind: "text",
    text: "Although we will endeavor to safeguard the confidentiality of your sensitive personal identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. No such measures are competent enough to safeguard your Personal Information in a complete 100% way. Hence, you are also encouraged to take steps to prevent your Personal Information from being misused by logging off after using a shared computer, choosing a robust password, not sharing the password with anyone and changing it periodically. We in no way can are to be held responsible for the unauthorized use of your Personal Information or for any suspicious activity on your account. By using our website, you agree that we will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.",
  },
  { kind: "heading", text: "6. Links to Other Sites" },
  {
    kind: "text",
    text: "Our website links to other websites that may collect personally identifiable information about you. apexkidneycare.com is not responsible for the privacy practices or the content of those linked websites.",
  },
  { kind: "heading", text: "7. Choice/Opt-Out" },
  {
    kind: "text",
    text: "We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing related) communications from us on behalf of our partners, and from us in general.",
  },
  { kind: "heading", text: "8. Your Consent" },
  {
    kind: "text",
    text: "By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.",
  },
  {
    kind: "text",
    text: "If we decide to change our privacy policy, we reserve the right but not obligated to post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it. However, as advised above, please go through our Privacy Policy at regular intervals.",
  },
  { kind: "heading", text: "9. User declarations:" },
  {
    kind: "list",
    items: [
      "I understand and have the knowledge that Personal Information is being collected.",
      "I understand and have the knowledge of the purpose for which my Personal Information is being collected.",
      "I understand and have the knowledge of the indented recipients of the information.",
      "I understand that I have the option not to provide the data or information sought to be collected by AKC and the Website.",
      "I understand that I also have an option (while availing the services of AKC, Website or otherwise) to withdraw my consent given earlier to AKC and understand and accept that such withdrawal of the consent shall be sent in writing and in such case AKC shall have the option not to provide the services for which the said information was sought at its discretion.",
      "I read and have understood this Privacy Policy and all other policies governing the usage of the Website.",
    ],
  },
  { kind: "heading", text: "10. Grievance Officer:" },
  {
    kind: "text",
    text: (
      <>
        In accordance with Information Technology Act 2000 and rules made
        there under, the name and contact details of the Grievance Officer are
        provided below:
        <br />
        Name: Jatin Desai
        <br />
        Email:{" "}
        <a href="mailto:jatin.desai@apexkidneycare.in">
          jatin.desai@apexkidneycare.in
        </a>
      </>
    ),
  },
  { kind: "heading", text: "11. Governing Law:" },
  {
    kind: "text",
    text: "By accessing the Website, you agree that any disputes or matters arising out of or related to your viewing or use of this website shall be governed by and interpreted in accordance with the laws of India, without regard to the conflict of laws, and that you submit irrevocably to the exclusive jurisdiction of the courts competent for the City of Mumbai, Maharashtra, India.",
  },
  { kind: "heading", text: "12. Contact Us:" },
  {
    kind: "text",
    text: "If you have any questions about our Privacy Policy or Personal Information, we hold about you please.",
  },
];

const PolicySection = () => (
  <section className={`bg-white pt-8 pb-24 lg:pt-10 lg:pb-30 ${GUTTER}`}>
    <div className="mb-12">
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Privacy Policy
      </h2>
    </div>

    <div>
      {CONTENT.map((block, index) => {
        if (block.kind === "heading") {
          return (
            <h5
              key={index}
              className="mb-2.5 font-cormorant text-[28px] leading-[1.05] font-bold text-black"
            >
              {block.text}
            </h5>
          );
        }

        if (block.kind === "list") {
          return (
            <ul key={index} className="mb-7.5 flex flex-col gap-3.5">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="relative ml-5 pl-1.5 font-roboto text-[17px] leading-[1.6] text-[#393f42]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-2 -left-4.5 size-2 rotate-45 bg-primary-subtle"
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className={`mb-[15px] font-roboto text-[17px] leading-[22px] text-[#393f42] ${
              block.bold ? "font-bold" : "font-light"
            }`}
          >
            {block.text}
          </p>
        );
      })}
    </div>
  </section>
);

export default PolicySection;
