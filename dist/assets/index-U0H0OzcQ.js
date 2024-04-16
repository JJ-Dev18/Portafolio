function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CRs_gUGj.js","assets/index-lLYLUr23.js","assets/index-CUlJapP_.css","assets/index-C84IbGof.js","assets/index-DU7foNEg.js","assets/index-Bo8tX4BS.js","assets/index-BdcTu_ah.js","assets/index-Cd5zUgNA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-lLYLUr23.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CRs_gUGj.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C84IbGof.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DU7foNEg.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bo8tX4BS.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BdcTu_ah.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cd5zUgNA.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
