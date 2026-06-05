// Canvas layers
(function(){
  function init(id){var c=document.getElementById(id);if(!c)return;var x=c.getContext('2d');function r(){c.width=window.innerWidth;c.height=window.innerHeight}r();window.addEventListener('resize',r);return{c,x,r}}
  init('noise');
  setInterval(function(){var c=document.getElementById('noise');if(!c)return;var w=c.width,h=c.height,d=c.getContext('2d').createImageData(w,h),b=d.data;for(var i=0;i<b.length;i+=4){b[i]=Math.random()*255;b[i+1]=b[i];b[i+2]=b[i];b[i+3]=255}c.getContext('2d').putImageData(d,0,0)},100);
  init('tex');
  (function(){var c=document.getElementById('tex');if(!c)return;var x=c.getContext('2d'),w=c.width,h=c.height,d=x.createImageData(w,h),b=d.data;for(var y=0;y<h;y++)for(var x2=0;x2<w;x2++){var i=(y*w+x2)*4,p=(Math.sin(x2*0.05)+Math.sin(y*0.05))*15+128,n=Math.random()*8-4;b[i]=p+n;b[i+1]=p*.8+n;b[i+2]=p*.5+n;b[i+3]=15}x.putImageData(d,0,0)})();
  init('grn');
  setInterval(function(){var c=document.getElementById('grn');if(!c)return;var w=c.width,h=c.height,d=c.getContext('2d').createImageData(w,h),b=d.data;for(var i=0;i<b.length;i+=4){b[i]=Math.random()*40+10;b[i+1]=b[i]*.9;b[i+2]=b[i]*.7;b[i+3]=25}c.getContext('2d').putImageData(d,0,0)},200);
  var pt=document.getElementById('pt'),px=pt.getContext('2d');var pw=0,ph=0,pts=[];
  function pr(){pw=pt.width=window.innerWidth;ph=pt.height=window.innerHeight;pts=[];for(var i=0;i<80;i++)pts.push({x:Math.random()*pw,y:Math.random()*ph,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,s:Math.random()*1.8+.3,a:Math.random()*.35+.08})}
  pr();window.addEventListener('resize',pr);
  !function dp(){px.clearRect(0,0,pw,ph);for(var i=0;i<pts.length;i++){var p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=pw;if(p.x>pw)p.x=0;if(p.y<0)p.y=ph;if(p.y>ph)p.y=0;px.beginPath();px.arc(p.x,p.y,p.s,0,Math.PI*2);px.fillStyle='rgba(255,215,0,'+p.a+')';px.fill()}requestAnimationFrame(dp)}();
})();

// Fade-in animations
(function(){
  try{
    var fades=document.querySelectorAll('.fade');
    for(var i=0;i<fades.length;i++)fades[i].style.animationPlayState='paused';
    var ob=new IntersectionObserver(function(entries){
      for(var i=0;i<entries.length;i++){if(entries[i].isIntersecting)entries[i].target.style.animationPlayState='running'}
    },{threshold:0.08});
    for(var i=0;i<fades.length;i++)ob.observe(fades[i]);
  }catch(e){}
})();
