/* eslint-disable react/prop-types */
import OnScrollCounter from '../../Shared/Counter/OnScrollCounter';

const CounterCard = ({
  boxColor,
  counterNumber,
  counterSuffix,
  counterDesc,
}) => {
  return (
    <div className={`${boxColor} pt-3 pb-[30px] border rounded-xl w-full text-center`}>
      <div className='font-Outfit font-bold justify-center text-[52px] text-HeadingColor-0 flex gap-1 items-center'>
        <OnScrollCounter
          start={0}
          end={counterNumber}
          duration={3000}
        />
        <span>{counterSuffix}</span>
      </div>
      <h5 className='font-OpenSans text-TextColor2-0 font-medium pt-1'>{counterDesc}</h5>
    </div>
  );
};

export default CounterCard;
