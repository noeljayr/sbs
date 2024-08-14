import checkMark from "@/public/svg/tabler-icon-circle-check-filled.svg";
import Image from "next/image";
import "@/css/pricing.css"
import Link from "next/link";



function Pricing() {
  return (
    <div className="pricing flex flex-col gap-4 items-center" id="pricing">
      <div className="flex flex-col items-center">
        <p className="primary-text">Pricing</p>
        <h1 className="text-center">Choose The Best Option For You</h1>
      </div>

      <div className="pricing-container grid gap-4">
        <div className="plan">
          <h2>Free</h2>
          <div>
            <Image
              src={checkMark}
              alt="check marker"
              height={100}
              width={100}
            />
            <span>
              <h3>Basic Administrative Tools</h3>
              <ul>
                <li>Scheduling simplification</li>
                <li>Absenteeism recording</li>
                <li>Grade transmission and storage</li>
              </ul>
            </span>
          </div>

          <div>
            <Image
              src={checkMark}
              alt="check marker"
              height={100}
              width={100}
            />
            <span>
              <h3>Educational Resources</h3>
              <ul>
                <li>Access to basic instructional resources</li>
                <li>
                  Tools for students to self-educate and learn independently
                </li>
              </ul>
            </span>
          </div>

          <Link href="/signup" className="cta">Free</Link>
        </div>
        <div className="plan premium">
          <h2>Premium</h2>
          <div>
            <Image
              src={checkMark}
              alt="check marker"
              height={100}
              width={100}
            />
            <span>
              <h3>Advanced Administrative Tools</h3>
              <ul>
                <li>
                  Enhanced scheduling features (e.g., automated schedule
                  optimization)
                </li>
                <li>Advanced absenteeism and grade tracking analytics</li>
              </ul>
            </span>
          </div>
          <div>
            <Image
              src={checkMark}
              alt="check marker"
              height={100}
              width={100}
            />
            <span>
              <h3>
                <b>AI</b> Integration
              </h3>
              <ul>
                <li>AI-driven tools for personalized learning experiences</li>
                <li>
                  Intelligent assessment and examination systems for tracking
                  student progress
                </li>
              </ul>
            </span>
          </div>
          <div>
            <Image
              src={checkMark}
              alt="check marker"
              height={100}
              width={100}
            />
            <span>
              <h3>Continuous Updates and Support</h3>
              <ul>
                <li>Priority customer support and consultation services</li>
              </ul>
            </span>
          </div>

         <Link href="/signup" className="cta">$20 / Month</Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
