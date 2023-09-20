// const express = require("express");
// const app = express();
// const path = require("path");
// // const createError = require("http-errors");
// // const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// const gainsRouter = require("./routes/gains");
// const catRouter = require("./routes/cat");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());

// app.use(express.static(path.join("src/", "public")));
// app.use("/api/gains", gainsRouter);
// app.use("/api/cats", catRouter);

// // app.use((req, res, next) => {
// //   next(createError(404));
// // });

// // app.use((err, req, res, next) => {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get("env") === "development" ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render("error");
// // });
// async function main() {
//   await mongoose.connect(mongoDB,{ useNewUrlParser: true,useUnifiedTopology: true  });
// }

// mongoose.set("strictQuery", false);
// const mongoDB = "mongodb://127.0.0.1/sampler";
// main().catch((err) => console.log('@@@err', err));


// const port = process.env.PORT || 5002;

// app.listen(port, () => {
//     console.log('magic on port ', port);
// })
// // module.exports = app;