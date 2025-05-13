import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium">
      Подпишитесь сейчас и получите скидку 20%
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        Что бы узнавать последние новинки и экономить сейчас.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Введите свой Email"
        />
        <button className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none">
          Подписаться
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
