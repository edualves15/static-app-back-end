import{r,b as c,j as s,P as i}from"./index-DNRBFzgo.js";const n=()=>{const[a,t]=r.useState([]);return r.useEffect(()=>{c.get("/api/publicItems").then(e=>t(e.data.data)).catch(e=>console.error("Erro ao buscar items públicos:",e))},[]),s.jsxs(i,{children:[s.jsx("h2",{children:"Itens públicos"}),a&&a.length>0?a.map(e=>s.jsxs("div",{children:[s.jsx("h3",{children:e.value1}),s.jsx("p",{children:e.value2})]},e.id)):s.jsx("p",{children:"Nenhum item privado encontrado"})]})};export{n as default};
