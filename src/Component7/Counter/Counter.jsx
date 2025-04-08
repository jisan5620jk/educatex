import CounterCard from "./CounterCard";

const counterData = [
  {
    id: 1,
    counterNumber: 10,
    counterDesc: "HAPPY CUSTOMERS",
    counterSuffex: "K+",
  },
  {
    id: 2,
    counterNumber: 20,
    counterDesc: "WORKS COMPLETED",
    counterSuffex: "K+",
  },
  {
    id: 3,
    counterNumber: 99,
    counterDesc: "EXPERT MEMBERS",
    counterSuffex: "",
  },
  {
    id: 4,
    counterNumber: 100,
    counterDesc: "SATISFACTION RATES",
    counterSuffex: "%",
  },
];

const Counter = () => {
  return (
    <section className="pt-[86px] pb-28 bg-[url('/images/counter-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-4 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterIcon,
              counterNumber,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterIcon={counterIcon}
                    counterNumber={counterNumber}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
