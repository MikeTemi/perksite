import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
    title: 'Privacy Policy, Perk+',
    description: 'How Perk+ collects, uses, and protects your personal information.',
};

const sections = [
    {
        id: 1,
        title: 'Information We Collect',
        content: `<p>PerkPlus collects personal information only to the extent necessary to provide our services, maintain the platform, comply with legal obligations, improve functionality, and ensure a secure operating environment.</p>
<p>When customers create an account in the PerkPlus mobile application, they provide information such as their name, date of birth, and email address. Additional information may be collected when customers interact with loyalty programs inside the app. This includes stamp collection, reward redemptions, visit history, and any other activity that reflects how the customer engages with individual Merchants. We also collect information about device usage, such as IP addresses, identifiers, operating system type, and diagnostic or crash data. Customers may choose to grant optional permissions, including access to location services or the device camera, which are used exclusively to support features such as showing nearby venues or scanning QR codes during loyalty interactions.</p>
<p>Merchants also provide personal and business-related information when creating an account in the PerkPlus Business Portal. This may include the business name, address, contact information, ABN details, and the details of authorised staff members who access the Portal. Merchants also generate information through their use of the platform, including loyalty program settings, promotional configurations, customer interaction history, and any data they export from the Portal.</p>
<p>PerkPlus automatically collects certain information during general use of the platform. This includes device characteristics, app performance metrics, interaction logs, and behavioural analytics that help us understand how the platform is accessed and how features are used. This information assists in improving stability, performance, and the overall user experience.</p>`,
    },
    {
        id: 2,
        title: 'How We Use Personal Information',
        content: `<p>PerkPlus uses personal information to deliver loyalty services and facilitate interactions between customers and merchants. Customer information is used to create and maintain accounts, operate loyalty programs, allocate and track stamps, validate reward eligibility, and provide customers with a seamless experience when engaging with participating businesses. Merchant information is used to administer business accounts, manage staff access, enable the creation and management of loyalty rules, and provide analytics that help merchants understand their customer engagement behaviours.</p>
<p>PerkPlus also uses personal information to communicate with users, whether for the purpose of sending service updates, support messages, security alerts, marketing messages, or notifications about loyalty activity. Customers may receive messages about their rewards, promotional offers, or updates from merchants they have interacted with. Merchants may receive communications relating to account management, customer activity, subscription updates, or support enquiries.</p>
<p>We also use personal information to safeguard the platform. This includes fraud prevention, enforcing our terms and conditions, monitoring suspicious activity, and protecting the rights, property, and safety of PerkPlus, its users, and the general public. Personal information may be used to improve the platform through internal analytics, feature testing, enhancements, and user experience research.</p>`,
    },
    {
        id: 3,
        title: 'Sharing Customer Information With Merchants',
        content: `<p>The PerkPlus platform is built around the relationship between customers and merchants, and the data flow between them is essential to the operation of loyalty programs. When a customer earns stamps, redeems rewards, or engages with a Merchant within the app, the Merchant gains access to information necessary to operate its loyalty system. This typically includes the customer's name, visit history, reward status, stamp progression, and other information related to the customer's interactions with that Merchant.</p>
<p>This sharing occurs automatically as part of the customer's engagement with the Merchant's loyalty program. Merchants may view this information through the PerkPlus Business Portal, and they may also export it for their own record-keeping or marketing purposes. Once exported, Merchants become solely responsible for the handling, storage, and use of that information. PerkPlus does not monitor, control, or take responsibility for how a Merchant uses exported customer information, and Merchants are independently obligated to comply with the Privacy Act, the Spam Act 2003, and any other applicable laws governing the handling of personal information.</p>`,
    },
    {
        id: 4,
        title: 'How We Share Information More Generally',
        content: `<p>PerkPlus may share personal information with certain third-party providers who assist us in delivering our services. This includes hosting providers, infrastructure providers, customer support tools, email and SMS services, payment processors, analytics platforms, and security service providers. These third parties receive only the information required for them to perform their functions and are contractually obligated to handle it securely and in accordance with privacy standards.</p>
<p>We may also share information with regulators, courts, or law enforcement agencies where we are legally compelled to do so. If PerkPlus is involved in a corporate transaction such as a merger, acquisition, restructuring, or asset transfer, personal information may be transferred as part of the transaction, subject to continued protection under this Policy or the applicable successor policy.</p>
<p>PerkPlus does not sell personal information, nor do we share personal information with unrelated third parties for their independent marketing purposes.</p>`,
    },
    {
        id: 5,
        title: 'Cookies and Tracking Technologies',
        content: `<p>Our website and Services may use cookies and similar technologies to operate effectively and provide a customised experience. These technologies help us recognise returning users, store preferences, manage sessions, analyse behaviour, and improve the performance and reliability of the platform. Users may disable cookies through browser settings, although certain features may no longer function correctly if cookies are blocked or deleted.</p>`,
    },
    {
        id: 6,
        title: 'Data Storage and Security',
        content: `<p>PerkPlus stores personal information using secure technical and organisational measures designed to protect the confidentiality and integrity of the data we hold. This includes encryption in transit, access controls, secure authentication procedures, monitoring of system activity, and regular review of security practices. While we take reasonable and industry-standard precautions, no method of electronic storage or transmission is entirely secure. Users acknowledge that they provide personal information at their own risk, although PerkPlus will always take reasonable steps to prevent misuse, interference, loss, or unauthorised access.</p>
<p>PerkPlus may store or process personal information using trusted service providers located outside Australia. By using our Services, you consent to your information being transferred to and processed in other jurisdictions, provided adequate protections are in place.</p>`,
    },
    {
        id: 7,
        title: 'Data Retention',
        content: `<p>PerkPlus retains personal information only for as long as necessary to provide our services, meet legal obligations, resolve disputes, and maintain operational records. When a customer requests deletion of their account, PerkPlus deactivates the account and retains the associated personal information for a period of 90 days. This retention period supports fraud prevention, enables error correction, and ensures that we meet our legal and internal compliance requirements. After the retention period has expired, PerkPlus will permanently delete or anonymise the information so that it can no longer be linked to the individual.</p>
<p>When a Merchant cancels its subscription, the Merchant's business profile becomes inactive, and access to the Business Portal is removed. Data associated with the Merchant may continue to be retained by PerkPlus where necessary for auditing, system integrity, or compliance with relevant laws. Customer profiles remain active and unaffected by the Merchant's cancellation.</p>
<p>De-identified or aggregated information may be retained indefinitely for research, analytics, or service improvement.</p>`,
    },
    {
        id: 8,
        title: 'Your Rights',
        content: `<p>Under the Australian Privacy Principles, individuals have the right to access the personal information we hold about them, request corrections to inaccurate or incomplete information, withdraw certain types of consent, and request that we delete their account. Users may also opt out of marketing communications at any time. Essential service messages, such as authentication, security updates, and important notices, may continue to be sent even if a user opts out of marketing communications.</p>
<p>Requests to access, update, or delete personal information may require identity verification. PerkPlus will respond to such requests within a reasonable timeframe and in accordance with our legal obligations.</p>`,
    },
    {
        id: 9,
        title: "Children's Privacy",
        content: `<p>The PerkPlus platform is not intended for individuals under the age of 13. We do not knowingly collect, store, or process personal information from anyone under 13 years of age. If we become aware that personal information has been collected from a child under 13 without verified parental or guardian consent, we will take reasonable steps to delete that information as soon as practicable. Parents or guardians who believe that a child under their care has provided personal information to PerkPlus are encouraged to contact us immediately so that we may assist with removal of the data.</p>`,
    },
    {
        id: 10,
        title: 'Links to External Services',
        content: `<p>Our Services may contain links to websites or platforms operated by third parties. PerkPlus does not control these external services and is not responsible for their privacy practices, security, or content. Users should review the privacy policies of any third-party service they choose to engage with.</p>`,
    },
    {
        id: 11,
        title: 'Changes to This Privacy Policy',
        content: `<p>PerkPlus may modify this Privacy Policy from time to time to reflect updates in our practices, changes in law, or new features introduced to the platform. When changes occur, we will update the "Last Updated" date at the top of this Policy. In some cases, we may provide additional notice, such as by email or through an in-app notification. Your continued use of the Services following the publication of an updated Policy indicates your acceptance of the changes.</p>`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="Last Updated: December 1, 2025"
            intro={
                <>
                    <p style={{ marginBottom: '16px' }}>
                        This Privacy Policy explains how Stamp Wallet Pty Ltd (trading as PerkPlus) collects, uses, discloses, and protects personal information when individuals and businesses interact with our digital loyalty services. PerkPlus is committed to protecting your privacy and handling your personal information responsibly, transparently, and in compliance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). When you use the PerkPlus mobile application, the PerkPlus Business Portal, our website, or any associated features or services, you consent to the handling of your information as described in this Policy.
                    </p>
                    <p>
                        PerkPlus provides a loyalty platform that allows customers to earn and redeem stamps from participating businesses (&quot;Merchants&quot;) and enables Merchants to operate, monitor, and manage their loyalty programs. This Policy applies to both customers and merchants, and describes how information flows through our platform to ensure that both user groups understand how their data is handled.
                    </p>
                </>
            }
            sections={sections}
            contactTitle="12. Contact Us"
            contactBody="For questions about this Privacy Policy or to make a request regarding your personal information, contact us at:"
        />
    );
}