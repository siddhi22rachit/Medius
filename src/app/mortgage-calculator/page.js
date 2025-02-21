"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const MortgageCalculator = () => {
  // State for calculator inputs
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("400097");

  // State for calculator outputs
  const [monthlyPayment, setMonthlyPayment] = useState(2146);
  const [principalInterest, setPrincipalInterest] = useState(1517);
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  const calculateMonthlyPayment = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const principal =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setPrincipalInterest(Math.round(principal));
    const total = Math.round(principal + propertyTax + homeInsurance + hoaFees);
    setMonthlyPayment(total);
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [
    homePrice,
    downPayment,
    interestRate,
    loanTerm,
    propertyTax,
    homeInsurance,
    hoaFees,
  ]);

  const handleHomePriceChange = (e) => {
    setHomePrice(Number(e.target.value.replace(/[^0-9]/g, "")));
  };

  const handleDownPaymentChange = (e) => {
    const newDownPayment = Number(e.target.value.replace(/[^0-9]/g, ""));
    setDownPayment(newDownPayment);
    if (homePrice > 0) {
      setDownPaymentPercent(Math.round((newDownPayment / homePrice) * 100));
    }
  };

  // Calculate the percentages for the breakdown chart
  const totalForChart =
    principalInterest + propertyTax + homeInsurance + hoaFees;
  const piPercent = ((principalInterest / totalForChart) * 100).toFixed(0);
  const taxPercent = ((propertyTax / totalForChart) * 100).toFixed(0);
  const insurancePercent = ((homeInsurance / totalForChart) * 100).toFixed(0);
  const hoaPercent = ((hoaFees / totalForChart) * 100).toFixed(0);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-gray-800 font-sans">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4  sm:px-6 lg:px-8 py-30 mt-[250px]" >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-gray-900 tracking-tight"
        >
          Mortgage Calculator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm mb-8 text-gray-600 max-w-3xl"
        >
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-6">
              <label className="block font-medium mb-2 text-gray-700">
                Home price
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  value={`${homePrice.toLocaleString()}`}
                  onChange={handleHomePriceChange}
                />
                <span className="absolute left-3 top-3 text-gray-500">$</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Monthly Payment Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <p className="text-gray-600 mb-2">Monthly payment</p>
              <motion.h2
                key={monthlyPayment}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-gray-900"
              >
                ${monthlyPayment}/mo
              </motion.h2>
            </div>
            <div className="ml-auto">
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Get pre-approved
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-gray-500">
              ${(homePrice * 0.5).toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">
              ${(homePrice * 1.5).toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            min={homePrice * 0.5}
            max={homePrice * 1.5}
            step="1000"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
          />
        </motion.div>

        {/* Additional Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block text-xs text-gray-500 mb-1">ZIP code</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block text-xs text-gray-500 mb-1">
              Down payment
            </label>
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-l-lg p-3 pl-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={`${downPayment.toLocaleString()}`}
                  onChange={handleDownPaymentChange}
                />
                <span className="absolute left-3 top-3 text-gray-500">$</span>
              </div>
              <div className="relative w-16">
                <input
                  type="text"
                  className="w-full border border-l-0 border-gray-300 rounded-r-lg p-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
                  value={downPaymentPercent}
                  onChange={(e) => {
                    const newPercent = Number(
                      e.target.value.replace(/[^0-9]/g, "")
                    );
                    setDownPaymentPercent(newPercent);
                    setDownPayment(Math.round((homePrice * newPercent) / 100));
                  }}
                />
                <span className="absolute right-3 top-3 text-gray-500">%</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block text-xs text-gray-500 mb-1">
              Interest rate
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(
                    Number(e.target.value.replace(/[^0-9.]/g, ""))
                  )
                }
              />
              <span className="absolute right-3 top-3 text-gray-500">%</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block text-xs text-gray-500 mb-1">
              Length of loan
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            >
              <option value="30">30 years</option>
              <option value="20">20 years</option>
              <option value="15">15 years</option>
              <option value="10">10 years</option>
            </select>
          </div>
        </motion.div>

        {/* Monthly Payment Breakdown */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl font-medium mb-6 text-gray-800"
        >
          Monthly payment breakdown
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <motion.h3
              key={monthlyPayment}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold mb-6 text-gray-900"
            >
              ${monthlyPayment}/mo
            </motion.h3>

            {/* Animated Bar Chart */}
            <div className="relative h-16 rounded-xl bg-gray-100 overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${piPercent}%` }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute h-full bg-green-600 left-0 top-0 rounded-l-xl"
              ></motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${taxPercent}%` }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ left: `${piPercent}%` }}
                className="absolute h-full bg-indigo-500"
              ></motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${insurancePercent}%` }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  left: `${parseInt(piPercent) + parseInt(taxPercent)}%`,
                }}
                className="absolute h-full bg-yellow-400"
              ></motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${hoaPercent}%` }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{
                  left: `${
                    parseInt(piPercent) +
                    parseInt(taxPercent) +
                    parseInt(insurancePercent)
                  }%`,
                }}
                className="absolute h-full bg-red-400 rounded-r-xl"
              ></motion.div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 mr-2 rounded-sm"></div>
                <span>Principal & interest: {piPercent}%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 mr-2 rounded-sm"></div>
                <span>Property taxes: {taxPercent}%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 mr-2 rounded-sm"></div>
                <span>Insurance: {insurancePercent}%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 mr-2 rounded-sm"></div>
                <span>HOA fees: {hoaPercent}%</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 mr-2 rounded-sm"></div>
              <span className="font-medium">Principal & interest</span>
            </div>
            <motion.div
              key={principalInterest}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-right font-bold"
            >
              ${principalInterest}
            </motion.div>

            <div className="flex items-center">
              <div className="w-4 h-4 bg-indigo-500 mr-2 rounded-sm"></div>
              <span className="font-medium">Property taxes</span>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 pl-6 text-right focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                value={propertyTax}
                onChange={(e) =>
                  setPropertyTax(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <span className="absolute left-2 top-2 text-gray-500">$</span>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></div>
              <span className="font-medium">Homeowners insurance</span>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 pl-6 text-right focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                value={homeInsurance}
                onChange={(e) =>
                  setHomeInsurance(
                    Number(e.target.value.replace(/[^0-9]/g, ""))
                  )
                }
              />
              <span className="absolute left-2 top-2 text-gray-500">$</span>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 mr-2 rounded-sm"></div>
              <span className="font-medium">HOA fees</span>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 pl-6 text-right focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
                value={hoaFees}
                onChange={(e) =>
                  setHoaFees(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <span className="absolute left-2 top-2 text-gray-500">$</span>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 mr-2 rounded-sm"></div>
              <span className="font-medium">Utilities</span>
            </div>
            <div className="flex justify-end items-center">
              <span className="font-bold">${utilities}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-xl font-bold mb-4">
            How to use this mortgage calculator?
          </h2>
          <p className="mb-4">
            Play around with different home prices, locations, down payments,
            interest rates, and mortgage lengths to see how they impact your
            monthly mortgage payments.
          </p>
          <p className="mb-4">
            Increasing your down payment and decreasing your interest rate and
            mortgage term length will make your monthly payment go down. Taxes,
            insurance, and HOA fees will vary by location. If you enter a down
            payment amount that's less than 20% of the home value, private
            mortgage insurance (PMI) costs will be added to your monthly
            mortgage payment. As the costs of utilities can vary from county to
            county, we've included a utilities estimate that you can break down
            by service. If you're thinking about buying a condo or live in a
            community with a Homeowners Association (HOA), you can add HOA fees.
          </p>
        </div>

        {/* How much monthly mortgage payment can I afford? */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <motion.h2 
            className="text-xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How much monthly mortgage payment can I afford?
          </motion.h2>
          <motion.p 
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to
            qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
          </motion.p>
          <motion.p 
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much
            of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It's most commonly written as a percentage. For
            example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
          </motion.p>
          
          <motion.div 
            className="my-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-center font-medium mb-4">Formula for calculating your debt-to-income (DTI) ratio:</p>
            <div className="flex items-center justify-center text-center">
              <div className="border-b-2 border-gray-800 pb-1 text-center">
                <div className="px-4">Monthly Debt Payments</div>
              </div>
              <div className="px-4">×</div>
              <div className="px-4">100</div>
              <div className="px-4">=</div>
              <div className="px-4 text-green-700 font-bold">
                Debt-to-Income<br />Ratio
              </div>
            </div>
            <div className="text-center mt-1">
              <div>Monthly Gross Income</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 bg-gray-100 p-6 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-4">Here's an example of what calculating your DTI might look like:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Debts</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Auto loan</div>
                  <div className="text-right">$350/month</div>
                  <div>Student loans</div>
                  <div className="text-right">$220/month</div>
                  <div>Credit cards</div>
                  <div className="text-right">$130/month</div>
                  <div>Expected housing costs</div>
                  <div className="text-right">$1,800/month</div>
                  <div className="font-medium mt-2 pt-2 border-t">$2,500 monthly debt obligation</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Income</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monthly salary $60,000/12</div>
                  <div className="text-right">$5,000/month</div>
                  <div>Monthly side-gig income</div>
                  <div className="text-right">$1,500/month</div>
                  <div className="font-medium mt-2 pt-2 border-t">$6,500 monthly income</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center text-center">
              <div className="text-center pb-1 border-b-2 border-gray-800">
                <div className="font-medium">$2,500</div>
              </div>
              <div className="px-4">×</div>
              <div className="px-4">100</div>
              <div className="px-4">=</div>
              <div className="px-4 text-green-700 font-bold text-2xl">
                38% DTI
              </div>
            </div>
            <div className="text-center mt-1">
              <div className="font-medium">$6,500</div>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-4">The above scenario is for illustrative purposes only.</p>
          </motion.div>
        </div>

        {/* Property Tax Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Do you know your property tax rate?
          </h2>
          <p className="mb-4">
            While exact property tax rates vary by county, it can be helpful to
            look at taxes on the state level to get an idea for taxes in your
            state. Here's a helpful chart from Forbes breaking down the Census
            Bureau's 2021 American Community Survey 5-year estimate:
          </p>

          {/* Property Tax Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-right">
                    Median Effective Property Tax Rate
                  </th>
                  <th className="p-3 text-right">
                    Mean Effective Property Tax Rate
                  </th>
                  <th className="p-3 text-right">Median Home Value</th>
                  <th className="p-3 text-right">Median Property Taxes Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border-b">AL</td>
                  <td className="p-3 border-b text-right">0.41%</td>
                  <td className="p-3 border-b text-right">0.40%</td>
                  <td className="p-3 border-b text-right">$157,100</td>
                  <td className="p-3 border-b text-right">$646</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 border-b">AK</td>
                  <td className="p-3 border-b text-right">1.23%</td>
                  <td className="p-3 border-b text-right">1.04%</td>
                  <td className="p-3 border-b text-right">$282,800</td>
                  <td className="p-3 border-b text-right">$3,464</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b">AZ</td>
                  <td className="p-3 border-b text-right">0.62%</td>
                  <td className="p-3 border-b text-right">0.63%</td>
                  <td className="p-3 border-b text-right">$265,600</td>
                  <td className="p-3 border-b text-right">$1,648</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 border-b">AR</td>
                  <td className="p-3 border-b text-right">0.62%</td>
                  <td className="p-3 border-b text-right">0.64%</td>
                  <td className="p-3 border-b text-right">$142,100</td>
                  <td className="p-3 border-b text-right">$878</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Better Calculator Features */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-xl font-bold mb-4">
            How is Better's mortgage calculator different?
          </h2>
          <h3 className="text-lg font-bold mb-2">
            This mortgage calculator shows your payments with taxes and
            insurance
          </h3>
          <p className="mb-4">
            The property taxes you contribute are used to finance the services
            provided by your local government to the community. These services
            encompass schools, libraries, roads, parks, water treatment, police,
            and fire departments. Even after your mortgage has been fully paid,
            you will still need to pay property taxes. If you neglect your
            property taxes, you run the risk of losing your home to your local
            tax authority.
          </p>
          <p className="mb-4">
            Your lender will usually require you to have homeowners insurance
            while you're settling your mortgage. This is a common practice among
            lenders because they understand that nobody wants to continue paying
            a mortgage on a home that's been damaged or destroyed.
          </p>
        </div>

        {/* How Much Home Can I Afford */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-xl font-bold mb-4">
            How much home can I afford?
          </h2>
          <p className="mb-4">
            Once again, the easiest way to do this is with a calculator! To know
            if a home is in your budget, try out our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              home affordability calculator
            </a>
            . This calculator will take a few inputs from you, like income and
            savings, and let you know the maximum amount of home you can afford.
          </p>
        </div>

        {/* Next Steps */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-xl font-bold mb-4">
            Next steps to buying a house
          </h2>
          <p className="mb-4">
            There are{" "}
            <a href="#" className="text-blue-600 hover:underline">
              8 steps to buying a house
            </a>{" "}
            and by using this calculator you've completed step 2 (calculating
            your home affordability) and maybe even step 1 (getting your
            finances in order).
          </p>
          <p className="mb-4">
            The next step is getting pre-approved. A mortgage pre-approval with
            Better Mortgage takes as little as 3-minutes and doesn't impact your
            credit score. It's a free, no- commitment way to see how much home
            you can buy, the mortgages you qualify for, and the range of
            interest rates you'll be offered.
          </p>
          <p className="mb-4">
            If you're ready to buy a home now, our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              definitive home buying checklist
            </a>{" "}
            can walk you through everything you need to know to get the home you
            want. With your Better Mortgage pre-approval letter in hand, you'll
            be able to show sellers and real estate agents that you mean
            business—giving you an edge over homebuyers that don't have this
            kind of proof that they're financially ready to purchase. And by
            working with an agent from Better Real Estate and funding with
            Better Mortgage, you'll save $2,000 on closing costs, and save up to
            $8,200 on average over the life of your loan.**
          </p>
        </div>

        {/* Resources Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">More resources</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg mb-2">
                Get pre-approved to see how much you can borrow
              </h3>
              <a
                href="#"
                className="text-green-700 font-medium hover:underline flex items-center mt-auto"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Won't impact your credit
              </p>
            </div>

            <div className="border border-gray-200 rounded p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg mb-2">See today's rates in your area</h3>
              <a
                href="#"
                className="text-green-700 font-medium hover:underline flex items-center mt-auto"
              >
                See rates
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="border border-gray-200 rounded p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg mb-2">
                Find out your max homebuying budget
              </h3>
              <a
                href="#"
                className="text-green-700 font-medium hover:underline flex items-center mt-auto"
              >
                Try our mortgage calculator
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-xs text-gray-500 mt-8">
          <p>
            **Better Mortgage Corporation, Better Home LLC, Better Real Estate,
            LLC, Better Cover, LLC, and Better Settlement Services all work
            together to deliver better terms to our customers.
          </p>
          <p>
            ***The average lifetime savings estimate is based on a comparison of
            the Freddie Mac Primary Mortgage Market Survey's (PMMS) 30-year
            fixed-rate mortgage product with Better Mortgage's own offered rate
            for a comparable mortgage product over the period between Jan. -
            Dec. 2021. PMMS is based on conventional, conforming,
            fully-amortizing home purchase loans for borrowers with excellent
            credit and 20% down payments. Better Mortgage's offered rate is
            based on pricing output for a 30-year fixed-rate mortgage product
            with a 30-day lock period for a single-family, owner-occupied
            residential property and a borrower with excellent (760+ FICO)
            credit and a loan-to-value ratio of 80 percent. Individual savings
            could vary based on current market rates, property type, loan
            amount, loan-to-value, credit score, debt-to-income ratio and other
            variables.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MortgageCalculator;
