/* eslint-disable react/prop-types */

const HistoryCard = ({ historyTime, historyTitle, historyDesc }) => {
  return (
    <div className='grid items-center grid-cols-1 md:grid-cols-3 gap-7'>
      <div className='col-span-1 flex w-full gap-5'>
        <h5 className='font-Rajdhani font-semibold text-[28px] text-white'>
          {historyTime}
        </h5>
        <div className="relative w-full flex-1 inline-block mt-1">
          <span className='w-full h-[1px] inline-block border border-dashed border-white border-opacity-20'></span>
          <span className='absolute z-10 top-[13px] right-0 size-2 rounded-full inline-block bg-white bg-opacity-30'></span>
        </div>
      </div>
      <div className='col-span-2 lg:max-w-[640px] xl:max-w-[740px] 2xl:max-w-[850px] w-full group bg-white bg-opacity-10 rounded-[10px] px-4 sm:px-8 lg:px-4 xl:px-6 2xl:px-10 lg:pt-4 xl:pt-7 2xl:pt-11 pt-5 sm:pt-10 lg:pb-4 xl:pb-8 2xl:pb-11 pb-5 sm:pb-8'>
        <h4 className='font-Rajdhani font-semibold text-2xl md:text-[22px] lg:text-2xl xl:text-2xl 2xl:text-[28px] text-white transition-all duration-500  mb-6 w-full'>
          {historyTitle}
        </h4>
        <p className='font-Nunito text-TextColor-0 transition-all duration-500 max-w-[680px] w-full'>
          {historyDesc}
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
