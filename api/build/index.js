var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/.pnpm/remix@1.19.3/node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/remix@1.19.3/node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    exports.createCookie = node.createCookie;
    exports.createCookieSessionStorage = node.createCookieSessionStorage;
    exports.createFileSessionStorage = node.createFileSessionStorage;
    exports.createMemorySessionStorage = node.createMemorySessionStorage;
    exports.createSessionStorage = node.createSessionStorage;
    exports.unstable_createFileUploadHandler = node.unstable_createFileUploadHandler;
    exports.unstable_createMemoryUploadHandler = node.unstable_createMemoryUploadHandler;
    exports.unstable_parseMultipartFormData = node.unstable_parseMultipartFormData;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    exports.createSession = serverRuntime.createSession;
    exports.isCookie = serverRuntime.isCookie;
    exports.isSession = serverRuntime.isSession;
    exports.json = serverRuntime.json;
    exports.redirect = serverRuntime.redirect;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    exports.Form = react.Form;
    exports.Link = react.Link;
    exports.Links = react.Links;
    exports.LiveReload = react.LiveReload;
    exports.Meta = react.Meta;
    exports.NavLink = react.NavLink;
    exports.PrefetchPageLinks = react.PrefetchPageLinks;
    exports.RemixBrowser = react.RemixBrowser;
    exports.RemixServer = react.RemixServer;
    exports.Scripts = react.Scripts;
    exports.ScrollRestoration = react.ScrollRestoration;
    exports.useActionData = react.useActionData;
    exports.useBeforeUnload = react.useBeforeUnload;
    exports.useCatch = react.useCatch;
    exports.useFetcher = react.useFetcher;
    exports.useFetchers = react.useFetchers;
    exports.useFormAction = react.useFormAction;
    exports.useLoaderData = react.useLoaderData;
    exports.useMatches = react.useMatches;
    exports.useSubmit = react.useSubmit;
    exports.useTransition = react.useTransition;
    exports.Outlet = react.Outlet;
    exports.useHref = react.useHref;
    exports.useLocation = react.useLocation;
    exports.useNavigate = react.useNavigate;
    exports.useNavigationType = react.useNavigationType;
    exports.useOutlet = react.useOutlet;
    exports.useOutletContext = react.useOutletContext;
    exports.useParams = react.useParams;
    exports.useResolvedPath = react.useResolvedPath;
    exports.useSearchParams = react.useSearchParams;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links
});
var import_remix2 = __toESM(require_dist());

// app/styles/index.css
var styles_default = "/build/_assets/index-YABRBD4L.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], App = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.Outlet, {}, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 28,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this), Document = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", href: "/favicon.png", type: "image/png" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix2.LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 52
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 35,
  columnNumber: 5
}, this), root_default = App;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  headers: () => headers
});

// sounds.ts
var sort = (input) => input.sort((a, b) => a.name < b.name ? -1 : 1), sounds = [
  {
    message: "NEW sounds",
    files: sort([
      {
        name: "Maahlzeeeit",
        file: "./sounds/maaaaahhlzeit.mp3"
      }
    ])
  },
  {
    message: "TR legacy",
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
    message: "Random noises",
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
], sounds_default = sounds;

// app/components/jb.png
var jb_default = "/build/_assets/jb-2HR4TUBG.png";

// app/components/mobile-jb.png
var mobile_jb_default = "/build/_assets/mobile-jb-QT2SKRMX.png";

// app/components/JukeBox.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Jukebox = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative h-screen", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "md:hidden", src: mobile_jb_default }, void 0, !1, {
    fileName: "app/components/JukeBox.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "img",
    {
      className: "absolute right-0 pb-3 h-full hidden md:block",
      src: jb_default
    },
    void 0,
    !1,
    {
      fileName: "app/components/JukeBox.tsx",
      lineNumber: 8,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/JukeBox.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), JukeBox_default = Jukebox;

// app/components/SoundButton.tsx
var import_react = require("react"), import_react_sound = __toESM(require("react-sound"));

// app/components/niki.png
var niki_default = "/build/_assets/niki-LJWRRSUH.png";

// app/components/SoundButton.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), IMAGE_MAP = {
  niki: niki_default
}, SoundButton = ({ children, soundName, label, image }) => {
  let [isPlaying, setIsPlaying] = (0, import_react.useState)(!1), [, setIsLoading] = (0, import_react.useState)(!1), resolvedImg = image ? IMAGE_MAP[image] : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        className: "relative bg-white-100 shadow-grey-8 rounded-3xl py-1 px-4 h-[48px] transition transform ease-out active:scale-110",
        onClick: () => {
          setIsPlaying(!0);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              className: `text-2xl absolute top-2 left-3 ${isPlaying ? "animate-spin" : "hidden"}`,
              children: "\u{1F4BF}"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SoundButton.tsx",
              lineNumber: 31,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "uppercase text-xs h-[15px]", children: [
            resolvedImg ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "inline-block h-full", src: resolvedImg }, void 0, !1, {
              fileName: "app/components/SoundButton.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this) : null,
            label
          ] }, void 0, !0, {
            fileName: "app/components/SoundButton.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "font-bold truncate", children }, void 0, !1, {
            fileName: "app/components/SoundButton.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SoundButton.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react_sound.default,
      {
        url: soundName,
        onLoading: () => setIsLoading(!0),
        onLoad: () => setIsLoading(!1),
        onStop: () => setIsPlaying(!1),
        onError: () => setIsPlaying(!1),
        onFinishedPlaying: () => {
          setIsPlaying(!1), setIsLoading(!1);
        },
        playStatus: isPlaying ? "PLAYING" : "STOPPED"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SoundButton.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SoundButton.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}, SoundButton_default = SoundButton;

// app/routes/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), headers = () => ({
  "Cache-Control": "s-maxage=1, stale-while-revalidate=59"
}), Index = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-screen w-screen flex flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(JukeBox_default, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "md:absolute top-[162px] md:left-9 overflow-scroll md:overflow-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "hidden md:block text-5xl mb-7 font-bold", children: "TourRadar Jukebox" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid md:w-[747px] grid-cols-1 md:grid-cols-3 gap-3 md:bg-transparent p-3 bg-teal-10", children: sounds_default.map((group) => {
      let label = group.message;
      return group.files.map(({ name, file }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        SoundButton_default,
        {
          label,
          soundName: file,
          image: group.image,
          children: name
        },
        name,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 27,
          columnNumber: 15
        },
        this
      ));
    }) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/index.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this), routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FQ37E6YQ.js", imports: ["/build/_shared/chunk-WYDYZ4AL.js", "/build/_shared/chunk-RGJX4USC.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4O7LWXEO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-BSWNRMNY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "3c93c072", hmr: void 0, url: "/build/manifest-3C93C072.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
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
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

remix/dist/index.js:
  (**
   * @remix-run/node v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
