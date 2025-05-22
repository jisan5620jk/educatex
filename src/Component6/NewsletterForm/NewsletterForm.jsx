import { MdEmail } from 'react-icons/md';

const NewsletterForm = () => {

  return (
    <section className='bg-BodyBg-0 py-16 md:py-20 lg:py-28'>
      <div className='Container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left'>
            Subscribe Our Newsletter For <br className='hidden md:block' />
            Regular Updates
          </h2>

          <form
            action='#'
            className='flex gap-7 items-center rounded-full overflow-hidden'
          >
            <div className='relative'>
              <div className='absolute left-5 top-1/2 -translate-y-1/2 flex items-center text-gray-500'>
                <MdEmail size={20} />
              </div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email'
                className='w-[412px] h-[60px] flex-1 bg-PrimaryColor-0 bg-opacity-10 px-12 py-3 rounded-full text-sm focus:outline-none'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-PrimaryColor-0 hover:bg-emerald-600 text-white font-semibold text-sm px-7 py-5 rounded-full transition-all'
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
