const elevations = {
  grey: {
    1: "0px -1px 2px rgba(3,54,63,0.04), 0px 1px 2px rgba(3,54,63,0.40)",
    4: "0px -1px 2px rgba(3,54,63,0.04), 0px 1px 2px rgba(3,54,63,0.16), 0px 2px 4px rgba(3,54,63,0.08), 0px 4px 8px rgba(3,54,63,0.16)",
    8: "0px -1px 2px rgba(3,54,63,0.04), 0px 1px 2px rgba(3,54,63,0.08), 0px 2px 4px rgba(3,54,63,0.04), 0px 4px 8px rgba(3,54,63,0.12), 0px 8px 16px rgba(3,54,63,0.12)",
    16: "0px -1px 2px rgba(3,54,63,0.04), 0px 1px 2px rgba(3,54,63,0.04), 0px 2px 4px rgba(3,54,63,0.02), 0px 4px 8px rgba(3,54,63,0.04), 0px 8px 16px rgba(3,54,63,0.04), 0px 16px 24px rgba(3,54,63,0.16)",
    24: "0px -1px 2px rgba(3,54,63,0.02), 0px 1px 2px rgba(3,54,63,0.02), 0px 2px 4px rgba(3,54,63,0.02), 0px 4px 8px rgba(3,54,63,0.04), 0px 8px 16px rgba(3,54,63,0.04), 0px 16px 24px rgba(3,54,63,0.08), 0px 24px 32px rgba(3,54,63,0.08)",
  },
  teal: {
    1: "0px -1px 2px rgba(53,129,145,0.04), 0px 1px 2px rgba(53,129,145,0.40)",
    4: "0px -1px 2px rgba(53,129,145,0.04), 0px 1px 2px rgba(53,129,145,0.16), 0px 2px 4px rgba(53,129,145,0.08), 0px 4px 8px rgba(53,129,145,0.16)",
    8: "0px -1px 2px rgba(53,129,145,0.04), 0px 1px 2px rgba(53,129,145,0.08), 0px 2px 4px rgba(53,129,145,0.04), 0px 4px 8px rgba(53,129,145,0.12), 0px 8px 16px rgba(53,129,145,0.12)",
    16: "0px -1px 2px rgba(53,129,145,0.04), 0px 1px 2px rgba(53,129,145,0.04), 0px 2px 4px rgba(53,129,145,0.02), 0px 4px 8px rgba(53,129,145,0.04), 0px 8px 16px rgba(53,129,145,0.04), 0px 16px 24px rgba(53,129,145,0.16)",
    24: "0px -1px 2px rgba(53,129,145,0.02), 0px 1px 2px rgba(53,129,145,0.02), 0px 2px 4px rgba(53,129,145,0.02), 0px 4px 8px rgba(53,129,145,0.04), 0px 8px 16px rgba(53,129,145,0.04), 0px 16px 24px rgba(53,129,145,0.08), 0px 24px 32px rgba(53,129,145,0.08)",
  },
};

const colors = {
  teal: {
    0: "#e6f4fd",
    10: "#cde9fc",
    20: "#a0d9fb",
    30: "#62cafa",
    40: "#33b8eb",
    50: "#29a5d3",
    60: "#1f92bb",
    70: "#177fa4",
    80: "#0e6d8d",
    90: "#075b77",
    100: "#003a4d",
  },
  violet: {
    0: "#f4f0fd",
    10: "#eae1fc",
    20: "#dbcafb",
    30: "#ccb3fa",
    40: "#bf9bf9",
    50: "#b281f9",
    60: "#a666f9",
    70: "#9c45f9",
    80: "#9015f3",
    90: "#7a0bcf",
    100: "#4f008a",
  },
  indigo: {
    0: "#f2f1fd",
    10: "#e5e3fc",
    20: "#d2cdfb",
    30: "#bfb7fa",
    40: "#ada1f9",
    50: "#9a8bf9",
    60: "#8973f9",
    70: "#775af9",
    80: "#673cf9",
    90: "#570ef5",
    100: "#3600a5",
  },
  blue: {
    0: "#eff1fd",
    10: "#dfe4fc",
    20: "#c6d0fb",
    30: "#acbcfa",
    40: "#91a9f9",
    50: "#7395f9",
    60: "#4e82f9",
    70: "#1c6ff2",
    80: "#125fd2",
    90: "#094fb3",
    100: "#003176",
  },
  green: {
    0: "#dbf8ec",
    10: "#b8f2d9",
    20: "#97e1c2",
    30: "#81ceaf",
    40: "#6dbb9c",
    50: "#5aa88a",
    60: "#489678",
    70: "#378367",
    80: "#277157",
    90: "#185f48",
    100: "#003d2b",
  },
  sunset: {
    0: "#fcefee",
    10: "#fadfdd",
    20: "#f7c6c2",
    30: "#f6aca6",
    40: "#f49186",
    50: "#f47261",
    60: "#ef5131",
    70: "#d24528",
    80: "#b53a1f",
    90: "#9a2f16",
    100: "#651a08",
  },
  orange: {
    0: "#fcefed",
    10: "#fadfdb",
    20: "#f8c7bd",
    30: "#f7ad9d",
    40: "#f69177",
    50: "#f7723f",
    60: "#df6128",
    70: "#c5531e",
    80: "#aa4614",
    90: "#91390a",
    100: "#5f2100",
  },
  amber: {
    0: "#fbf0eb",
    10: "#f8e1d7",
    20: "#f4c9b5",
    30: "#f3b08c",
    40: "#f29553",
    50: "#dc8440",
    60: "#c47432",
    70: "#ad6426",
    80: "#96541a",
    90: "#7f460f",
    100: "#532a00",
  },
  red: {
    0: "#fdefef",
    10: "#fbdfdf",
    20: "#f8c6c6",
    30: "#f6acac",
    40: "#f49090",
    50: "#f37171",
    60: "#f34a4b",
    70: "#e22b2c",
    80: "#c32224",
    90: "#a61b1c",
    100: "#6c0c0d",
  },
  pink: {
    0: "#fdeff0",
    10: "#fbdee2",
    20: "#f9c5cc",
    30: "#f7aab6",
    40: "#f68da0",
    50: "#f56d89",
    60: "#f44272",
    70: "#df2860",
    80: "#c12051",
    90: "#a31943",
    100: "#6b0b29",
  },
  white: {
    100: "#ffffff",
  },
  grey: {
    0: "#f1f2f3",
    10: "#e3e5e6",
    20: "#cfd3d4",
    30: "#bbc0c2",
    40: "#a8adaf",
    50: "#959a9c",
    60: "#83888a",
    70: "#727779",
    80: "#616668",
    90: "#505557",
    100: "#323637",
  },
};

module.exports = { elevations, colors };
