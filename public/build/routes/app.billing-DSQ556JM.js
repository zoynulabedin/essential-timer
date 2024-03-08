import {
  Button,
  Card,
  Layout,
  Page,
  init_esm
} from "/build/_shared/chunk-GCAJ3DSU.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-O46MZHMS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.billing.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.billing.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.billing.tsx"
  );
  import.meta.hot.lastModified = "1707241579185.178";
}
var Billing = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Monthly" }, void 0, false, {
      fileName: "app/routes/app.billing.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "$2" }, void 0, false, {
      fileName: "app/routes/app.billing.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = Billing;
var app_billing_default = Billing;
var _c;
$RefreshReg$(_c, "Billing");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_billing_default as default
};
//# sourceMappingURL=/build/routes/app.billing-DSQ556JM.js.map
