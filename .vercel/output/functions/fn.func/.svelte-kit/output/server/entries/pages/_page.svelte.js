import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as add_attribute, v as validate_component, e as escape } from "../../chunks/index2.js";
import "html-to-text";
import "pretty";
const pxToPt = (px) => isNaN(Number(px)) ? null : parseInt(px, 10) * 3 / 4;
const styleToString = (style) => {
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "style", "pX", "pY", "target"]);
  let { href = "" } = $$props;
  let { style = {} } = $$props;
  let { pX = 0 } = $$props;
  let { pY = 0 } = $$props;
  let { target = "_blank" } = $$props;
  const y = pY * 2;
  const textRaise = pxToPt(y.toString());
  const buttonStyle = (style2) => {
    const paddingY = style2?.pY || 0;
    const paddingX = style2?.pX || 0;
    return {
      ...style2,
      lineHeight: "100%",
      textDecoration: "none",
      display: "inline-block",
      maxWidth: "100%",
      padding: `${paddingY}px ${paddingX}px`
    };
  };
  const buttonTextStyle = (style2) => {
    const paddingY = style2?.pY || 0;
    return {
      ...style2,
      maxWidth: "100%",
      display: "inline-block",
      lineHeight: "120%",
      textDecoration: "none",
      textTransform: "none",
      msoPaddingAlt: "0px",
      msoTextRaise: pxToPt(paddingY.toString())
    };
  };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.pX === void 0 && $$bindings.pX && pX !== void 0)
    $$bindings.pX(pX);
  if ($$props.pY === void 0 && $$bindings.pY && pY !== void 0)
    $$bindings.pY(pY);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      {
        style: escape_attribute_value(styleToString(buttonStyle({ ...style, pX, pY })))
      }
    ],
    {}
  )}><span><!-- HTML_TAG_START -->${`<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`}<!-- HTML_TAG_END --></span>
	<span${add_attribute("style", styleToString(buttonTextStyle({ ...style, pX, pY })), 0)}>${slots.default ? slots.default({}) : ``}</span>
	<span><!-- HTML_TAG_START -->${`<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`}<!-- HTML_TAG_END --></span></a>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefault = {
    width: "100%",
    border: "none",
    borderTop: "1px solid #eaeaea",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<hr${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["lang"]);
  let { lang = "en" } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `<html${spread(
    [
      escape_object($$restProps),
      { id: "__svelte-email" },
      { lang: escape_attribute_value(lang) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</html>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefault = {
    fontSize: "14px",
    lineHeight: "24px",
    margin: "16px 0",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<p${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Hello = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "World" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(Html, "Html").$$render($$result, { lang: "en" }, {}, {
    default: () => {
      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
        default: () => {
          return `Hello, ${escape(name)}!
	`;
        }
      })}
	${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})}
	${validate_component(Button, "Button").$$render($$result, { href: "https://svelte.dev" }, {}, {
        default: () => {
          return `Visit Svelte`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

${validate_component(Hello, "Hello").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
