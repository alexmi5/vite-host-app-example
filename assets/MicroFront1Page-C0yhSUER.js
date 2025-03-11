import { j as jsxRuntimeExports } from './index-CGkYwrwg.js';

const remotesMap = {
'micro1':{url:'http://localhost:4173/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule();
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const __federation_var_micro1App = await __federation_method_getRemote("micro1" , "./App");
 let App = __federation_method_unwrapDefault(__federation_var_micro1App); 
const MicroFront1Page = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "micro", children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, { baseUrl: "micro-1" }) });
};

export { MicroFront1Page as default };
