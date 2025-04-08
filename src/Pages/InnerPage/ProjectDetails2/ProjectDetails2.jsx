import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import projectDetailsThumb from '/images/project-details-image.jpg';
import projectDetailsThumb1 from '/images/project-details-thumb1.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import HelmetChanger from '../../../Shared/Helmet/Helmet';
import galleryThumb from '/images/project-details-thumb2.jpg';
import galleryThumb2 from '/images/project-details-thumb3.jpg';
import CallDoAction from '../ContactInner2/CallDoAction';

const ProjectDetails2 = () => {
  return (
    <>
      <HelmetChanger title={'Project Details Inner Page Style Two'} />
      <BreadCrumb2
        breadCrumbTitle={'Project Details'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Project Details'}
      />
      <section className='py-16 md:py-20 lg:py-28'>
        <div className='Container'>
          <img
            src={projectDetailsThumb}
            draggable='false'
            className='w-full'
          />
          <h2 className='font-Outfit font-bold text-3xl sm:text-[44px] text-HeadingColor-0 mt-7 sm:mt-10'>
            Overview
          </h2>
          <p className='font-OpenSans text-TextColor2-0 mt-3 sm:mt-5'>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results premier methods empowerment. Dramatically
            architect go forward opportunities before user-centric partner
            Credibly implement exceptional. Continually fashion orthogonal
            leadership skills whereas wireless metrics. Uniquely syndicate
            exceptio opportunities with interdependent users. Globally enhance
            fully tested meta-services rather than pan solutions. Proactively
            integrate client-integrate go forward architectures and turnkey
            meta-services. Interactively harness integrated ROI whereas
            frictionless products.
          </p>
          <div className='grid gap-7 grid-cols-1 lg:grid-cols-2 items-center mt-6 sm:mt-12'>
            <div>
              <img
                src={projectDetailsThumb1}
                draggable='false'
              />
            </div>
            <div>
              <h2 className='font-Outfit font-bold text-3xl sm:text-[44px] text-HeadingColor-0'>
                Solution
              </h2>
              <p className='font-OpenSans text-TextColor2-0 mt-3 sm:mt-5'>
                Rapidiously create cross-platform manufactured products after
                cost effective innovatio native e-business and optimal
                solutions. Seamlessly customize interactive systems afte
                propriately drive enterprise mindshare before intuitive results.
                Continually enhance tea bleeding-edge content.Holisticly
                reconceptualize B2C imperatives without turnkey e-m arkets.
                Phosfluorescently monetize long-term .
              </p>
              <p className='font-OpenSans text-TextColor2-0 mt-6'>
                Rapidiously create cross-platform manufactured products after
                cost effective innovatio native e-business and optimal
                solutions. Seamlessly customize interactive systems afte
                propriately drive enterprise mindshare before intuitive results.
                Confussion There High Can Here Confused There Home Like People.
              </p>
            </div>
          </div>
          <h2 className='font-Outfit font-bold text-3xl sm:text-[44px] text-HeadingColor-0 mt-7 sm:mt-14'>
            Gallery
          </h2>
          <p className='font-OpenSans text-TextColor2-0 mt-3 sm:mt-5'>
            Rapidiously create cross-platform manufactured products after cost
            effective innovatio native e-business and optimal solutions.
            Seamlessly customize interactive systems afte prop riately drive
            enterprise mindshare before intuitive results. Continually enhance
            teaAssertively redefine bleeding-edge benefits after
            bricks-and-clicks communities. Intrinsicly aggreg ate competitive
            leadership skills via resource sucking outsourcing.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 items-center mt-11'>
            <div>
              <img
                src={galleryThumb}
                draggable={false}
                alt='Gallary Image'
              />
            </div>
            <div>
              <img
                src={galleryThumb2}
                draggable={false}
                alt='Gallary Image'
              />
            </div>
          </div>
        </div>
      </section>
      <CallDoAction />
    </>
  );
};

export default ProjectDetails2;
