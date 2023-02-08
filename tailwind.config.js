/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          error:{
            ios: "platformColor(systemRed)",
            android: "platformColor(?android:colorError)",
            default: "red",
          },
          back:"#000211",
          fourth:"#1C1240",
          primary:"#5B2855",
          secondary:"#BE7B82",
          third: "#6C3A6E",
          textp:"#FFF",
          texts:"#cfcfcf"
        }
      },
    },
    plugins: [],
  }