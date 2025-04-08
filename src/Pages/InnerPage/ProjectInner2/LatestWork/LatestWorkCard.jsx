/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const LatestWorkCard = ({
  latestWorkCardImg,
  latestWorkSubTitle,
  latestWorkCardURL,
  latestWorkTitle,
  latestWorkBtnText,
}) => {
  return (
    <div className='group sm:pl-[30px] sm:pt-[30px]'>
      <div className='bg-BodyBg-0 rounded-lg relative z-10 before:absolute before:top-0 before:right-0 before:bg-gradient-to-br before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-0 before:h-full before:transition-all before:duration-300 before:-z-10 before:rounded-lg hover:before:w-full hover:before:left-0'>
        <div className='sm:-ml-[30px] relative sm:-top-[30px]'>
          <img
            src={latestWorkCardImg}
            draggable={false}
            alt='Image'
            className='w-full sm:pr-[30px]'
          />
        </div>
        <div className='px-4 sm:px-[38px] md:px-8 xl:px-[38px] 2xl:px-8 3xl:px-[38px] pb-7 pt-5 sm:pt-2'>
          <h6 className='text-PrimaryColor-0 bg-HeadingColor-0 bg-opacity-5 font-Rajdhani font-medium uppercase text-sm rounded-full px-[26px] py-[7px] inline-block transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-10 group-hover:text-white'>
            {latestWorkSubTitle}
          </h6>
          <div className='inline-block mt-4'>
            <Link
              to={latestWorkCardURL}
              className='text-HeadingColor-0 text-xl sm:text-2xl md:text-[19px] md:leading-[26px] lg:leading-[inherit] lg:text-2xl xl:text-xl 2xl:text-lg 3xl:text-2xl font-Rajdhani font-semibold transition-all duration-500 group-hover:text-white'
            >
              {latestWorkTitle}
            </Link>
          </div>
          <div className='inline-block mt-5'>
            <Link
              to={latestWorkCardURL}
              className='latest-work-btn flex items-center gap-2 text-PrimaryColor-0 font-Rajdhani font-semibold text-lg uppercase transition-all duration-500 group-hover:text-white'
            >
              {latestWorkBtnText}
              <span className='icon-style'>
                <svg
                  className='qodef-svg--custom-arrow qodef-m-arrow inline-block text-PrimaryColor-0 h-[10px] w-auto transition-all duration-500 group-hover:text-white'
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorkCard;
