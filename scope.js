Exit code: 0
Wall time: 0.2 seconds
Output:
// Aislamiento de pedidos y finanzas por usuario. Los productos siguen siendo compartidos.
(function(){const get=localStorage.getItem.bind(localStorage),set=localStorage.setItem.bind(localStorage),user=(get('bdp-current-user')||'guest').toLowerCase();const key=k=>(k==='bdp-orders'||k==='bdp-finance')?`${k}-${user}`:k;if(user==='bdlisboa'&&!get('bdp-orders-bdlisboa')){if(get('bdp-orders'))set('bdp-orders-bdlisboa',get('bdp-orders'));if(get('bdp-finance'))set('bdp-finance-bdlisboa',get('bdp-finance'))}localStorage.getItem=k=>get(key(k));localStorage.setItem=(k,v)=>set(key(k),v);window.addEventListener('storage',e=>{if(e.key==='bdp-current-user')location.reload()})})();

