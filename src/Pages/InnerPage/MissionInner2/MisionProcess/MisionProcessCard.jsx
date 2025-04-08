/* eslint-disable react/prop-types */

const MisionProcessCard = ({
  misionProcessIcon,
  misionProcessTitle,
  misionProcessDesc,
}) => {
  return (
    <div className='group text-center bg-white px-5 pt-10 pb-10 rounded-[10px]'>
      <div>
        <img
          src={misionProcessIcon}
          draggable={false}
          alt='Icon'
          className='mx-auto group-hover:animate-wobble_vertical'
        />
      </div>
      <h5 className="font-Rajdhani font-semibold text-[28px] text-HeadingColor-0 mt-7">{misionProcessTitle}</h5>
      <p className="font-Nunito text-TextColor2-0">{misionProcessDesc}</p>
    </div>
  );
};

export default MisionProcessCard;
