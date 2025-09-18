fetch("https://wedevolv.com/json/onscroll.json")
  .then(res => res.json())
  .then(data => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        const cfg = el._onscrollConfig;

        if (entry.isIntersecting) {
          for (let prop in cfg.styleEnd) el.style[prop] = cfg.styleEnd[prop];
        } else {
          for (let prop in cfg.styleStart) el.style[prop] = cfg.styleStart[prop];
        }
      });
    }, { threshold: 0.4 });

    data.forEach(cfg => {
      document.querySelectorAll(`.${cfg.id}`).forEach(el => {
        el._onscrollConfig = cfg;

        for (let prop in cfg.styleStart) el.style[prop] = cfg.styleStart[prop];
        el.style.transition = "all 1s ease";

        let parent = el.parentElement;
        while (parent && parent !== document.body) {
          const style = getComputedStyle(parent);
          if (style.overflow !== "hidden") parent.style.overflow = "hidden"; parent.style.perspective = "1000px";
          parent = parent.parentElement;
        }

        observer.observe(el);
      });
    });
  })
  .catch(err => console.error("Gagal load JSON:", err));