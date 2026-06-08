import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
    title: 'User Terms — Perk+',
    description: 'Terms and conditions for Perk+ customer app users.',
};

const sections = [
    {
        id: 1,
        title: 'Introduction',
        content: `<p>These Terms and Conditions ("Terms") govern your access to and use of the PerkPlus mobile application and any related products, services, features, or content provided by Stamp Wallet Pty Ltd (ANC 681 196 387), trading as PerkPlus.</p><p>By downloading, accessing, or using the PerkPlus mobile application ("App"), you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must not access or use the App.</p>`,
    },
    {
        id: 2,
        title: 'Eligibility and Customer Accounts',
        content: `<p>To use the PerkPlus App, you must create an account and provide accurate information, including your name, date of birth, and email address. You must be at least 16 years of age to create a Customer account. Individuals under 16 may use the App only with parental or guardian consent.</p><p>You are responsible for maintaining the confidentiality of your login credentials and for any activity carried out under your account.</p>`,
    },
    {
        id: 3,
        title: 'Nature of the PerkPlus Service',
        content: `<p>PerkPlus acts as a technology provider enabling Customers to interact with participating Merchants. PerkPlus does not create or operate loyalty programs for individual businesses, nor does it guarantee the availability or value of any loyalty stamps, offers, or rewards advertised by Merchants.</p>`,
    },
    {
        id: 4,
        title: 'Earning Loyalty Stamps',
        content: `<p>Customers may earn loyalty stamps when purchasing goods or services from participating Merchants and scanning the Merchant's PerkPlus QR code. The issuance of stamps is solely at the discretion of the Merchant. Stamps have no monetary value and cannot be sold, transferred, or exchanged for cash.</p>`,
    },
    {
        id: 5,
        title: 'Redeeming Rewards',
        content: `<p>Rewards are managed by Merchants. Customers acknowledge that:</p><ul><li>Rewards have no monetary value.</li><li>Rewards do not constitute property or a vested entitlement.</li><li>Redemption is subject to Merchant approval and availability.</li></ul>`,
    },
    {
        id: 6,
        title: 'Customer Conduct',
        content: `<p>You agree to use the App lawfully. You must not engage in conduct that:</p><ul><li>falsifies or attempts to falsify loyalty stamps or QR codes;</li><li>manipulates or interferes with the reward logic;</li><li>harasses, threatens, or abuses Merchants or other Customers.</li></ul>`,
    },
    {
        id: 7,
        title: 'Communications and Notifications',
        content: `<p>By creating an account, you consent to receiving communications from PerkPlus, including emails, push notifications, and SMS messages relating to account activity and security alerts. You may opt out of SMS communications by replying "STOP."</p>`,
    },
    {
        id: 8,
        title: 'Privacy and Data Handling',
        content: `<p>PerkPlus processes personal information in accordance with our Privacy Policy. When you interact with a Merchant venue, your profile information is shared with that Merchant. PerkPlus bears no liability for how Merchants handle exported data.</p>`,
    },
    {
        id: 9,
        title: 'Account Deletion and Data Retention',
        content: `<p>You may request account deletion at any time. A 90-day retention period applies for fraud prevention and legal compliance before personal information is permanently deleted or anonymised.</p>`,
    },
    {
        id: 10,
        title: 'Service Availability and Modifications',
        content: `<p>PerkPlus does not guarantee that the App will be available at all times. We may modify, suspend, or discontinue any part of the App without prior notice.</p>`,
    },
    {
        id: 11,
        title: 'Disclaimer',
        content: `<p>The App is provided "as is." PerkPlus makes no warranties regarding the accuracy or completeness of information presented within the App, including Merchant-generated content.</p>`,
    },
    {
        id: 12,
        title: 'Limitation of Liability',
        content: `<p>Subject to Australian Consumer Law, PerkPlus is not liable for indirect or consequential losses or Merchant actions. You agree to indemnify Stamp Wallet and its partners from claims arising from your use of the Service.</p>`,
    },
    {
        id: 13,
        title: 'Termination',
        content: `<p>PerkPlus may suspend or terminate your account if you breach these Terms or engage in fraudulent behaviour.</p>`,
    },
    {
        id: 14,
        title: 'Governing Law',
        content: `<p>These Terms are governed by the laws of Queensland, Australia. Disputes shall be heard exclusively in the courts of Brisbane.</p>`,
    },
];

export default function UserTermsPage() {
    return (
        <LegalLayout
            title="User Terms"
            lastUpdated="Last Updated: December 1, 2025"
            sections={sections}
            contactTitle="15. Contact Us"
            contactBody="Stamp Wallet Pty Ltd (Trading as PerkPlus) · Email:"
        />
    );
}