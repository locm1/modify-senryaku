/* ===== 戦略倉庫 改善案モックアップ 共通JS ===== */
document.addEventListener('DOMContentLoaded',function(){

  /* ---- 注釈を ? ツールチップに変換 ---- */
  document.querySelectorAll('.note').forEach(function(note){
    var section=note.closest('section');
    var wrap=document.createElement('div');
    wrap.className=section?'note-wrap':'note-wrap note-wrap--inline';

    var icon=document.createElement('span');
    icon.className='note-trigger';
    icon.textContent='?';
    wrap.appendChild(icon);

    if(section){
      section.style.position='relative';
      section.insertBefore(wrap,section.firstChild);
    }else{
      note.parentNode.insertBefore(wrap,note);
    }
    wrap.appendChild(note);

    /* モバイル: タップでトグル */
    icon.addEventListener('click',function(e){
      e.stopPropagation();
      var open=note.classList.toggle('show');
      if(open){
        document.querySelectorAll('.note.show').forEach(function(n){
          if(n!==note) n.classList.remove('show');
        });
      }
    });
  });

  /* 画面タップで閉じる */
  document.addEventListener('click',function(){
    document.querySelectorAll('.note.show').forEach(function(n){
      n.classList.remove('show');
    });
  });

  /* ---- スムーススクロール ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var t=document.querySelector(this.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
    });
  });
});
