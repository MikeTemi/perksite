import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
    title: 'User Terms, Perk+',
    description: 'Terms and conditions for Perk+ customer app users.',
};

const sections = [
    {
        id: 1,
        title: 'Introduction',
        content: `<p>These Terms and Conditions ("Terms") govern your access to and use of the PerkPlus mobile application and any related products, services, features, or content provided by Stamp Wallet Pty Ltd (ANC 681 196 387), trading as PerkPlus ("PerkPlus", "we", "our", or "us"). By downloading, accessing, or using the PerkPlus mobile application ("App"), you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must not access or use the App.</p>
<p>PerkPlus provides a customer loyalty platform that allows individuals ("Customers", "you", or "your") to create an account, earn loyalty stamps, redeem rewards, receive offers from participating businesses ("Merchants"), and manage personal profile information within the App.</p>
<p>These Terms apply solely to Customers. If you are a business, please refer to the PerkPlus Merchant Terms & Conditions.</p>`,
    },
    {
        id: 2,
        title: 'Eligibility and Customer Accounts',
        content: `<p>To use the PerkPlus App, you must create an account and provide accurate and complete information, including your name, date of birth, email address, and any other information required during the onboarding process. By creating an account, you warrant that all information you provide is true, current, and complete, and you agree to update this information as necessary to maintain its accuracy.</p>
<p>You must be at least 16 years of age to create a Customer account. Individuals under 16 may use the App only with parental or guardian consent. You are responsible for maintaining the confidentiality of your login credentials and for any activity carried out under your account.</p>
<p>PerkPlus reserves the right to suspend or terminate any Customer account that contains inaccurate information, violates these Terms, or is used for unlawful or harmful purposes.</p>`,
    },
    {
        id: 3,
        title: 'Nature of the PerkPlus Service',
        content: `<p>PerkPlus acts as a technology provider enabling Customers to interact with participating Merchants through loyalty programs created and managed by those Merchants. PerkPlus does not create or operate loyalty programs for individual businesses, nor does it guarantee the availability, continuity, or value of any loyalty stamps, offers, or rewards advertised by Merchants.</p>
<p>Each Merchant independently manages and controls its own loyalty program. PerkPlus does not guarantee that any Merchant will honour a specific offer or reward, nor do we guarantee that rewards will remain available for the duration of your use of the App.</p>`,
    },
    {
        id: 4,
        title: 'Earning Loyalty Stamps',
        content: `<p>Customers may earn loyalty stamps when purchasing goods or services from participating Merchants and scanning the Merchant's PerkPlus QR code. The issuance of stamps is solely at the discretion of the Merchant. PerkPlus is not responsible for a Merchant's decision to provide or deny loyalty stamps.</p>
<p>Stamps have no monetary value and cannot be sold, transferred, or exchanged for cash.</p>`,
    },
    {
        id: 5,
        title: 'Redeeming Rewards',
        content: `<p>Rewards are created and managed by Merchants. PerkPlus does not guarantee that any reward will be honoured or available for redemption at any given time. Merchants may modify, restrict, or remove rewards at their discretion.</p>
<p>Customers acknowledge that:</p>
<ul>
  <li>Rewards have no monetary value.</li>
  <li>Rewards do not constitute property or a vested entitlement.</li>
  <li>Redemption is subject to Merchant approval and availability.</li>
</ul>
<p>PerkPlus bears no responsibility for disputes regarding reward redemption between Customers and Merchants.</p>`,
    },
    {
        id: 6,
        title: 'Customer Conduct',
        content: `<p>You agree to use the App lawfully and respectfully. You must not engage in any conduct that:</p>
<ul>
  <li>falsifies or attempts to falsify loyalty stamps or QR codes;</li>
  <li>manipulates or interferes with the PerkPlus system or reward logic;</li>
  <li>misuses promotional offers;</li>
  <li>harasses, threatens, or abuses Merchants or other Customers;</li>
  <li>attempts to access, modify, or interfere with systems beyond your authorised use.</li>
</ul>
<p>PerkPlus may suspend or terminate your account for behaviour that violates these Terms or disrupts the integrity of the loyalty platform.</p>`,
    },
    {
        id: 7,
        title: 'Communications and Notifications',
        content: `<p>By creating an account, you consent to receiving communications from PerkPlus, including emails, push notifications, and SMS messages relating to your account activity, security alerts, reward updates, promotional offers, and service announcements.</p>
<p>You may opt out of SMS communications at any time by replying "STOP." Standard carrier charges may apply.</p>
<p>Some notifications form part of the App's essential functionality. Disabling these may impact your user experience.</p>`,
    },
    {
        id: 8,
        title: 'Privacy and Data Handling',
        content: `<p>PerkPlus collects, stores, and processes personal information in accordance with the PerkPlus Privacy Policy located at: <a href="https://perkplus.com.au/privacy-policy" style="color: var(--navy); font-weight: 600;">https://perkplus.com.au/privacy-policy</a></p>
<p>When you earn stamps or redeem rewards at a Merchant venue, your Customer profile information is shared with that Merchant as part of the loyalty interaction. Merchants may export portions of your data from the PerkPlus platform; PerkPlus bears no liability for how Merchants handle exported data. Merchants are independently responsible for complying with Australian privacy and spam legislation.</p>`,
    },
    {
        id: 9,
        title: 'Account Deletion and Data Retention',
        content: `<p>You may request to delete your account at any time. Upon such a request, PerkPlus will deactivate your account and begin a 90-day retention period, during which your data will be securely stored for fraud prevention, legal compliance, and system integrity purposes.</p>
<p>After the 90-day period:</p>
<ul>
  <li>your personal information will be permanently deleted, or</li>
  <li>it will be anonymised such that it can no longer identify you.</li>
</ul>
<p>Merchant-controlled records created as part of your loyalty interactions may continue to be held by Merchants in accordance with their own data retention obligations.</p>`,
    },
    {
        id: 10,
        title: 'Service Availability and Modifications',
        content: `<p>PerkPlus does not guarantee that the App will be available at all times or without interruption. We may modify, suspend, or discontinue any part of the App without prior notice, including the removal of features or functionalities.</p>
<p>You acknowledge that PerkPlus is not liable for any loss of data, service interruptions, or changes to the availability of loyalty programs or rewards.</p>`,
    },
    {
        id: 11,
        title: 'Disclaimer',
        content: `<p>The App is provided "as is" and "as available." PerkPlus makes no warranties regarding the accuracy, reliability, or completeness of information presented within the App, including Merchant-generated content, loyalty programs, or reward availability.</p>
<p>PerkPlus is not responsible for the conduct or obligations of Merchants, nor for their decision to provide or refuse stamps, rewards, or offers.</p>`,
    },
    {
        id: 12,
        title: 'Limitation of Liability',
        content: `<p>Nothing in these Terms excludes your rights under the Australian Consumer Law. However, to the maximum extent permitted by law:</p>
<ul>
  <li>PerkPlus is not liable for any indirect, incidental, consequential, or special losses.</li>
  <li>PerkPlus is not liable for Merchant actions, including refusal of rewards or misuse of exported data.</li>
</ul>
<p>You agree to defend, indemnify, and hold Stamp Wallet and its partners harmless from any claims, damages, or losses arising from your use of the Service. This includes any issues related to information you provide, such as defamation or intellectual property infringement.</p>`,
    },
    {
        id: 13,
        title: 'Termination',
        content: `<p>PerkPlus may suspend or terminate your account at any time if you breach these Terms, engage in fraudulent behaviour, misuse the platform, or if required for legal, compliance, or operational reasons.</p>
<p>You may terminate your account at any time by submitting a deletion request.</p>`,
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