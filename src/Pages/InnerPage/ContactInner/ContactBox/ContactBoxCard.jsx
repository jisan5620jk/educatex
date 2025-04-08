/* eslint-disable react/prop-types */
const ContactBoxCard = ({
  contactBoxIcon,
  contactBoxTitle,
  contactBoxSubTitle,
}) => {
  return (
    <div className="group px-5 sm:px-[30px] md:px-5 xl:px-[30px] py-6 rounded-md flex items-center gap-2 sm:gap-5 lg:gap-2 2xl:gap-5 border border-PrimaryColor-0 bg-white relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="size-[64px] rounded-full border-2 border-PrimaryColor-0 flex justify-center items-center text-PrimaryColor-0 text-3xl transition-all duration-500 group-hover:text-white group-hover:border-white">
        {contactBoxIcon}
      </div>
      <div className="flex-1">
        <h5 className="font-Rajdhani font-semibold text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mb-2">
          {contactBoxSubTitle}
        </h5>
        <p className="font-Rajdhani text-PrimaryColor-0 font-semibold text-xl sm:text-2xl md:text-xl xl:text-2xl transition-all duration-500 group-hover:text-white">
          {contactBoxTitle}
        </p>
      </div>
    </div>
  );
};

export default ContactBoxCard;
