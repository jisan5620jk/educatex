import { MdEmail } from 'react-icons/md';

const NewsletterForm = () => {

  return (
    <section className='bg-[#f3fdfa] py-10 px-4'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left'>
          Subscribe Our Newsletter For <br className='hidden md:block' />
          Regular Updates
        </h2>

        <form
          action='#'
          className='flex w-full max-w-xl items-center bg-[#e4f4f1] rounded-full overflow-hidden'
        >
          <div className='flex items-center px-4 text-gray-500'>
            <MdEmail size={20} />
          </div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email'
            className='flex-1 bg-transparent px-2 py-3 text-sm focus:outline-none'
            required
          />
          <button
            type='submit'
            className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all'
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
