import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-8 pb-4 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Better Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-green-600 font-semibold text-xl">Better</h2>
              <p className="text-gray-600 text-sm">
                Better is a family of companies serving all your homeownership
                needs.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">Better</span>
                  <span className="text-gray-400 ml-1">Mortgage</span>
                </div>
                <p className="text-sm text-gray-600">
                  We can't wait to say "Welcome home." Apply 100% online, with
                  expert customer support.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">Better</span>
                  <span className="text-gray-400 ml-1">Real Estate</span>
                </div>
                <p className="text-sm text-gray-600">
                  Connect with a local Better Real Estate Partner Agent to find
                  out all the ways you can save.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">Better</span>
                  <span className="text-gray-400 ml-1">Cover</span>
                </div>
                <p className="text-sm text-gray-600">
                  Shop, bundle, and save on insurance coverage for home, auto,
                  life, and more.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">Better</span>
                  <span className="text-gray-400 ml-1">Inspect</span>
                </div>
                <p className="text-sm text-gray-600">
                  Get free repair estimates, 24-hour turnarounds on reports, and
                  rest easy with our 100-day inspection guarantee.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">Better</span>
                  <span className="text-gray-400 ml-1">
                    Settlement Services
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Get transparent rates when you shop for title insurance all in
                  one convenient place.
                </p>
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Home affordability calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Mortgage calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Free mortgage calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Mortgage calculator with taxes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Mortgage calculator with PMI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Rent vs buy calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  HELOC payment calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  HELOC vs cash-out refinance calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Learning center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us and Legal Column */}
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-gray-700 mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@better.com"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    hello@better.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:415-523-8837"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    415-523-8837
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Glossary
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    NMLS Consumer Access
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Disclosures & Licensing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Affiliated Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Browser Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Text and Housing Icons */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-xs text-gray-600 space-y-4">
            <p>
              1 Better Mortgage’s One Day Mortgage™ promotion offers qualified
              customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a mortgage loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. The underwriting determination is subject to
              customary terms, including fraud and anti-money laundering checks,
              that take place pre-closing and which may trigger additional
              required documentation from the customer. Better Mortgage does not
              guarantee that initial underwriting approval will result in a
              final underwriting approval. See One Day Mortgage™ Terms and
              Conditions.
            </p>

            <p>
              2Better Mortgage’s One Day HELOC™ promotion offers qualified
              customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a HELOC loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. The underwriting determination is subject to
              customary terms, including fraud and anti-money laundering checks,
              that take place pre-closing and which may trigger additional
              required documentation from the customer. Better Mortgage does not
              guarantee that initial underwriting approval will result in final
              underwriting approval. See One Day Heloc™ Terms and Conditions.
            </p>

            <p>
              3Assumes borrowers are eligible for the Automated Valuation Model
              (AVM) to calculate their home value, their loan amount is less
              than $400,000, all required documents are uploaded to their Better
              Mortgage online account within 24 hours of application, closing is
              scheduled for the earliest available date and time, and a notary
              is readily available. Funding timelines may vary and may be longer
              if an appraisal is required to calculate a borrower’s home value.
            </p>

            <div className="mt-12 pt-6 border-t border-gray-200"></div>

            <p>
              © 2025 Better Home & Finance Holding Company and/or its
              affiliates. Better is a family of companies. Better Mortgage
              Corporation provides home loans; Better Real Estate, LLC and
              Better Real Estate California Inc License # 02164055 provides real
              estate services; Better Cover, LLC sells insurance products; and
              Better Settlement Services provides title insurance services; and
              Better Inspect, LLC provides home inspection services. All rights
              reserved.
            </p>
            <p>
              Home lending products offered by Better Mortgage Corporation.
              Better Mortgage Corporation is a direct lender. NMLS #330511. 1
              World Trade Center, 80th Floor, New York, NY 10007. Loans made or
              arranged pursuant to a California Finance Lenders Law License. Not
              available in all states. Equal Housing Lender. NMLS Consumer
              Access{" "}
            </p>

            <p>
              {" "}
              Better Real Estate, LLC dba BRE, Better Home Services, BRE
              Services, LLC and Better Real Estate, and operating in the State
              of California through its wholly owned subsidiary Better Real
              Estate California Inc., is a licensed real estate brokerage and
              maintains its corporate headquarters at 325-41 Chestnut Street,
              Suite 826, Philadelphia, PA 19106. Here is a full listing of
              Better Real Estate, LLC’s license numbers. Better Real Estate, LLC
              provides access to real estate brokerage services via its
              nationwide network of partner brokerages and real estate agents
              (“Better Real Estate Partner Agents”). Equal Housing Opportunity.
              All rights reserved.
            </p>
            <p> New York State Housing and Anti-Discrimination Notice</p>
            <p>New York Standard Operating Procedures</p>
            <p>
              {" "}
              Texas Real Estate Commission: Information About Brokerage Services
              | Consumer Protection Notice
            </p>
            <p>
              Better Settlement Services, LLC. 325-41 Chestnut Street, Suite
              803, Philadelphia, PA 19106.
            </p>
            <p>
              Homeowners insurance policies are offered through Better Cover,
              LLC, a Pennsylvania Resident Producer Agency. License #881593.
              325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            </p>
            <p>
              Insurance quotes and policies are offered through Better Cover,
              LLC. A Pennsylvania Resident Producer Agency. License #881593.
              Here is a full listing of Better Cover, LLC’s license numbers.
            </p>
            <p>
              {" "}
              Better Inspect, LLC maintains its corporate headquarters at 325-41
              Chestnut Street, Suite 846, Philadelphia, PA 19106.
            </p>
            <p>
              Better Mortgage Corporation, Better Real Estate, LLC, Better
              Settlement Services, LLC, Better Cover, LLC, Better Connect, and
              Better Inspect, LLC are separate operating subsidiaries of Better
              Home & Finance Holding Company. Each company is a separate legal
              entity operated and managed through its own management and
              governance structure as required by its state of incorporation,
              and applicable and legal and regulatory requirements. Products not
              available in all states.
            </p>
            <p>
              Any unauthorized use of any proprietary or intellectual property
              is strictly prohibited. All trademarks, service marks, trade
              names, logos, icons, and domain names are proprietary to Better
              Home & Finance Holding Company. Better Home & Finance Holding
              Company trademarks are federally registered with the U. S. Patent
              and Trademark Office. Better Cover is a registered trademark with
              the U.S. Patent and Trademark Office and is owned by Better Cover,
              LLC.
            </p>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <img
              src="/api/placeholder/24/24"
              alt="Equal Housing"
              className="h-6 w-6"
            />
            <img
              src="/api/placeholder/24/24"
              alt="Housing Opportunity"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
