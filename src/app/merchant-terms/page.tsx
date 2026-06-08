import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
    title: 'Merchant Terms — Perk+',
    description: 'Terms and conditions for Perk+ business portal merchants.',
};

const sections = [
    {
        id: 1,
        title: 'Introduction',
        content: `<p>These Merchant Terms and Conditions ("Terms") govern your access to and use of the PerkPlus Business Portal, the PerkPlus mobile application, and all related software, tools, services, and features offered by Stamp Wallet Pty Ltd (ANC 681 196 387) trading as PerkPlus.</p><p>By creating a Merchant account, accessing the Portal, or operating any loyalty program or promotional activity through PerkPlus, you acknowledge that you have read, understood, and agree to be legally bound by these Terms.</p>`,
    },
    {
        id: 2,
        title: 'Merchant Account Requirements',
        content: `<p>To create a Merchant account, you must provide accurate, complete, and current business information. You represent and warrant that you are authorised to bind the business to these Terms and that you will comply with all applicable laws relating to loyalty programs, marketing, and privacy.</p><p>You are responsible for all activity conducted under your account, including activities carried out by employees or staff members to whom you grant portal access.</p>`,
    },
    {
        id: 3,
        title: 'Description of the PerkPlus Service',
        content: `<p>PerkPlus provides a digital loyalty platform enabling Merchants to:</p><ul><li>Create and manage loyalty programs, offers, and reward rules;</li><li>Issue loyalty stamps to Customers;</li><li>Redeem rewards;</li><li>View analytics and customer engagement insights;</li><li>Export customer data generated through loyalty interactions;</li><li>Manage staff access within the Portal;</li><li>Communicate with Customers through permitted channels.</li></ul>`,
    },
    {
        id: 4,
        title: 'Subscription Fees and Billing',
        content: `<p>Use of the PerkPlus Business Portal requires payment of subscription fees. By maintaining an active Merchant account, you authorise PerkPlus to charge your nominated payment method for recurring subscription fees.</p><p>PerkPlus may offer new Merchants a free trial period. Unless you cancel your subscription before the end of the free-trial period, your nominated payment method will automatically be charged at the conclusion of the trial.</p>`,
    },
    {
        id: 5,
        title: 'Merchant Responsibilities',
        content: `<p>As a Merchant, you agree to create accurate and lawful loyalty programs, honour rewards in accordance with your stated terms, and ensure compliance with the Privacy Act 1988 and Spam Act 2003.</p><p>You must not engage in fraudulent activity, artificially manipulate loyalty transactions, or interfere with platform functionality.</p>`,
    },
    {
        id: 6,
        title: 'Reward and Offer Management',
        content: `<p>Merchants have full discretion to create and modify loyalty stamps and rewards. PerkPlus retains the right to moderate or remove content that is misleading, deceptive, or violates advertising regulations.</p>`,
    },
    {
        id: 7,
        title: 'Customer Data Access and Exports',
        content: `<p>Upon exporting data from the Portal, the Merchant becomes fully responsible for storing and securing that data. You acknowledge you are wholly responsible for any misuse or breach of customer information after it is exported from PerkPlus.</p>`,
    },
    {
        id: 8,
        title: 'Staff Access Management',
        content: `<p>All actions taken by staff members within the Portal are deemed to be authorised by the Merchant. You are responsible for monitoring staff behaviour and protecting the confidentiality of login details.</p>`,
    },
    {
        id: 9,
        title: 'Prohibited Merchant Conduct',
        content: `<p>Prohibited conduct includes falsification of stamps, reverse-engineering of platform code, unauthorised mass marketing, or the creation of discriminatory offers.</p>`,
    },
    {
        id: 10,
        title: 'Merchant Cancellation and Data Retention',
        content: `<p>A Merchant may cancel their subscription at any time. Upon cancellation, the business profile becomes inactive and access to the Portal is removed. Merchant data is retained for operational and legal purposes.</p>`,
    },
    {
        id: 11,
        title: 'Service Availability and Modifications',
        content: `<p>PerkPlus may update or enhance the Portal at any time. We do not guarantee uninterrupted or error-free operation and are not liable for loss arising from downtime or system maintenance.</p>`,
    },
    {
        id: 12,
        title: 'Disclaimer',
        content: `<p>PerkPlus provides the Portal on an "as is" basis. PerkPlus is not responsible for Merchant misrepresentations or the operation of individual loyalty programs.</p>`,
    },
    {
        id: 13,
        title: 'Limitation of Liability',
        content: `<p>Subject to Australian Consumer Law, PerkPlus shall not be liable for indirect or consequential loss. Total aggregate liability is limited to the subscription fees paid during the 60-day period preceding the claim.</p>`,
    },
    {
        id: 14,
        title: 'Termination',
        content: `<p>PerkPlus may suspend or terminate access to protect customers or preserve platform integrity. Termination does not relieve you of outstanding payment obligations.</p>`,
    },
    {
        id: 15,
        title: 'Governing Law',
        content: `<p>These Terms are governed by the laws of Queensland, Australia. Disputes shall be resolved in the courts of Brisbane.</p>`,
    },
];

export default function MerchantTermsPage() {
    return (
        <LegalLayout
            title="Merchant Terms"
            lastUpdated="Last Updated: December 1, 2025"
            sections={sections}
            contactTitle="16. Contact Us"
            contactBody="For questions about these Merchant Terms, contact us at:"
        />
    );
}