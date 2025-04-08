import FaqThumb from '/images/pricing-faq-image.png';
import titleShape from '/images/sub-title-shape.png';
import { useEffect, useRef, useState } from 'react';
import { FaMinus } from 'react-icons/fa6';

const FaqData = [
  {
    id: 1,
    itemTitle: "What should I do if my computer won't turn on?",
    faqItemDesc:
      "First, check if your computer is properly plugged into a power source. Ensure the power outlet is functioning. If you're using a laptop, verify the battery is charged or try connecting it directly to a power source. If the issue persists, it might be a hardware problem requiring professional assistance.",
  },
  {
    id: 2,
    itemTitle: 'How do I secure my Wi-Fi network?',
    faqItemDesc:
      "To secure your Wi-Fi, update your router's default username and password with strong, unique ones. Enable WPA3 encryption (or WPA2 if WPA3 isn’t available). Regularly update your router’s firmware and avoid sharing your Wi-Fi password publicly.",
  },
  {
    id: 3,
    itemTitle: 'What steps can I take to protect my data from hackers?',
    faqItemDesc:
      'Use strong, unique passwords for each account and enable two-factor authentication (2FA) where possible. Avoid clicking on suspicious links or downloading unknown files. Keep your software and antivirus programs up to date, and back up your important data regularly.',
  },
  {
    id: 4,
    itemTitle: 'Why is my internet connection so slow?',
    faqItemDesc:
      'There could be multiple reasons for a slow connection, such as network congestion, outdated hardware, or your ISP throttling your bandwidth. Restart your modem/router, check for firmware updates, and make sure no unnecessary devices are consuming bandwidth. If the problem persists, contact your ISP.',
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item as default active
  const contentRefs = useRef([]);

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (index !== activeIndex && ref) {
        ref.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[url('/images/faq-inner-bg.jpg')] bg-no-repeat bg-center bg-cover py-16 md:py-20 lg:py-28 relative z-10">
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10'>
          <div>
            <div>
              <h5 className='flex items-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
                <img
                  src={titleShape}
                  draggable={false}
                  alt='Shape'
                />{' '}
                WHAT WE PROVIDE
              </h5>
              <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4 sm:mb-8'>
                Frequently Asked Questions <br /> and Answers
              </h1>
            </div>
            <ul className=''>
              {FaqData.map((FaqItem, index) => (
                <li
                  key={index}
                  className={`border-HeadingColor-0 border-opacity-10 ${
                    index === 0 ? 'border-t-none' : 'border-t'
                  }`}
                >
                  <div className=''>
                    <div
                      className={`cursor-pointer flex items-center justify-between py-5 ${
                        activeIndex === index ? 'active' : ''
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h5 className='font-Rajdhani font-semibold text-lg sm:text-2xl lg:text-xl xl:text-2xl text-HeadingColor-0'>
                        {FaqItem.itemTitle}
                      </h5>
                      <div className='relative flex items-center'>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index
                              ? 'translate-x-[10px] text-PrimaryColor-0 translate-y-[2px]'
                              : 'rotate-90 translate-x-[11px] text-HeadingColor-0'
                          }`}
                        >
                          <FaMinus />
                        </span>
                        <span
                          className={`transition-transform duration-300 ${
                            activeIndex === index
                              ? '-translate-x-[4px] text-PrimaryColor-0 translate-y-[2px]'
                              : '-translate-x-[5px] -translate-y-0 text-HeadingColor-0'
                          }`}
                        >
                          <FaMinus />
                        </span>
                      </div>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className='max-h-0 overflow-hidden transition-all duration-500 gap-8'
                    >
                      <div className='border-t border-HeadingColor-0 border-opacity-10 py-7'>
                        <p className='font-Nunito text-TextColor2-0 max-w-[586px] w-full'>
                          {FaqItem.faqItemDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-end'>
            <div>
              <img
                src={FaqThumb}
                draggable={false}
                alt='Faq Image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
