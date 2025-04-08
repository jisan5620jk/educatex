/* eslint-disable react/prop-types */
const ServiceCard = ({ serviceIcon, serviceTitle, serviceDesc }) => {
  return (
    <div className='group bg-white px-9 pt-9 pb-10 rounded-xl relative z-10'>
      <div className='size-[66px] bg-gradient-to-r to-PrimaryColor2-0 from-PrimaryColor3-0 rounded-md flex items-center justify-center'>
        <img
          src={serviceIcon}
          draggable='false'
          className='group-hover:animate-wobble_vertical'
        />
      </div>
      <h5 className='font-Outfit font-semibold text-2xl xl:text-[26px] text-HeadingColor-0 mt-8'>
        {serviceTitle}
      </h5>
      <p className='font-OpenSans text-TextColor2-0 pt-3'>{serviceDesc}</p>
    </div>
  );
};

export default ServiceCard;
