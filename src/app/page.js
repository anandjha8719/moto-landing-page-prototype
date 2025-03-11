import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>MotoMate123 - Motorcycle Appraisal Software</title>
        <meta
          name="description"
          content="Streamlined, accurate valuation software for motorcycle businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />

      {/* Streamline Section */}
      <section className="container mx-auto py-16 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          <span className="text-green-500">The easiest way</span> to streamline
          motorcycle appraisals and boost margins
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex items-start gap-6">
              <div className="p-3 bg-gray-100 rounded-full">
                <Image
                  src="/icon-appraisal.png"
                  alt="Search Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">
                  Effortless One-Click Appraisals
                </h3>
                <p className="text-gray-700">
                  Instantly buy and price right, turning units faster for higher
                  margins.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6">
              <div className="p-3 bg-gray-100 rounded-full">
                <Image
                  src="/icon-motorcycle.png"
                  alt="Motorcycle Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">
                  Seamless Inventory Management
                </h3>
                <p className="text-gray-700">
                  Quickly determine price positions and achieve rapid stock
                  turnovers.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-6">
              <div className="p-3 bg-gray-100 rounded-full">
                <Image
                  src="/icon-wrench.png"
                  alt="Wrench Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">
                  Service to Sales Conversion
                </h3>
                <p className="text-gray-700">
                  Leverage every service visit into a potential sale with easy
                  trade appraisals and damage tracking.
                </p>
              </div>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="flex justify-center">
            <Image
              src="/motomate123-app-mockup.png"
              alt="MotoMate App Screenshot"
              width={350}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto py-16 px-4 md:px-6 text-center bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Choose <span className="text-green-500">MotoMate?</span>
        </h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Unlock the full potential of your powersports business with
          cutting-edge technology
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon-appraisal.png"
                alt="Brain Icon"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Make Smarter Decisions When Appraising Trade-Ins
            </h3>
            <p className="text-gray-700">
              Are your appraisal managers still using intuition and an outdated
              book to determine values on trade-ins? Our data gives consistency
              and accountability to the process and enable managers to make
              smarter decisions at the time of appraisal. Our tool is easy to
              use and so cool that it's downright addictive.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon-motorcycle.png"
                alt="Money Icon"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Raise Your Used Bike Margins And Eliminate Aged Inventory
            </h3>
            <p className="text-gray-700">
              That sounds impossible! But that's what our customers do. With one
              button click, we'll show your managers the formula to appraise and
              price so your used bikes are price positioned every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon-wrench.png"
                alt="Tag Icon"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Convert More Service Customers To New Bike Sales Every Month
            </h3>
            <p className="text-gray-700">
              Converting Service customers into new bike deals has 3 huge
              benefits: you take in nice trade-ins for the right money, your
              Customer Satisfaction Scores are higher, and your margins are
              higher (we all know the happiest customers spend the most money!).
              Our mobile app makes it possible and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
}
