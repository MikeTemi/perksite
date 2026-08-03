import LegalLayout from '@/components/shared/LegalLayout';

export const metadata = {
    title: 'Merchant Terms, Perk+',
    description: 'Terms and conditions for Perk+ business portal merchants.',
};

const sections = [
    {
        id: 1,
        title: 'Introduction',
        content: `<p>These Merchant Terms and Conditions ("Terms") govern your access to and use of the PerkPlus Business Portal, the PerkPlus mobile application, and all related software, tools, services, and features offered by Stamp Wallet Pty Ltd (ANC 681 196 387) trading as PerkPlus ("PerkPlus", "we", "us", or "our"). By creating a Merchant account, accessing the Portal, or operating any loyalty program or promotional activity through PerkPlus, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree to these Terms, or if you are not authorised to bind the business on whose behalf you access PerkPlus, you must immediately cease using the Portal and related services.</p>
<p>PerkPlus is a digital loyalty platform that enables businesses ("Merchants", "you", or "your") to create and manage loyalty programs, issue loyalty stamps to customers, redeem rewards, oversee customer engagement and behaviour, communicate offers, analyse performance metrics, manage internal staff access, and export customer data collected through loyalty activity. PerkPlus operates solely as the technology provider that facilitates these interactions; we do not manage or participate in the operational or commercial activities of your business.</p>`,
    },
    {
        id: 2,
        title: 'Merchant Account Requirements',
        content: `<p>To create a Merchant account, you must provide accurate, complete, and current business information and must maintain the accuracy of this information throughout the duration of your use of PerkPlus. By registering, you represent and warrant that you are authorised to bind the business to these Terms and that you will comply with all applicable laws, regulations, and industry standards relating to loyalty programs, marketing, promotions, privacy, and consumer protection. You are responsible for all activity conducted under your account, including activities carried out by employees or staff members to whom you grant portal access. It is your responsibility to manage, supervise, and revoke staff access when required. PerkPlus may suspend, restrict, or terminate Merchant accounts that contain inaccurate or misleading information or that are used in a manner inconsistent with these Terms.</p>`,
    },
    {
        id: 3,
        title: 'Description of the PerkPlus Service',
        content: `<p>PerkPlus provides a digital loyalty platform enabling Merchants to:</p>
<ul>
  <li>Create and manage loyalty programs, offers, and reward rules;</li>
  <li>Issue loyalty stamps to Customers;</li>
  <li>Redeem rewards;</li>
  <li>View analytics and customer engagement insights;</li>
  <li>Export customer data generated through loyalty interactions;</li>
  <li>Manage staff access within the Portal;</li>
  <li>Communicate with Customers through permitted channels.</li>
</ul>
<p>Merchants acknowledge that PerkPlus acts solely as a technology provider. PerkPlus does not participate in the creation, fulfilment, or operational management of Merchant loyalty programs.</p>`,
    },
    {
        id: 4,
        title: 'Subscription Fees and Billing',
        content: `<p>4. Subscription Fees and Billing Use of the PerkPlus Business Portal requires payment of subscription fees. The subscription fees, billing cycle, and applicable charges are displayed within the Portal or on the PerkPlus website and may change from time to time. By maintaining an active Merchant account, you authorise PerkPlus to charge your nominated payment method for recurring subscription fees and any additional charges applied to your account, including but not limited to SMS messaging fees or one-off integration fees when relevant. .</p>
<p><strong>Flexible Free-Trial Terms</strong><br />PerkPlus may, at its discretion, offer new Merchants a free trial period during which access to the PerkPlus Business Portal is provided without charge. The length, availability, and specific conditions of any free trial may vary and will be displayed at the time you create your account or accept the promotional offer. Free-trial offers may be modified, extended, shortened, or withdrawn by PerkPlus at any time. Unless you cancel your subscription before the end of the free-trial period, your nominated payment method will automatically be charged the applicable subscription fees at the conclusion of the trial. All fees are non-refundable to the extent permitted by law.</p>`,
    },
    {
        id: 5,
        title: 'Merchant Responsibilities',
        content: `<p>As a Merchant, you agree to:</p>
<ul>
  <li>Create accurate and lawful loyalty programs and promotional offers;</li>
  <li>Honour rewards in accordance with your own stated terms, unless circumstances reasonably prevent you from doing so;</li>
  <li>Manage staff access responsibly and remove access for individuals who are no longer authorised;</li>
  <li>Ensure compliance with all applicable legislation, including the Privacy Act 1988 and Spam Act 2003;</li>
  <li>Use customer data only for the purposes for which it was collected;</li>
  <li>Maintain appropriate cybersecurity and operational safeguards within your business;</li>
  <li>Not mislead Customers regarding reward availability, expiry, or value.</li>
</ul>
<p>As a Merchant, you are responsible for safeguarding your portal credentials, supervising staff activity, and ensuring that your staff understand and comply with your obligations under these Terms. You must not engage in fraudulent activity, artificially manipulate customer activity or loyalty transactions, exploit the system in ways not intended by PerkPlus, interfere with platform functionality, or use PerkPlus for any unlawful or harmful purpose. You must not create or distribute content that infringes the intellectual property rights of others or violates advertising regulations.</p>`,
    },
    {
        id: 6,
        title: 'Reward and Offer Management',
        content: `<p>Merchants have full discretion to create and modify loyalty stamps, reward rules, and promotional offers. PerkPlus does not pre-approve or manually verify Merchant-generated content.</p>
<p>However, PerkPlus retains the right to moderate, edit, restrict, or remove loyalty programs, offers, or content that:</p>
<ul>
  <li>is misleading, deceptive, or unlawful;</li>
  <li>may harm Customers;</li>
  <li>violates advertising or consumer protection laws;</li>
  <li>creates excessive system strain or operational risk;</li>
  <li>violates these Terms or PerkPlus policies.</li>
</ul>
<p>PerkPlus may take such actions without prior notice where necessary to protect platform integrity or Customer interests.</p>`,
    },
    {
        id: 7,
        title: 'Customer Data Access and Exports',
        content: `<p>Merchants may access and export customer data collected through loyalty interactions in the Portal. This may include names, visit history, reward progress, and other relevant information.</p>
<p>Upon exporting data, the Merchant becomes fully responsible for:</p>
<ul>
  <li>storing and securing exported data;</li>
  <li>complying with all applicable privacy and consumer protection laws;</li>
  <li>protecting the data against misuse, unauthorised disclosure, or breach.</li>
</ul>
<p>You acknowledge that you are wholly responsible for any misuse, breach, or non-compliant handling of customer information after it is exported from PerkPlus. You agree to indemnify PerkPlus against any loss arising from your failure to comply with such obligation</p>`,
    },
    {
        id: 8,
        title: 'Staff Access Management',
        content: `<p>PerkPlus provides Merchants with the ability to create and manage staff access accounts with varying permission levels. All actions taken by staff members within the Portal are deemed to be authorised by the Merchant. You are responsible for monitoring staff behaviour, ensuring compliance with these Terms, authorising and deauthorising access appropriately, and protecting the confidentiality of staff login details. PerkPlus is not liable for misuse of the Portal by staff whose access was granted, retained, or inadequately supervised by the Merchant.</p>`,
    },
    {
        id: 9,
        title: 'Prohibited Merchant Conduct',
        content: `<p>You must not use PerkPlus in any manner that is fraudulent, harmful, or inconsistent with the intended operation of a loyalty platform. Prohibited conduct includes the falsification or manipulation of stamps or rewards, interference with the technical functioning of PerkPlus, misuse of customer information, unauthorised mass marketing, reverse-engineering of platform code, unauthorised resale or sharing of Portal access, or the creation of offers or loyalty structures that are unlawful, discriminatory, or harmful to customers. PerkPlus may remove any content or suspend Merchant access where such conduct is identified.</p>`,
    },
    {
        id: 10,
        title: 'Merchant Cancellation and Data Retention',
        content: `<p>A Merchant may cancel their subscription at any time. Upon cancellation:</p>
<ul>
  <li>the Merchant's business profile becomes inactive and non-visible to Customers;</li>
  <li>access to the Portal is removed;</li>
  <li>Customer profiles remain active and unaffected;</li>
  <li>Merchant data is retained by PerkPlus for operational and legal purposes.</li>
</ul>
<p>PerkPlus may retain Merchant-related data for a period necessary to satisfy legal obligations or internal record-keeping requirements.</p>`,
    },
    {
        id: 11,
        title: 'Service Availability and Modifications',
        content: `<p>PerkPlus may modify, update, or enhance the Portal and associated features at any time. We may also suspend or restrict access temporarily for maintenance, upgrades, or unplanned outages. You acknowledge that the availability of the Portal may be affected by factors beyond our control and that PerkPlus does not guarantee uninterrupted or error-free operation. PerkPlus shall not be liable for any loss arising from downtime, system maintenance, or modifications, except where required under the Australian Consumer Law.</p>`,
    },
    {
        id: 12,
        title: 'Disclaimer',
        content: `<p>PerkPlus provides the Portal and associated services on an "as is" and "as available" basis. PerkPlus does not guarantee uninterrupted operation, error-free functionality, or the accuracy of analytics or system-generated insights. PerkPlus is not responsible for Merchant misrepresentations, misuse of customer data, or the operation of individual loyalty programs.</p>`,
    },
    {
        id: 13,
        title: 'Limitation of Liability',
        content: `<p>Nothing in these Terms excludes any rights or guarantees you may have under the Australian Consumer Law. Subject to those guarantees, PerkPlus shall not be liable for any indirect, incidental, special, or consequential loss, including lost profits, lost business, loss of data, reputational damage, or any similar harm. PerkPlus is not liable for the misconduct, negligence, inaccuracy, or unlawful behaviour of Merchants or staff, nor for the misuse of exported customer data. To the maximum extent permitted by law, the total aggregate liability of PerkPlus to any Merchant for all claims arising out of or in connection with the use of the Portal is limited to the subscription fees actually paid by the Merchant during the sixty-day period immediately preceding the event giving rise to liability.</p>`,
    },
    {
        id: 14,
        title: 'Termination',
        content: `<p>PerkPlus may suspend or terminate your access to the Business Portal where necessary to protect customers, prevent fraud, ensure legal compliance, or preserve the integrity of the platform. Termination may occur with or without notice depending on the urgency of the circumstances. Termination does not relieve you of any outstanding payment obligations.</p>`,
    },
    {
        id: 15,
        title: 'Governing Law',
        content: `<p>These Terms are governed by the laws of Queensland, Australia. Any disputes shall be resolved exclusively in the courts of Brisbane, Queensland.</p>`,
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