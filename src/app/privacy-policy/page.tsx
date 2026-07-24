"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-['Switzer']">
      <Navbar />

      <main className="w-full mx-auto px-[40px] lg:px-[140px] max-w-[1920px] flex-1 pt-32 pb-24 font-['Switzer']">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-8 tracking-tight leading-[1.1]">
            Privacy <span className="text-[#E61F93]">Policy</span>
          </h1>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-medium">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
              <p>
                When you interact with our website, specifically through our contact forms or popups, we may collect personal information such as your Name, Email Address, Phone Number, State, and any message or details you provide to us regarding your project needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Data</h2>
              <p>
                The information you submit is used strictly for the purpose of communicating with you. We use this data to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Respond to your inquiries and project requests.</li>
                <li>Contact you regarding our design, development, and related services.</li>
                <li>Provide you with updates, proposals, or quotes related to your submissions.</li>
              </ul>
              <p className="mt-4">
                We respect your privacy and will never sell, rent, or trade your personal information to outside parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. Data Removal and Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data at any time. If you would like us to remove your information from our records, please contact us directly. 
              </p>
              <p className="mt-4">
                To request data removal, simply send an email to <a href="mailto:hello@codewrote.com" className="text-[#E61F93] hover:underline font-bold">hello@codewrote.com</a> with the subject line <strong>"Data Removal Request"</strong>, and we will promptly delete your details from our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">5. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out to us at <a href="mailto:hello@codewrote.com" className="text-[#E61F93] hover:underline font-bold">hello@codewrote.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
