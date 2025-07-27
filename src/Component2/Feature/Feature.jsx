import featureIcon from "/images/feature-icon21.png";
import featureIcon2 from "/images/feature-icon22.png";
import featureIcon3 from "/images/feature-icon23.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: "Learning Experiences",
    featureDesc: "The ultimate destination knowledge We are committed to learn",
    featureUrl: "/service",
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: "Professional Instructor",
    featureDesc: "The ultimate destination knowledge We are committed to learn",
    featureUrl: "/service",
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: "Moneyback Gaurantee",
    featureDesc: "The ultimate destination knowledge We are committed to learn",
    featureUrl: "/service",
  },
];

const Feature = () => {
  return (
    <section className="bg-BodyBg-0 py-16 md:py-20 lg:py-24 relative">
      <div className="Container ">
        <div className="box-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 relative z-10">
          {processData.map(
            ({ id, featureIcon, featureTitle, featureDesc, featureUrl }) => {
              return (
                <div key={id} className="box">
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
