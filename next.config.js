// function deleteAfield(object, field) {
//     delete object[field];
//     return object;
//   }
  
// module.exports = {
//     basePath: '/prettycite',
//     assetPrefix: '/prettycite/',
//     webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
//         config.module.rules[1].oneOf.forEach((moduleLoader, i) => {
//           Array.isArray(moduleLoader.use) &&
//             moduleLoader.use.forEach((l) => {
//               if (
//                 l.loader.includes("\\css-loader") &&
//                 !l.loader.includes("postcss-loader")
//               ) {
//                 l.options = {
//                   ...l.options,
//                   modules: l.options.modules
//                     ? {
//                         ...deleteAfield(l.options.modules, "getLocalIdent"),
//                         localIdentName: "[hash:base64:6]",
//                       }
//                     : l.options.module,
//                 };
//               }
//             });
//         });
//         return config;
//       },
// };
