// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  out.w("<!doctype html><html><head><title>Error</title><link rel=\"icon\" type=\"image/png\" sizes=\"32x21\" href=\"./favicon.png\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"></head><body" +
    marko_classAttr(data.class) +
    ">");

  component_globals_tag({}, out);

  out.w("Error: " +
    marko_escapeXml(data.error));

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
