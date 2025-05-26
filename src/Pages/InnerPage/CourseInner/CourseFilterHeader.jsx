const CourseFilterHeader = () => {
  return (
    <div
      className={`p-4 xl:p-[30px] rounded-[20px] group relative z-10 overflow-hidden ${
        isList ? 'flex gap-4' : ''
      }`}
    >
      <div className='relative rounded-2xl overflow-hidden'>
        <div className='hover-bg'>
          <span
            className={`absolute left-[12.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-0 ${course.hoverSpan}`}
          ></span>
          <span
            className={`absolute left-[37.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[25%] ${course.hoverSpan}`}
          ></span>
          <span
            className={`absolute left-[62.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-1/2 ${course.hoverSpan}`}
          ></span>
          <span
            className={`absolute left-[87.5%] top-0 h-full w-0 transition-all duration-500 z-10 group-hover:opacity-0 group-hover:w-[25%] group-hover:left-[75%] ${course.hoverSpan}`}
          ></span>
        </div>
        <img
          src={course.img}
          alt='Course'
          draggable={false}
          className='w-full'
        />
        <div
          className={`course-price absolute z-20 bottom-5 left-5 size-[70px] flex items-center justify-center text-white text-xl rounded-full font-Outfit font-medium ${course.priceBg}`}
        >
          {course.price}
        </div>
      </div>

      <div className='sm:px-3 pt-6 text-left'>
        <span
          className={`course-category font-Outfit text-sm px-5 py-[5px] rounded-3xl font-medium mb-4 inline-block ${course.categoryColor} ${course.categoryBg}`}
        >
          {course.category}
        </span>
        <h3
          className={`course-title font-Outfit text-xl sm:text-2xl lg:text-[22px] xl:text-2xl font-medium text-HeadingColor-0 transition-all duration-500 2xl:mr-12 ${course.hoverTitle}`}
        >
          {course.title}
        </h3>

        <div className='flex items-center gap-1 text-ReviewText-0 text-sm mt-3 mb-5'>
          {[...Array(Math.floor(course.rating))].map((_, i) => (
            <BsStarFill
              key={i}
              className={course.iconColor}
            />
          ))}
          {course.rating % 1 !== 0 && (
            <BsStarHalf className={course.iconColor} />
          )}
          <span className='font-Outfit ml-1 text-HeadingColor-0 text-base'>
            ({course.rating}
            {course.ratingContent})
          </span>
        </div>

        <div className='flex items-center gap-3 mb-7'>
          <img
            src={course.instructorImg}
            alt='Instructor'
          />
          <div>
            <h5 className='font-Outfit text-lg font-medium text-HeadingColor-0'>
              {course.instructor}
            </h5>
            <p className='font-OpenSans text-[15px] text-TextColor-0'>
              Instructor
            </p>
          </div>
        </div>

        <div className='border-t pt-5 relative'>
          <div className='flex justify-between transition-all duration-500 group-hover:opacity-0'>
            <div
              className={`font-Outfit text-HeadingColor-0 flex items-center gap-1`}
            >
              <IoDocumentTextOutline
                size={18}
                className={course.iconColor}
              />
              {course.lessons} Lessons
            </div>
            <div
              className={`font-Outfit text-HeadingColor-0 flex items-center gap-2`}
            >
              <PiUsersThree
                size={18}
                className={course.iconColor}
              />
              {course.students} Students
            </div>
          </div>
          <Link to='/course'>
            <button
              className={`course-button absolute left-0 -bottom-20 font-Outfit inline-flex items-center gap-2 uppercase text-sm justify-between px-7 py-[12px] border z-10 overflow-hidden rounded-full text-white transition-all duration-500 group-hover:-bottom-4 ${course.buttonBg}`}
            >
              Enroll Now
              <span className='text-xl'>
                <GoArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseFilterHeader;
