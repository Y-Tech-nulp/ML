var ac = {
    init : function () {

      ac.chr = document.getElementById("chr");
      ac.cmin = document.getElementById("cmin");
      ac.csec = document.getElementById("csec");
  
      ac.thr = ac.createSel(23);
      document.getElementById("tpick-h").appendChild(ac.thr);
      ac.thm = ac.createSel(59);
      document.getElementById("tpick-m").appendChild(ac.thm);
      ac.ths = ac.createSel(59);
      document.getElementById("tpick-s").appendChild(ac.ths);
  
      ac.tset = document.getElementById("tset");
      ac.tset.addEventListener("click", ac.set);
      ac.treset = document.getElementById("treset");
      ac.treset.addEventListener("click", ac.reset);
  
      ac.sound = document.getElementById("alarm-sound");
  

      ac.alarm = null;
      setInterval(ac.tick, 1000);
    },
  
    createSel : function (max) {
  
      var selector = document.createElement("select");
      for (var i=0; i<=max; i++) {
        var opt = document.createElement("option");
        i = ac.padzero(i);
        opt.value = i;
        opt.innerHTML = i;
        selector.appendChild(opt);
      }
      return selector
    },
  
    padzero : function (num) {

  
      if (num < 10) { num = "0" + num; }
      else { num = num.toString(); }
      return num;
    },
  
    tick : function () {

  

      var now = new Date();
      var hr = ac.padzero(now.getHours());
      var min = ac.padzero(now.getMinutes());
      var sec = ac.padzero(now.getSeconds());

      ac.chr.innerHTML = hr;
      ac.cmin.innerHTML = min;
      ac.csec.innerHTML = sec;
  

      if (ac.alarm != null) {
        now = hr + min + sec;
        if (now == ac.alarm) {
          if (ac.sound.paused) {
            ac.sound.play();
          }
        }
      }
    },
  
    set : function () {

  
      ac.alarm = ac.thr.value + ac.thm.value + ac.ths.value;
      ac.thr.disabled = true;
      ac.thm.disabled = true;
      ac.ths.disabled = true;
      ac.tset.disabled = true;
      ac.treset.disabled = false;
    },
  
    reset : function () {

  
      if (!ac.sound.paused) {
        ac.sound.pause();
      }
      ac.alarm = null;
      ac.thr.disabled = false;
      ac.thm.disabled = false;
      ac.ths.disabled = false;
      ac.tset.disabled = false;
      ac.treset.disabled = true;
    }
  };

  window.addEventListener("load", ac.init);