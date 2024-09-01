import React from "react";

interface SmallCardsProps {
  Query: string;
  Answer: string;
  colSpan: number;
}

const SmallCards = (props: SmallCardsProps) => {
  const { Query, Answer, colSpan } = props;
  let colSpanStrct = `md:col-span-${colSpan} lg:col-span-${colSpan} xl:col-span-${colSpan}`;
  const customClassName = `col-span-4 ${colSpanStrct} border-2 border-slate-100 dark:border-slate-600 rounded-lg pt-1 pb-3`;
  return (
    <div className={customClassName}>
      <p className="text-center lg:text-lg font-semibold text-wrap pt-1 pb-1 m-0">{Query}</p>
      <p className="text-center lg:text-xl font-bold text-brandColor dark:text-white m-0 text-wrap break-words">
        {Answer}
      </p>
    </div>
  );
};

export default SmallCards;
