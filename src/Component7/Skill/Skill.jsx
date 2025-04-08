import ProgressBar from 'react-animated-progress-bar';
import titleShape from '/images/sub-title-shape.png';
import whyChooseThumb from '/images/skills.webp';
import './skill.css';

const Skill = () => {
  return (
    <section className='bg-[url("images/faq-bg.webp")] bg-cover bg-top bg-no-repeat pt-32 md:pt-48 lg:pt-32 xl:pt-[172px] pb-16 md:pb-20 lg:pb-[110px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 items-center relative'>
          <div className='relative inline-block 2xl:-left-16'>
            <img
              src={whyChooseThumb}
              draggable={false}
              alt='Why Choose Image'
            />
          </div>
          <div>
            <h5 className='flex items-center gap-2 font-Outfit text-lg sm:text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              SOFT SKILLS
            </h5>
            <h1 className='font-Outfit font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Next Generation Depends on
              <br />
              Digital Software’s
            </h1>
            <p className='font-OpenSans text-TextColor2-0'>
              Competently leverage existing top-line bandwidth vis-a-vis
              client-centric supply
              <br className='hidden md:block lg:hidden 2xl:block' /> chains.
              Enthusiastically maximize cost effective technologies
            </p>
            <div className='space-y-7 mt-6'>
              <div>
                <h5 className='font-Outfit font-semibold text-xl text-HeadingColor-0 relative z-20 mb-[9px]'>
                  Database Design
                </h5>
                <div className='relative z-10 skill-progress'>
                  <ProgressBar
                    rect
                    width='100%'
                    height='10px'
                    fontColor='#041424'
                    fontSize='20px'
                    leading='10px'
                    margin='0px'
                    rectBorderRadius='10px'
                    fontWeight='600'
                    percentage='80'
                    defColor={{
                      excellent: '#eff3ff',
                      good: '#eff3ff',
                      fair: 'green',
                      poor: 'red',
                    }}
                    trackPathColor='#d2e2e4'
                    trackBorderColor='transparent'
                    trackPathBorderRadius='6px'
                  />
                </div>
              </div>
              <div>
                <h5 className='font-Outfit font-semibold text-xl text-HeadingColor-0 relative z-20 mb-[9px]'>
                  App Development
                </h5>
                <div className='relative z-10 skill-progress'>
                  <ProgressBar
                    rect
                    width='100%'
                    height='10px'
                    fontColor='#041424'
                    fontSize='20px'
                    leading='10px'
                    margin='0px'
                    rectBorderRadius='10px'
                    fontWeight='600'
                    percentage='90'
                    defColor={{
                      excellent: '#eff3ff',
                      good: '#eff3ff',
                      fair: 'green',
                      poor: 'red',
                    }}
                    trackPathColor='#d2e2e4'
                    trackBorderColor='transparent'
                    trackPathBorderRadius='6px'
                  />
                </div>
              </div>
              <div>
                <h5 className='font-Outfit font-semibold text-xl text-HeadingColor-0 relative z-20 mb-[9px]'>
                  UI/UX Design
                </h5>
                <div className='relative z-10 skill-progress'>
                  <ProgressBar
                    rect
                    width='100%'
                    height='10px'
                    fontColor='#041424'
                    fontSize='20px'
                    leading='10px'
                    margin='0px'
                    rectBorderRadius='10px'
                    fontWeight='600'
                    percentage='70'
                    defColor={{
                      excellent: '#eff3ff',
                      good: '#eff3ff',
                      fair: 'green',
                      poor: 'red',
                    }}
                    trackPathColor='#d2e2e4'
                    trackBorderColor='transparent'
                    trackPathBorderRadius='6px'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
