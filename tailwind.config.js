const PRIMARY_COLOR = "#6C63FF";

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./sections/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLOR,
        light: "#7E7E7E",
        code: "#3F3F3F",
        faded: "#858585",
        input: "#F6F6F6",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        palanquin: "'Palanquin Dark', sans-serif",
        fira: "'Fira Mono', sans-serif",
      },
      fontSize: {},
      lineHeight: {
        normal: "1.4",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        purple: `2px 4px 20px ${PRIMARY_COLOR}aa`,
        card: `2px 2px 20px ${PRIMARY_COLOR}12`,
      },
      letterSpacing: {
        notfound: ".175rem",
      },
    },
  },
  plugins: [],
};
