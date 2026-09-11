export const mean=a=>a.length?a.reduce((s,x)=>s+Number(x),0)/a.length:0;
export function stats(rows,key='value'){const v=rows.map(r=>Number(r[key]));return{n:v.length,min:Math.min(...v),max:Math.max(...v),mean:mean(v)}}
export function biasedSample(pop,n){return pop.filter(x=>x.zone==='North studio').slice(0,Math.min(n,100))}
export function stratifiedSample(pop,n){n=Math.max(2,Math.min(Math.trunc(n),pop.length));const k=Math.floor(n/2),north=pop.filter(x=>x.zone==='North studio').slice(0,k),south=pop.filter(x=>x.zone==='South studio').slice(0,k);return [...north,...south]}
export function composition(rows){const c={};for(const r of rows)c[r.zone]=(c[r.zone]||0)+1;return c}
export function pearson(rows,x='drinks',y='visitors'){if(rows.length<2)return 0;const mx=mean(rows.map(r=>r[x])),my=mean(rows.map(r=>r[y]));let num=0,dx=0,dy=0;for(const r of rows){const a=r[x]-mx,b=r[y]-my;num+=a*b;dx+=a*a;dy+=b*b}return dx&&dy?num/Math.sqrt(dx*dy):0}
export function axisPosition(value,min,max){return (Number(value)-min)/(max-min)}
