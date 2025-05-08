/* Search */

const [isSearchActive, setIsSearchActive] = useState(false);

const handleMenuSearchClick = () => setIsSearchActive(true);
const handleCloseSearchClick = () => setIsSearchActive(false);

const searchContentRef = useRef(null);
const bodyOverlay3Ref = useRef(null);
const searchInputRef = useRef(null); // Reference for the search input
const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission
  setIsSubmitting(true); // Set submitting state

  // Simulate a submission with a timeout (replace with your actual submission logic)
  setTimeout(() => {
    setIsSubmitting(false); // Reset submitting state
    // Optionally clear the input field or close the overlay
    if (searchInputRef.current) {
      searchInputRef.current.value = ''; // Clear the input
    }
    bodyOverlay3Ref.current.classList.remove('apply'); // Close overlay on submit (optional)
    searchContentRef.current.classList.remove('opened'); // Close search content (optional)
  }, 2000); // Simulate a delay of 2 seconds
};

{
  /* Search */
}
<div
  className={`fixed top-0 left-0 h-screen w-full z-[99999] backdrop-blur-sm bg-black/20 transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] ${
    isSearchActive ? 'translate-y-0 mt-0' : '-translate-y-full -mt-[540px]'
  }`}
>
  <button
    onClick={handleCloseSearchClick}
    className='absolute top-10 right-10 w-10 h-10 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-[20px]'
  >
    <LiaTimesSolid />
  </button>

  <button
    onClick={handleCloseSearchClick}
    className={`absolute left-0 right-0 mx-auto rounded-full bg-gradient-to-r from-PrimaryColor-0 to-PrimaryColor3-0 w-[70px] h-[70px] cursor-pointer border-4 border-t-white border-l-[#a64cf9] border-b-white border-r-[#a64cf9] shadow-md flex items-center justify-center transition-all duration-500 ease-in-out ${
      isSearchActive
        ? 'visible opacity-100 top-[25%] delay-[1500ms]'
        : 'invisible opacity-0 top-[75%] -mt-[200px]'
    }`}
  >
    <FaArrowUp className='text-white text-[30px]' />
  </button>

  <form
    onSubmit={handleSubmit}
    className={`absolute max-w-[700px] top-1/2 left-[15px] right-[15px] mx-auto -mt-[35px] bg-transparent transition-all duration-300 ease-in-out ${
      isSearchActive ? 'scale-x-100 delay-[1200ms]' : 'scale-x-0'
    }`}
  >
    <div className='relative m-0 overflow-hidden rounded-md'>
      <input
        type='search'
        name='search-field'
        placeholder='Search Here'
        required
        ref={searchInputRef}
        className="block w-full h-[70px] text-[18px] leading-[50px] px-[30px] py-[10px] text-black bg-white border-2 border-[#1ec28f] rounded-md font-['Outfit'] appearance-none transition-all duration-500 ease-in-out focus:outline-none"
      />
      <button
        type='submit'
        disabled={isSubmitting}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1ec28f] h-full px-[25px] text-white text-[24px] cursor-pointer border-none transition-all duration-500 ease-in-out'
      >
        {isSubmitting ? <span>Loading...</span> : <IoSearch />}
      </button>
    </div>
  </form>
</div>;
