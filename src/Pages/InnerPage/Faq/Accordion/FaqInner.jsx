import FaqAccordion from './FaqAccordion';
import faqIcon from '/images/AI-2-2-1.png';
import faqIcon2 from '/images/AI-2-1-1.png';
import BreadCrumb from '../../../../Shared/BreadCrumb/BreadCrumb';
import { FaArrowRightLong } from 'react-icons/fa6';
import Brand from '../Brand';
import HelmetChanger from '../../../../Shared/Helmet/Helmet';

const FaqInner = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      faqIcon2: faqIcon2,
      title: 'Project Horizon Redevelopment?',
      text: 'Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high',
      active: true,
    },
    {
      faqIcon2: faqIcon2,
      title: 'What is your professional passion?',
      text: 'Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high',
      active: false,
    },
    {
      faqIcon2: faqIcon2,
      title: 'Service Horizon Business low?',
      text: 'Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high',
      active: false,
    },
    {
      faqIcon2: faqIcon2,
      title: 'Business Solution Redevelopment?',
      text: 'Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high',
      active: false,
    },
    {
      faqIcon2: faqIcon2,
      title: 'Do you have any custom services?',
      text: 'Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high',
      active: false,
    },
  ];

  return (
    <>
      <HelmetChanger title={'Faq Inner Page Style One'} />
      <BreadCrumb
        breadCrumbTitle={'FAQ'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'FAQ'}
      />
      <section className='relative overflow-hidden py-28 bg-BodyBg-0'>
        <div className='Container'>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 items-center'>
            <div className='relative'>
              <h5 className='font-Outfit text-lg font-semibold text-PrimaryColor-0'>
                IT Support For Business
              </h5>
              <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4'>
                Ensuring Your Success Trusted <br />
                IT Services Source
              </h1>
              <p className='font-OpenSans text-TextColor2-0 pt-1 pb-10'>
                Business tailored it design, management & support services needs
                to be business agency elit, sed do eiusmod tempor proved.
              </p>
              <div className='flex gap-5'>
                <div>
                  <img
                    src={faqIcon}
                    draggable='false'
                  />
                </div>
                <p className='font-OpenSans text-TextColor2-0 flex-1'>
                  Business tailored it design, management & support services
                  busines agency elit sed do eiusmod tempor proved business task
                  state of the art infrastructures for you.
                </p>
              </div>
            </div>
            <div className='w-full mx-auto'>
              <div>
                {faqs.map((faq, index) => (
                  <FaqAccordion
                    key={index}
                    faqIcon={faq.faqIcon2}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </FaqAccordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brand />
    </>
  );
};

export default FaqInner;
