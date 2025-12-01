"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Wind, TrendingUp, Zap, Flame, Gauge, Activity, Layers, Target, CheckCircle, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="F1 Motors"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Cars", id: "products" },
            { name: "Features", id: "features" },
            { name: "Performance", id: "metrics" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Explore",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="F1 MOTORS"
          description="Experience the pinnacle of motorsport engineering. Discover our elite collection of Formula 1 racing vehicles."
          buttons={[
            {
              text: "View Cars",
              href: "products"
            },
            {
              text: "Learn More",
              href: "features"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609296718-rplpuj6k.jpg",
              imageAlt: "F1 racing car in action"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609297725-skf9eidh.jpg",
              imageAlt: "Formula 1 car on track"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609298849-vt20y1lf.jpg",
              imageAlt: "Motorsport racing vehicle"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          products={[
            {
              id: "1",
              name: "F1 Pro Racer",
              price: "$2,850,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609300072-wyly1xin.jpg",
              imageAlt: "F1 Pro Racer luxury red sports car"
            },
            {
              id: "2",
              name: "Elite Speed Master",
              price: "$3,200,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609301319-qs927sin.jpg",
              imageAlt: "Elite Speed Master silver racing vehicle"
            },
            {
              id: "3",
              name: "Turbo Champion",
              price: "$2,950,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609302488-vylleoen.png",
              imageAlt: "Turbo Champion high performance car"
            },
            {
              id: "4",
              name: "Apex Velocity",
              price: "$3,450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609303666-amkuuew3.jpg",
              imageAlt: "Apex Velocity competitive race car"
            }
          ]}
          title="Featured Models"
          description="Browse our exclusive lineup of premium F1 racing vehicles"
          tag="New Arrivals"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Advanced Performance Features"
          description="State-of-the-art technology engineered for maximum speed and precision"
          tag="Technology"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Aerodynamic Design",
              description: "Cutting-edge aerodynamics reduce drag and maximize downforce for superior track performance.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609304857-2aq1v3be.jpg"
              },
              items: [
                { icon: Wind, text: "0.25 drag coefficient" },
                { icon: TrendingUp, text: "Enhanced stability" },
                { icon: Zap, text: "Optimized air flow" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "High-Performance Engine",
              description: "Turbocharged powerplant delivering exceptional acceleration and sustained performance.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609306107-nyko1d21.jpg"
              },
              items: [
                { icon: Flame, text: "1000+ horsepower" },
                { icon: Gauge, text: "Precision tuning" },
                { icon: Activity, text: "Real-time diagnostics" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Advanced Suspension",
              description: "Intelligent suspension system that adapts to track conditions for optimal grip and control.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609307127-ck9duyh6.jpg"
              },
              items: [
                { icon: Layers, text: "Multi-stage damping" },
                { icon: Target, text: "Adaptive geometry" },
                { icon: CheckCircle, text: "Precision handling" }
              ],
              reverse: false
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Performance Metrics"
          description="Record-breaking specifications that define championship racing"
          tag="Stats"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              value: "250",
              title: "mph",
              description: "Top speed achieved",
              icon: Zap
            },
            {
              id: "2",
              value: "2.8",
              title: "sec",
              description: "0-60 acceleration",
              icon: TrendingUp
            },
            {
              id: "3",
              value: "1.5",
              title: "G",
              description: "Maximum lateral force",
              icon: Activity
            },
            {
              id: "4",
              value: "89",
              title: "%",
              description: "Efficiency rating",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Driver Experiences"
          description="Hear from elite drivers and motorsport enthusiasts"
          tag="Reviews"
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Lewis Hamilton",
              role: "Professional Driver",
              testimonial: "The precision engineering and responsive handling make these vehicles exceptional. A true champion's choice.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609309491-ogtngw7g.jpg",
              imageAlt: "Lewis Hamilton portrait"
            },
            {
              id: "2",
              name: "Sophia Martinez",
              role: "Racing Enthusiast",
              testimonial: "Incredible performance at every curve. This is what peak automotive engineering looks like.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609310588-25o7x88k.jpg",
              imageAlt: "Sophia Martinez portrait"
            },
            {
              id: "3",
              name: "Marcus Chen",
              role: "Track Specialist",
              testimonial: "The aerodynamics are flawless. My lap times improved significantly with the advanced suspension system.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609311380-sl121l8u.jpg",
              imageAlt: "Marcus Chen portrait"
            },
            {
              id: "4",
              name: "Isabella Rodriguez",
              role: "Motorsport Journalist",
              testimonial: "These vehicles represent the future of high-performance racing. Absolutely outstanding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609312358-6qxloqah.jpg",
              imageAlt: "Isabella Rodriguez portrait"
            },
            {
              id: "5",
              name: "James Cooper",
              role: "Racing Team Owner",
              testimonial: "We've seen record-breaking performance with these machines. The investment is completely justified.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609313349-q89pjf50.jpg",
              imageAlt: "James Cooper portrait"
            },
            {
              id: "6",
              name: "Elena Volkov",
              role: "Performance Engineer",
              testimonial: "The technical excellence and attention to detail in every component is remarkable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609314193-2g7cmtct.jpg",
              imageAlt: "Elena Volkov portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our F1 racing vehicles"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is the warranty on these vehicles?",
              content: "All F1 Motors vehicles come with a comprehensive 5-year warranty covering all major components, including engine, transmission, and suspension systems. We also provide extended coverage options."
            },
            {
              id: "2",
              title: "How often should maintenance be performed?",
              content: "Professional maintenance is recommended every 3,000 miles or quarterly, whichever comes first. Our certified technicians perform comprehensive inspections and system checks to ensure peak performance."
            },
            {
              id: "3",
              title: "Can these vehicles be customized?",
              content: "Yes, we offer extensive customization options including performance upgrades, interior modifications, and aesthetic enhancements. Our team works with you to create your dream racing machine."
            },
            {
              id: "4",
              title: "What fuel type do these vehicles use?",
              content: "Our F1 vehicles run on premium racing fuel (100+ octane). We recommend using Shell V-Power or equivalent premium fuel for optimal performance and engine longevity."
            },
            {
              id: "5",
              title: "Is insurance available for these vehicles?",
              content: "We partner with elite insurance providers who specialize in high-performance racing vehicles. We can connect you with specialists who understand your unique coverage needs."
            },
            {
              id: "6",
              title: "What is the resale value retention?",
              content: "F1 Motors vehicles maintain excellent resale value, typically retaining 70-80% of their value over 5 years depending on mileage and condition. Our vehicles are highly sought after in the collector market."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Ready to experience the thrill of F1 racing? Contact our specialists today to schedule a consultation or test drive."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "model",
              type: "text",
              placeholder: "Interested Model",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your racing goals...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764609308224-ap811gtd.jpg"
          imageAlt="F1 racing vehicle cockpit"
          mediaPosition="right"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="F1 Motors"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Models", href: "products" },
                { label: "Features", href: "features" }
              ]
            },
            {
              items: [
                { label: "Performance", href: "metrics" },
                { label: "Reviews", href: "testimonials" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}