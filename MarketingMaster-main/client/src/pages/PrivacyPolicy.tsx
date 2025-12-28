import { Helmet } from "react-helmet-async";
import SectionHeading from "@/components/common/SectionHeading";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Danitum Technologies</title>
        <meta name="description" content="Privacy Policy for Danitum Technologies. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
          />

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to Danitum Technologies ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700">
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you provide directly to us, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information (company name, job title)</li>
                  <li>Project details and requirements</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website URLs</li>
                  <li>Pages viewed and time spent on our site</li>
                  <li>Device information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-gray-700">
                  We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about your projects and inquiries</li>
                  <li>Sending newsletters and marketing communications (with your consent)</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Personalizing your experience on our website</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Sharing Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights, property, or safety.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
                  <li><strong>Consent:</strong> With your explicit consent, we may share information for specific purposes.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-gray-700">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies Policy</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze site traffic and usage</li>
                  <li>Provide personalized content</li>
                  <li>Ensure website security</li>
                </ul>
                <p className="text-gray-700">
                  You can manage cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Effective Date" at the top of this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Danitum Technologies</strong></p>
                  <p className="text-gray-700">Office 178/206 Sanquelim - Goa, 403505</p>
                  <p className="text-gray-700">Email: arif@danitum.com</p>
                  <p className="text-gray-700">Phone: +91 1234567890</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Compliance and Standards</h2>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy is designed to comply with global data protection standards, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>General Data Protection Regulation (GDPR) - EU</li>
                  <li>California Consumer Privacy Act (CCPA) - US</li>
                  <li>Personal Information Protection and Electronic Documents Act (PIPEDA) - Canada</li>
                  <li>Information Technology Act, 2000 and rules - India</li>
                  <li>Other applicable regional data protection laws</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;