import{d,z as f,A as g,D as o,u as p,aK as P,aL as k,a as $,r as L,aM as M,aN as N,aO as U,aP as j,aQ as z,aR as R,aE as e,aD as t,aS as c,aI as T,aF as w,aT as q,aU as H,aV as O}from"./arco.56a349cc.js";import{_ as K,u as Q,B as G}from"./index.62bdb109.js";/* empty css              *//* empty css              *//* empty css               */import{u as J,F as W}from"./index.c9cef6c4.js";import{u as X,e as Y}from"./vue.0c88ca3a.js";const Z="/vur-arco-admin/assets/logo.85d92f24.svg",ee="/vur-arco-admin/assets/login-banner.1dd0ed81.svg",oe=a=>(P("data-v-e4345133"),a=a(),k(),a),te={class:"banner",flex:"","w-520px":"","flex-col":"","justify-center":"","items-center":""},se=oe(()=>o("div",{"w-350px":"","text-3xl":"","font-500":"","color-white":"","text-left":"",relative:"","mb-10":""},"\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u8D28\u91CF\u6A21\u677F",-1)),ae=["src"],ne=d({__name:"banner",setup(a){return(u,_)=>(f(),g("div",te,[se,o("img",{src:p(ee),"w-350px":""},null,8,ae)]))}});const re=K(ne,[["__scopeId","data-v-e4345133"]]),ue={"w-320px":""},le=o("div",{"font-500":"","text-3xl":"","mb-4":""},"\u767B\u5F55 VEnable Admin",-1),ie=o("div",{"text-2xl":"","color-gray-5":"","mb-4":""},"\u767B\u5F55 VEnable Admin",-1),ce={"h-32px":"","color-red-5":"","text-xl":""},de={flex:"","justify-between":""},_e=d({__name:"login-form",setup(a){const u=$(""),_=Q(),A=Y(),{loading:v,setLoading:x}=J(),l=X("login-config",{rememberPassword:!0,username:"admin",password:"123456"}),r=L({username:l.value.username,password:l.value.password}),B=i=>{l.value.rememberPassword=i},F=async({errors:i,values:n})=>{if(!v.value&&!i){x(!0);try{const s=await _.login(n);s&&(A.replace((s==null?void 0:s.homePath)||G),T.success("\u767B\u5F55\u6210\u529F"))}catch(s){u.value=s.message}finally{x(!1)}}};return(i,n)=>{const s=w("icon-user"),y=M,h=q,C=w("icon-lock"),D=H,S=N,V=U,b=O,E=j,I=z;return f(),g("div",ue,[le,ie,o("div",ce,R(u.value),1),e(I,{ref:"loginForm",model:r,layout:"vertical",onSubmit:F},{default:t(()=>[e(h,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(y,{modelValue:r.username,"onUpdate:modelValue":n[0]||(n[0]=m=>r.username=m),placeholder:"\u7528\u6237\u540D: admin"},{prefix:t(()=>[e(s)]),_:1},8,["modelValue"])]),_:1}),e(h,{field:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(D,{modelValue:r.password,"onUpdate:modelValue":n[1]||(n[1]=m=>r.password=m),placeholder:"\u5BC6\u7801: admin","allow-clear":""},{prefix:t(()=>[e(C)]),_:1},8,["modelValue"])]),_:1}),e(E,{size:16,direction:"vertical"},{default:t(()=>[o("div",de,[e(S,{checked:"rememberPassword","model-value":p(l).rememberPassword,onChange:B},{default:t(()=>[c(" \u8BB0\u4F4F\u5BC6\u7801 ")]),_:1},8,["model-value","onChange"]),e(V,null,{default:t(()=>[c("\u5FD8\u8BB0\u5BC6\u7801")]),_:1})]),e(b,{type:"primary","html-type":"submit",loading:p(v),long:""},{default:t(()=>[c("\u767B\u5F55")]),_:1},8,["loading"]),e(b,{type:"text",long:""},{default:t(()=>[c("\u6CE8\u518C\u8D26\u53F7")]),_:1})]),_:1})]),_:1},8,["model"])])}}}),me={flex:"","h-100vh":""},pe=o("div",{fixed:"","top-4":"","left-4":"","z-1":"","inline-flex":"","items-center":""},[o("img",{"w-8":"",alt:"logo",src:Z}),o("div",{"ml-2":"","mr-2":"","text-2xl":"","font-500":"","color-white":""},"VEnable Admin")],-1),fe={relative:"",flex:"","flex-1":"","items-center":"","justify-center":"","pb-40px":""},ge={absolute:"",w:"100%","right-0":"","bottom-0":""},ve=d({name:"Login"}),ye=d({...ve,setup(a){return(u,_)=>(f(),g("div",me,[pe,e(re),o("div",fe,[o("div",null,[e(_e)]),o("div",ge,[e(W)])])]))}});export{ye as default};