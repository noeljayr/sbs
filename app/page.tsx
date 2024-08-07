import Image from "next/image";
import thumbnail from "@/public/videos/adv-thumbnail.png";
import screenshot from "@/public/images/screenshot.png";
import "@/css/index.css";
import { Play } from "iconsax-react";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import Ad from "@/components/Ad";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div className="hero-section flex flex-col gap-4 items-center">
        <div className="hero-text flex flex-col">
          <h1 className="text-center">Enhancing Student Learning</h1>
          <p className="text-center w-full items-center">
            Our <span className="font-semibold">AI</span> powered digital tools
            make learning enjoyable,
            <br />
            while supporting teachers{`'`} instructional efforts.
          </p>
        </div>

        <div className="video-cotainer p-2 relative">
          <div className="w-full video h-full">
            <Ad />
          </div>
        </div>
      </div>

      <div className="tools-features flex flex-col px-8 gap-8 items-center mt-16">
        <h1>Tools & Features</h1>
        <div className="tf-container grid">
          <div className="content-card">
            <h2>AI Integration</h2>
            <ul>
              <li>
                <span className="font-semibold">Intelligent Tutoring:</span>
                Tips and additional resources to help students overcome
                challenges.
              </li>
              <li>
                <span className="font-semibold">Adaptive Learning:</span>{" "}
                Leverage AI to provide personalized learning experiences.
              </li>

              <li>
                <span className="font-semibold">Content Recommendations</span>{" "}
              </li>
            </ul>
          </div>
          <div className="content-card">
            <h2>Administrative Tools</h2>
            <ul>
              <li>
                <span className="font-semibold">
                  Scheduling and Timetabling:{" "}
                </span>
                Create and manage class schedules.
              </li>
              <li>
                <span className="font-semibold">Attendance Tracking:</span>{" "}
                Record and monitor student attendance in real time.
              </li>

              <li>
                <span className="font-semibold"> Grade Management:</span>{" "}
                Organized system for academic performance tracking
              </li>
            </ul>
          </div>
          <div className="content-card">
            <h2> Learning Tools</h2>
            <ul>
              <li>
                <span className="font-semibold">Interactive Lessons:</span>{" "}
                multimedia-rich lessons (videos, animations)
              </li>
              <li>
                <span className="font-semibold">Collaboration Spaces:</span>{" "}
                Encourage peer-to-peer learning and teacher-student interaction.
              </li>

              <li>
                <span className="font-semibold">Homework and Assignments:</span>{" "}
                Assign, submit, and review homework and projects online
              </li>
            </ul>
          </div>
          <div className="content-card">
            <h2>E-Learning Resources</h2>
            <ul>
              <li>
                <span className="font-semibold">Resource Library:</span>
                Vast library of digital textbooks covering various subjects.
              </li>
              <li>
                <span className="font-semibold">Educational Videos: </span>
                Enhance understanding through visual learning.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="snapshot flex justify-end relative">
        <Image
          src={screenshot}
          alt="Screenshot of smart brain studies studen dashboard"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col gap-2 items-start">
          <p className="primary-text">A snapshot of our system</p>
          <h1>Revolutionary, Comprehensive Future-Ready</h1>
          <CTA />
        </div>
      </div>

      <div className="choose-us grid px-8">
        <div className="header">
          <p className="primary-text">Why choose us?</p>
          <h1>
            Revolutionize 
            Teaching & 
            Enhancing Learning
          </h1>
        </div>

        <div className="reasons grid">
          <div className="reason content-card">
            <h2 className="">Comprehensive All-in-One Solution</h2>

            <p>
              Our platform combines administrative tools, learning resources,
              and assessment systems in a single, user-friendly interface. This
              integration eliminates the need for multiple systems, saving
              schools time and money while streamlining operations.
            </p>
          </div>

          <div className="reason content-card">
            <h2 className=""> Efficiency and Cost Savings</h2>

            <p>
              By automating administrative tasks such as scheduling, attendance
              tracking, and grade management, our platform reduces the workload
              for staff and teachers. This leads to significant cost savings and
              allows educators to focus more on teaching and student support.
            </p>
          </div>

          <div className="reason content-card">
            <h2 className="">Ongoing Innovation and Support</h2>

            <p>
              We are committed to continuous improvement and innovation. Our
              active development team regularly updates the platform with new
              features and enhancements. Additionally, we maintain close
              communication with users, ensuring our tools meet their evolving
              needs and provide exceptional customer support.
            </p>
          </div>
        </div>
      </div>

      <div className="faqs flex flex-col items-center p-16 gap-4">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container flex flex-col gap-4">
          <FAQs />
        </div>
      </div>
    </main>
  );
}
