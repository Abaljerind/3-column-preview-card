/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        deca: ["Lexend Deca"],
        bigShoulders: ["Big Shoulders Display"],
      },
      colors: {
        orange: "hsl(31, 77%, 52%)",
        cyan: "hsl(184, 100%, 22%)",
        darkCyan: "hsl(179, 100%, 13%)",
        whiteText: "hsla(0, 0%, 100%, 0.75)",
        lightGrey: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
