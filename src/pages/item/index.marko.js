// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!doctype html><html><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"content\"><div>Item: " +
    marko_escapeXml(data["item-details"].title) +
    "</div><div>Description: " +
    marko_escapeXml(data["item-details"].description) +
    "</div><div>Description: " +
    marko_escapeXml(data["item-details"].price) +
    "</div><div>Seller: " +
    marko_escapeXml(data["seller-info"].username) +
    "</div><div>Shipping options:</div><select>");

  marko_forEach(data["shipping-info"], function(opt) {
    out.w("<option" +
      marko_attr("value", opt.name) +
      ">" +
      marko_escapeXml(opt.desc) +
      "</option>");
  });

  out.w("</select></div>");

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
