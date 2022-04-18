const Koa = require("koa");
const compress = require("koa-compress");
const mount = require("koa-mount");
const { join, extname } = require("path");
const { parseCookie, parseNavLang } = require("./serverHelper");

const root = join(__dirname, "dist");

const app = new Koa();
app.use(
  compress({
    threshold: 2048,
    gzip: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    br: false,
  }),
);

let render;
app.use(async (ctx, next) => {
  global._cookies = parseCookie(ctx);
  global._navigatorLang = parseNavLang(ctx);
  const ext = extname(ctx.request.path);
  console.log(
    "ctx.request.path:",
    ctx.request.path,
    "-",
    ext,
    "- ip:",
    ctx.request.ip,
  );
  if (!ext || ext === ".") {
    if (!render) {
      render = require("./dist/umi.server");
    }
    ctx.type = "text/html";
    ctx.status = 200;
    const { html, error } = await render({
      path: ctx.request.url,
      getInitialPropsCtx: {
        req: ctx.request,
      },
    });
    if (error) {
      console.warn("Error", error);
      ctx.throw(500, error);
    } else {
      ctx.body = html;
    }
  } else {
    await next();
  }
});

app.use(mount("/dist", require("koa-static")(root)));
app.use(mount("/", require("koa-static")(root)));

app.listen(3000);
app.timeout = 5 * 60 * 1000;
console.log("http://localhost:3000");

module.exports = app.callback();

process.on("uncaughtException", function (err) {
  // handle the error safely
  console.log(err);
});

//process.on('unhandledRejection', (reason, p) => {
//  console.warn('Unhandled Rejection at: Promise', p, 'reason:', reason);
//  // application specific logging, throwing an error, or other logic here
//});
