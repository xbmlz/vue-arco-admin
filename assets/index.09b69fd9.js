import{s as T}from"./index.62bdb109.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css              */import{h as x,b8 as w,c as S,d as C,a as c,q as $,a_ as L,aF as i,b9 as R,aY as N,z as U,A as j,aE as e,aD as t,u as v,aS as r,aM as q,aT as z,b1 as O,aV as P,aP as Q,b2 as Y,aQ as G,b3 as H,b4 as J}from"./arco.56a349cc.js";import"./vue.0c88ca3a.js";const K=[{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"title"},{title:"\u56FE\u6807",dataIndex:"icon",render:({record:a})=>x(w(`<${a.icon}/>`))},{title:"\u6743\u9650\u6807\u8BC6",dataIndex:"permission"},{title:"\u7EC4\u4EF6\u5730\u5740",dataIndex:"path"},{title:"\u6392\u5E8F",dataIndex:"order"},{title:"\u72B6\u6001",dataIndex:"status",render:({record:a})=>x("a-tag",{color:a.status===1?"green":"red"},{default:()=>a.status===1?"\u542F\u7528":"\u7981\u7528"})},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime"}],W=S(()=>[{label:"\u542F\u7528",value:1},{label:"\u7981\u7528",value:0}]);class X{static getMenuList(){return T.get("/menu/list")}}const Z=C({name:"MenuManagement"}),_e=C({...Z,setup(a){const B=c(),o=c({name:"",status:1}),_=c(!0),m=c([]),d=async()=>{m.value=await X.getMenuList()};return $(()=>{d()}),(ee,n)=>{const E=q,p=z,u=O,g=L,y=i("icon-search"),l=P,f=i("icon-refresh"),F=Q,b=Y,D=G,I=H,V=i("icon-plus"),h=i("icon-shrink"),k=J,M=R,A=N;return U(),j("div",null,[e(A,{title:"\u83DC\u5355\u7BA1\u7406",class:"general-card"},{default:t(()=>[e(D,{model:o.value},{default:t(()=>[e(b,{gutter:24},{default:t(()=>[e(u,{span:8},{default:t(()=>[e(p,{field:"number",label:"\u540D\u79F0"},{default:t(()=>[e(E,{modelValue:o.value.name,"onUpdate:modelValue":n[0]||(n[0]=s=>o.value.name=s),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:8},{default:t(()=>[e(p,{field:"number",label:"\u72B6\u6001"},{default:t(()=>[e(g,{modelValue:o.value.status,"onUpdate:modelValue":n[1]||(n[1]=s=>o.value.status=s),options:v(W),placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001"},null,8,["modelValue","options"])]),_:1})]),_:1}),e(u,{span:8},{default:t(()=>[e(F,null,{default:t(()=>[e(l,{type:"primary",onClick:d},{icon:t(()=>[e(y)]),default:t(()=>[r(" \u67E5\u8BE2 ")]),_:1}),e(l,{onClick:d},{icon:t(()=>[e(f)]),default:t(()=>[r(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(I,{style:{"margin-top":"0"}}),e(b,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(u,{span:12},{default:t(()=>[e(F,null,{default:t(()=>[e(l,{type:"primary"},{icon:t(()=>[e(V)]),default:t(()=>[r(" \u65B0\u5EFA ")]),_:1}),e(l,{onClick:n[2]||(n[2]=s=>_.value=!_.value)},{icon:t(()=>[e(h)]),default:t(()=>[r(" \u5C55\u5F00/\u6536\u8D77 ")]),_:1})]),_:1})]),_:1}),e(u,{span:12,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:t(()=>[e(k,{content:"\u5237\u65B0"},{default:t(()=>[e(l,{shape:"circle"},{icon:t(()=>[e(f)]),_:1})]),_:1})]),_:1})]),_:1}),e(M,{ref_key:"tableRef",ref:B,columns:v(K),data:m.value,"default-expand-all-rows":!0},null,8,["columns","data"])]),_:1})])}}});export{_e as default};