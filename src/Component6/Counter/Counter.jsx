import CounterCard from './CounterCard';

const counterData = [
  {
    boxColor:
      'bg-PrimaryColor3-0 bg-opacity-10 border-PrimaryColor3-0 border-opacity-30',
    counterNumber: 15000,
    counterSuffix: '+',
    counterDesc: 'Students Enrolled',
  },
  {
    boxColor:
      'bg-PrimaryColor-0 bg-opacity-10 border-PrimaryColor-0 border-opacity-30',
    counterNumber: 180,
    counterSuffix: '+',
    counterDesc: 'Solution Experts',
  },
  {
    boxColor:
      'bg-PrimaryColor2-0 bg-opacity-10 border-PrimaryColor2-0 border-opacity-30',
    counterNumber: 899,
    counterSuffix: '+',
    counterDesc: 'Top Instructors',
  },
  {
    boxColor:
      'bg-PrimaryColor4-0 bg-opacity-10 border-PrimaryColor4-0 border-opacity-30',
    counterNumber: 689,
    counterSuffix: '+',
    counterDesc: 'Students Awards',
  },
];

const Counter = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28 bg-BodyBg-0'>
      <div className='Container'>
        <div className='flex items-center justify-between flex-wrap gap-7'>
          {counterData.map((counter, index) => (
            <CounterCard
              key={index}
              {...counter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
