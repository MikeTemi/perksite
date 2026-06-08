import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
    title: 'Privacy Policy — Perk+',
    description: 'How Perk+ collects, uses, and protects your personal information.',
};

const sections = [
    {
        id: 1,
        title: 'Information We Collect',
        content: `<p>PerkPlus collects personal information only to the extent necessary to provide our services, maintain the platform, comply with legal obligations, improve functionality, and ensure a secure operating environment.</p><p>When customers create an account in the PerkPlus mobile application, they provide information such as their name, date of birth, and email address. Additional information may be collected when customers interact with loyalty programs inside the app. This includes stamp collection, reward redemptions, visit history, and any other activity that reflects how the customer engages with individual Merchants.</p><p>Merchants also provide personal and business-related information when creating an account in the PerkPlus Business Portal. This may include the business name, address, contact information, ABN details, and the details of authorised staff members who access the Portal.</p>`,
    },
    {
        id: 2,
        title: 'How We Use Personal Information',
        content: `<p>PerkPlus uses personal information to deliver loyalty services and facilitate interactions between customers and merchants. Customer information is used to create and maintain accounts, operate loyalty programs, allocate and track stamps, and validate reward eligibility.</p><p>We also use personal information to safeguard the platform. This includes fraud prevention, enforcing our terms and conditions, monitoring suspicious activity, and protecting the rights, property, and safety of PerkPlus.</p>`,
    },
    {
        id: 3,
        title: 'Sharing Customer Information With Merchants',
        content: `<p>The PerkPlus platform is built around the relationship between customers and merchants. When a customer earns stamps or redeems rewards, the Merchant gains access to information necessary to operate its loyalty system. This typically includes the customer's name, visit history, and stamp progression.</p><p>Merchants may export this data from the Portal. Once exported, Merchants become solely responsible for the handling, storage, and use of that information. PerkPlus does not monitor or take responsibility for how a Merchant uses exported customer information.</p>`,
    },
    {
        id: 4,
        title: 'How We Share Information More Generally',
        content: `<p>PerkPlus may share personal information with certain third-party providers who assist us in delivering our services (e.g., hosting, payment processors, analytics). These third parties are contractually obligated to handle it securely.</p><p>PerkPlus does not sell personal information, nor do we share personal information with unrelated third parties for their independent marketing purposes.</p>`,
    },
    {
        id: 5,
        title: 'Cookies and Tracking Technologies',
        content: `<p>Our website and Services may use cookies and similar technologies to recognise returning users, store preferences, manage sessions, and analyse behaviour to improve the performance of the platform.</p>`,
    },
    {
        id: 6,
        title: 'Data Storage and Security',
        content: `<p>PerkPlus stores personal information using secure technical measures including encryption in transit, access controls, and secure authentication. While we take industry-standard precautions, no method of electronic storage is entirely secure.</p>`,
    },
    {
        id: 7,
        title: 'Data Retention',
        content: `<p>When a customer requests deletion of their account, PerkPlus deactivates the account and retains the personal information for a period of 90 days for fraud prevention and legal compliance. After this period, data is permanently deleted or anonymised.</p>`,
    },
    {
        id: 8,
        title: 'Your Rights',
        content: `<p>Under the Australian Privacy Principles, individuals have the right to access the personal information we hold, request corrections, withdraw consent, and request account deletion. Requests may require identity verification.</p>`,
    },
    {
        id: 9,
        title: "Children's Privacy",
        content: `<p>The PerkPlus platform is not intended for individuals under the age of 13. If we become aware that personal information has been collected from a child under 13 without verified parental consent, we will take steps to delete that information.</p>`,
    },
    {
        id: 10,
        title: 'Links to External Services',
        content: `<p>Our Services may contain links to third-party platforms. PerkPlus is not responsible for their privacy practices, security, or content.</p>`,
    },
    {
        id: 11,
        title: 'Changes to This Privacy Policy',
        content: `<p>PerkPlus may modify this Privacy Policy from time to time. Your continued use of the Services following the publication of an updated Policy indicates your acceptance of the changes.</p>`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="Last Updated: December 1, 2025"
            intro="This Privacy Policy explains how Stamp Wallet Pty Ltd (trading as PerkPlus) collects, uses, discloses, and protects personal information when individuals and businesses interact with our digital loyalty services. PerkPlus is committed to protecting your privacy and handling your personal information responsibly, transparently, and in compliance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)."
            sections={sections}
            contactTitle="12. Contact Us"
            contactBody="For questions about this Privacy Policy or to make a request regarding your personal information, contact us at:"
        />
    );
}