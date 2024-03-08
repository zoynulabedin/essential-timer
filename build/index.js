var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = require("isbot");

// app/shopify.server.ts
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2024-01");

// app/db.server.ts
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.ts
var shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
    }
  },
  future: {
    v3_webhookAdminContext: !0,
    v3_authenticatePublic: !0,
    unstable_newEmbeddedAuthStrategy: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify.addDocumentResponseHeaders, authenticate = shopify.authenticate, unauthenticated = shopify.unauthenticated, login = shopify.login, registerWebhooks = shopify.registerWebhooks, sessionStorage = shopify.sessionStorage;

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let userAgent = request.headers.get("user-agent"), callbackName = (0, import_isbot.isbot)(userAgent ?? "") ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 27,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.dashboard.tsx
var app_dashboard_exports = {};
__export(app_dashboard_exports, {
  default: () => Dashboard
});
var import_polaris = require("@shopify/polaris"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ui-title-bar", { title: "Dashboard" }, void 0, !1, {
      fileName: "app/routes/app.dashboard.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.BlockStack, { gap: "300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "p", variant: "bodyMd", children: [
          "The app template comes with an additional page which demonstrates how to create multiple pages within app navigation using",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_polaris.Link,
            {
              url: "https://shopify.dev/docs/apps/tools/app-bridge",
              target: "_blank",
              removeUnderline: !0,
              children: "App Bridge"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.dashboard.tsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.dashboard.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "p", variant: "bodyMd", children: [
          "To create your own page and have it show up in the app navigation, add a page inside ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Code, { children: "app/routes" }, void 0, !1, {
            fileName: "app/routes/app.dashboard.tsx",
            lineNumber: 35,
            columnNumber: 47
          }, this),
          ", and a link to it in the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Code, { children: "<ui-nav-menu>" }, void 0, !1, {
            fileName: "app/routes/app.dashboard.tsx",
            lineNumber: 36,
            columnNumber: 35
          }, this),
          " component found in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Code, { children: "app/routes/app.jsx" }, void 0, !1, {
            fileName: "app/routes/app.dashboard.tsx",
            lineNumber: 37,
            columnNumber: 26
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/app.dashboard.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.dashboard.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_polaris.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            removeUnderline: !0,
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.dashboard.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.dashboard.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.dashboard.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.dashboard.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.dashboard.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Code({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_polaris.Box,
    {
      as: "span",
      padding: "025",
      paddingInlineStart: "100",
      paddingInlineEnd: "100",
      background: "bg-surface-active",
      borderWidth: "025",
      borderColor: "border",
      borderRadius: "100",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("code", { children }, void 0, !1, {
        fileName: "app/routes/app.dashboard.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.dashboard.tsx",
      lineNumber: 69,
      columnNumber: 5
    },
    this
  );
}

// app/routes/app.billing.tsx
var app_billing_exports = {};
__export(app_billing_exports, {
  default: () => app_billing_default
});
var import_polaris2 = require("@shopify/polaris"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Billing = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Monthly" }, void 0, !1, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { children: "$2" }, void 0, !1, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/app.billing.tsx",
  lineNumber: 10,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/routes/app.billing.tsx",
  lineNumber: 9,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/routes/app.billing.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/app.billing.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), app_billing_default = Billing;

// app/routes/app._index.tsx
var app_index_exports = {};
__export(app_index_exports, {
  default: () => Index
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Hello" }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/auth.login/route.tsx
var route_exports = {};
__export(route_exports, {
  action: () => action,
  default: () => Auth,
  links: () => links,
  loader: () => loader
});
var import_react3 = require("react"), import_node3 = require("@remix-run/node"), import_polaris3 = require("@shopify/polaris"), import_react4 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-LT523JAI.css";

// app/routes/auth.login/error.server.tsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node3.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node3.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react4.useLoaderData)(), actionData = (0, import_react4.useActionData)(), [shop, setShop] = (0, import_react3.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.tsx",
      lineNumber: 49,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.tsx",
        lineNumber: 52,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.tsx",
      lineNumber: 62,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 47,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.tsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action2
});
var action2 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/_index/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader2 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node4.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node4.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.tsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader3
});
var loader3 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.tsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react7 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader4 = async ({ request }) => (await authenticate.admin(request), (0, import_node5.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App3() {
  let { apiKey } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: "/app/dashboard", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/app.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: "/app/billing", children: "Billing" }, void 0, !1, {
        fileName: "app/routes/app.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react6.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-5JQFU2QJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-QI5OTCK4.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-O46MZHMS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-X2AFEWCI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LF7MD6AO.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-PKI4J4TR.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-FZEPRKD5.js", "/build/_shared/chunk-GCAJ3DSU.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-V3KEK7ZN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.billing": { id: "routes/app.billing", parentId: "routes/app", path: "billing", index: void 0, caseSensitive: void 0, module: "/build/routes/app.billing-DSQ556JM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.dashboard": { id: "routes/app.dashboard", parentId: "routes/app", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/app.dashboard-UL22SSQU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-Z6LPBAD4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-JNJYYASC.js", imports: ["/build/_shared/chunk-FZEPRKD5.js", "/build/_shared/chunk-GCAJ3DSU.js", "/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-YCEDH7MD.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0bb1120e", hmr: { runtime: "/build/_shared/chunk-O46MZHMS.js", timestamp: 1707355789748 }, url: "/build/manifest-0BB1120E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.dashboard": {
    id: "routes/app.dashboard",
    parentId: "routes/app",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: app_dashboard_exports
  },
  "routes/app.billing": {
    id: "routes/app.billing",
    parentId: "routes/app",
    path: "billing",
    index: void 0,
    caseSensitive: void 0,
    module: app_billing_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
