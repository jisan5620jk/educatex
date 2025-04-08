import { Link } from 'react-router-dom';
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';

const ContactBox = () => {
  return (
    <section>
      <div className='Container lg:px-0 mt-16 md:mt-20 lg:mt-[120px]'>
        <div className='bg-gradient-to-t to-PrimaryColor2-0 from-PrimaryColor3-0 rounded-xl text-center pt-[60px] pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='group border-r-2 border-white border-opacity-50'>
            <div className='w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-PrimaryColor-0 relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:border-dashed after:animate-rotational'>
              <FaLocationDot size={'30'} />
            </div>
            <h5 className='font-Outfit font-semibold text-2xl text-white mt-7 mb-3'>
              Office Address
            </h5>
            <p className='font-OpenSans text-white'>
              200 Navana ST, West end Right <br /> Sandigo, USA
            </p>
          </div>
          <div className='group border-r-2 border-white border-opacity-50'>
            <div className='w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-PrimaryColor-0 relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:border-dashed after:animate-rotational'>
              <FaPhoneVolume size={'30'} />
            </div>
            <h5 className='font-Outfit font-semibold text-2xl text-white mt-7 mb-3'>
              Make A Call
            </h5>
            <ul>
              <li>
                <Link to={'/'}>
                  <button className='font-OpenSans text-white transition-all duration-500 hover:text-SecondaryColor-0 mb-2'>
                    (+880) 123 4567 890
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='font-OpenSans text-white transition-all duration-500 hover:text-SecondaryColor-0'>
                    (+880) 312 4567 670
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='group'>
            <div className='w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-PrimaryColor-0 relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:border-dashed after:animate-rotational'>
              <FaEnvelope size={'30'} />
            </div>
            <h5 className='font-Outfit font-semibold text-2xl text-white mt-7 mb-3'>
              24/7 Online Support
            </h5>
            <ul>
              <li>
                <Link to={'/'}>
                  <button className='font-OpenSans text-white transition-all duration-500 hover:text-SecondaryColor-0 mb-2'>
                    example@gmail.com
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <button className='font-OpenSans text-white transition-all duration-500 hover:text-SecondaryColor-0'>
                    info@gmail.com
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
