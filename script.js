
document.querySelectorAll('.project').forEach(card=>{
card.addEventListener('mousemove',()=>{
card.style.boxShadow='0 0 20px rgba(255,213,79,.5)';
});
card.addEventListener('mouseleave',()=>{
card.style.boxShadow='none';
});
});
