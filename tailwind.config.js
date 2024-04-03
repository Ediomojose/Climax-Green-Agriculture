/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        centurygothicRegular: ["century-gothic-regular", "sans-serif"],
        centurygothicBlack: ["century-gothic-black", "sans-serif"],
        centurygothicBold: ["century-gothic-bold", "sans-serif"],
        centurygothicBoldItalic: ["century-gothic-bold-italic", "sans-serif"],
        centurygothicItalic: ["century-gothic-italic", "sans-serif"],
        johnstowndemo: ["johnstown-demo", "sans-serif"],
        josefinsansBold: ["josefinsans-bold", "sans-serif"],
        josefinsansBoldItalic: ["josefinsans-bold-italic", "sans-serif"],
        josefinsansItalic: ["josefinsans-italic", "sans-serif"],
        josefinsansMedium: ["josefinsans-medium", "sans-serif"],
        josefinsansMediumItalic: ["josefinsans-medium-italic", "sans-serif"],
        josefinsansRegular: ["josefinsans-Regular", "sans-serif"],
        remBlack: ["rem-black", "sans-serif"],
        remBold: ["rem-bold", "sans-serif"],
        remBoldItalic: ["rem-bold-italic", "sans-serif"],
        remItalic: ["rem-italic", "sans-serif"],
        remMedium: ["rem-medium", "sans-serif"],
        remMediumItalic: ["rem-medium-italic", "sans-serif"],
        remRegular: ["rem-Regular", "sans-serif"],
      },
      colors: {
        brandGreen1x: "#005400",
        brandGreen2x: '#6D8C54',
        brandGreen3x: "#26B315",
        brandLightBlue4x: "#F5FBFF",
        brandLightViolet1x: "#EAEAF7",
        brandLightGreen1x: "#F3FCF7",
        brandLightGreen2x: "#D0EBE7",
        brandLightGreen3x: "#EBFAE2",
        brandLightGreen4x: "#CEF2DE",
        brandLightGreen5x: "#E7F7EE", 
        brandBlack1x: "#0B0B0C",
        brandBlack2x: "#161616",
        brandWhite1x: "#F9F9FB",
        brandGold1x:'#FFD687',
        brandBrown1x:'#DBA053',
        brandBrown2x:'#A06C20'
      },
      fontSize:{
        xxs:'0.6rem'
      },
      backgroundImage:{
        'bannerBg': 'url(../../src/assets/media/images/style.png)'
      }

    },
  },
  plugins: [],
};
