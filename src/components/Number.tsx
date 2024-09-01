interface Props {
  number: string;
  highlighted?: boolean;
}
const Number = ({ number, highlighted = false }: Props) => {
  return (
    <div
      data-testid="numberComponent"
      className={`inline-block  h-[33px] w-[33px]  ${
        highlighted ? "bg-[#BEE2FD]" : "border border-white"
      } rounded-[16.5px] relative`}
    >
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ${
          highlighted ? "text-[#022959]" : "text-white"
        }  text-sm font-['Ubuntu-Bold']`}
      >
        {number}
      </div>
    </div>
  );
};

export default Number;
