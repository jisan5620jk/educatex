import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <section className="bg-[url('/images/subscribe-bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed pt-20 sm:pt-28 md:pt-40 pb-20 sm:pb-28 md:pb-[176px] relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#04142449] before:via-[#041424b7] before:to-[#041424f6] before:to-90% before:-z-10">
      <div className='Container text-center'>
        <h1 className='font-Rajdhani font-bold text-[40px] leading-[42px] sm:text-[48px] sm:leading-[50px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[62px] xl:text-[70px] xl:leading-[72px] text-white mt-[14px] mb-[14px]'>
          Need Security? We’re here
        </h1>
        <p className='font-Nunito text-[22px] text-white'>
          Feel free to contact with us. We’re ready for help
        </p>
        <Link
          to={'/contact2'}
          className='inline-block mt-8'
        >
          <button className='primary-btn'>
            {`Get In Touch`}
            <span className='icon-style'>
              <svg
                className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                xmlns='http://www.w3.org/2000/svg'
                stroke='CurrentColor'
                width='14.2'
                height='14.2'
                viewBox='0 0 14.2 14.2'
              >
                <g>
                  <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                  <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                </g>
                <g>
                  <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                  <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                </g>
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Subscribe;
