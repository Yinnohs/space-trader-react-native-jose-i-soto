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
          p:{
            1:'#3a015c',
            2:'#32004f',
            3:'#220135',
            4:'#190028',
            5:'#11001c'
          },
          primary:"#1F2937",
          secondary:"#D97706",
          third: "#F9FAFB",
          textp:"#FFF",
          texts:"#cfcfcf",
          warning: "#b03000",
          pass: "#39a845"
        }
      },
    },
    plugins: [],
  }