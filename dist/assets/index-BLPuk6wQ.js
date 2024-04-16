function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-vgqMfJmb.js","assets/index-lLYLUr23.js","assets/index-CUlJapP_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-lLYLUr23.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-vgqMfJmb.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
