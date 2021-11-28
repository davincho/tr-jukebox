var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/davincho/code/tr-jukebox/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links
});
var React2 = __toModule(require("react"));
var import_remix2 = __toModule(require("remix"));

// app/styles/index.css
var styles_default = "/build/_assets/index-PSM4KAWB.css";

// route-module:/Users/davincho/code/tr-jukebox/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var App = () => {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null));
};
var Document = ({ children }) => {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React2.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React2.createElement(import_remix2.LiveReload, null)));
};
var root_default = App;

// route-module:/Users/davincho/code/tr-jukebox/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  headers: () => headers
});
var import_react3 = __toModule(require("react"));

// sounds.ts
var sort = (input) => input.sort((a, b) => a.name < b.name ? -1 : 1);
var sounds = [
  {
    message: "NEW sounds",
    files: sort([
      {
        name: "Ai jai jaiii",
        file: "./sounds/ai_jai_jai.mp3"
      },
      {
        name: "Alrightiiii",
        file: "./sounds/alrightiiiii.mp3"
      },
      {
        name: "Tsch\xFCss Baba Servus Pfirti",
        file: "./sounds/tschuss_baba_servus_pfirti.mp3"
      }
    ])
  },
  {
    message: "Baiii's",
    files: [
      {
        name: "Jen",
        file: "./sounds/baiii.mp3"
      },
      {
        name: "Davincho",
        file: "./sounds/baaaaiiii.mp3"
      }
    ]
  },
  {
    message: "4 ever \u2764\uFE0F ",
    image: "niki",
    files: sort([
      { name: "Merning", file: "./sounds/merning.mp3" },
      { name: "After Merning", file: "./sounds/after-merning.mp3" }
    ])
  },
  {
    message: "TourRadar random noises",
    files: sort([
      {
        name: "Dog",
        file: "./sounds/dog.mp3"
      },
      {
        name: "Elephant",
        file: "./sounds/elephant.mp3"
      },
      {
        name: "Sheep",
        file: "./sounds/sheep.mp3"
      }
    ])
  },
  {
    message: "in memoriam Alexis \u{1F622}",
    files: sort([
      {
        name: "Duck",
        file: "/sounds/duck.mp3"
      },
      {
        name: "Final countdown",
        file: "./sounds/final_countdown.mp3"
      },
      {
        name: "Frog",
        file: "./sounds/frog.mp3"
      },
      {
        name: "Frog #2",
        file: "./sounds/frog_2.mp3"
      },
      {
        name: "Trumpet",
        file: "./sounds/trompet.mp3"
      },
      {
        name: "Trumpet #2",
        file: "./sounds/trompet_2.mp3"
      },
      {
        name: "Owl",
        file: "./sounds/owl.mp3"
      }
    ])
  }
];
var sounds_default = sounds;

// app/components/JukeBox.tsx
var import_react = __toModule(require("react"));

// app/components/jb.png
var jb_default = "/build/_assets/jb-2HR4TUBG.png";

// app/components/mobile-jb.png
var mobile_jb_default = "/build/_assets/mobile-jb-ZRXY7JIX.png";

// app/components/JukeBox.tsx
var Jukebox = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bg-container"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    className: "md:hidden",
    src: mobile_jb_default
  }), /* @__PURE__ */ import_react.default.createElement("img", {
    className: "absolute right-0 top-3 h-screen hidden md:block",
    src: jb_default
  }));
};
var JukeBox_default = Jukebox;

// app/components/SoundButton.tsx
var import_react2 = __toModule(require("react"));
var import_react_sound = __toModule(require("react-sound"));

// app/components/niki.png
var niki_default = "/build/_assets/niki-LJWRRSUH.png";

// app/components/SoundButton.tsx
var IMAGE_MAP = {
  niki: niki_default
};
var SoundButton = ({ children, soundName, label, image }) => {
  const [isPlaying, setIsPlaying] = (0, import_react2.useState)(false);
  const [, setIsLoading] = (0, import_react2.useState)(false);
  const resolvedImg = IMAGE_MAP[image];
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("button", {
    className: `bg-white-100 shadow-grey-8 rounded-3xl p-1 h-[48px] ${isPlaying ? "animate-spin" : ""}`,
    onClick: () => {
      setIsPlaying(true);
    }
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "uppercase text-xs h-[15px]"
  }, resolvedImg ? /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "inline-block h-full",
    src: resolvedImg.src
  }) : null, label), /* @__PURE__ */ import_react2.default.createElement("div", null, children)), /* @__PURE__ */ import_react2.default.createElement(import_react_sound.default, {
    url: soundName,
    onLoading: () => setIsLoading(true),
    onLoad: () => setIsLoading(false),
    onStop: () => setIsPlaying(false),
    onError: () => setIsPlaying(false),
    onFinishedPlaying: () => {
      setIsPlaying(false);
      setIsLoading(false);
    },
    playStatus: isPlaying ? import_react_sound.default.status.PLAYING : import_react_sound.default.status.STOPPED
  }));
};
var SoundButton_default = SoundButton;

// route-module:/Users/davincho/code/tr-jukebox/app/routes/index.tsx
var headers = () => {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59"
  };
};
var Index = () => {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "h-screen w-screen flex flex-col"
  }, /* @__PURE__ */ import_react3.default.createElement(JukeBox_default, null), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "md:absolute top-[162px] md:left-9 overflow-scroll"
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    className: "hidden md:block text-5xl mb-7 font-bold"
  }, "TourRadar Jukebox"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid md:w-[747px] grid-cols-1 md:grid-cols-3 gap-3 md:bg-transparent p-3 bg-teal-10"
  }, sounds_default.map((group) => {
    const label = group.message;
    return group.files.map(({ name, file }) => /* @__PURE__ */ import_react3.default.createElement(SoundButton_default, {
      label,
      key: name,
      soundName: file,
      image: group.image
    }, name));
  }))));
};
var routes_default = Index;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
