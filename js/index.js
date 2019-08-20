let btn = document.getElementById('cta1')
let btn2 = document.getElementById('cta2')
let article = document.getElementById('article')
let barra = document.getElementById('barra-cabecera')
let cabeceraH1 = document.getElementById('cabecera-h1')
btn2 ? 
    btn.onclick =  () =>{
     let morph = anime({
        targets: '.polymorph',
        points: [
          { value: '215,110 0,110 0,0 47.7,0 67,76'},
          { value: '215,110 0,110 0,0 0,0 67,76'}
        ],
        easing: 'easeOutQuad',
        duration: 1000,
        loop: false
      });
      anime({
          targets: '#welcome-box',
          opacity:1,
          duration: 500,
          translateY: 150
      })
      let promise = morph.finished.then(()=>{
        btn2.onclick =  () =>{
        anime({
            targets: '.polymorph',
            points: [
              { value: '215,110 0,110 0,0 47.7,0 67,76'},
              { value: '215,110 0,110 0,0 47.7,0 215,0'}
            ],
            easing: 'easeOutQuad',
            duration: 1000,
            loop: false
          });
          anime({
            targets: '#welcome-box',
            opacity: 0,
            duration: 500,
            translateY: -800
        })
        }
      })
    }
      : null

      let logo = document.getElementById('logo')
      let logo1 = document.getElementById('logo1')
      let logo2 = document.getElementById('logo2')
      let logo3 = document.getElementById('logo3')
      let tecTitulo = document.getElementById('tecnologias-titulo')
      logo.classList.add('opacity')
      logo1.classList.add('opacity')
      logo1.style.height = '10rem'
      logo1.style.marginTop = '2rem'
      logo2.classList.add('opacity')
      logo3.classList.add('opacity')
      tecTitulo.classList.add('opacity')
      window.addEventListener('scroll', function(e) {
        anime({
          targets: '#tecnologias-titulo',
          easing: 'easeOutExpo',
          translateX: [-800, 0],
          opacity: [0, 1],
          delay:200,
          loop: false
        })
        tecTitulo.removeAttribute('id')
        anime({
          targets: '#logo',
          easing: 'easeOutExpo',
          translateX: [800, 0],
          opacity: [0, 1],
          delay:400,
          loop: false
        })
        logo.removeAttribute("id")
        anime({
          targets: '#logo1',
          easing: 'easeOutExpo',
          translateX: [-800, 0],
          opacity: [0, 1],
          delay:500,
          loop: false
        }) 
        logo1.removeAttribute("id")
        anime({
          targets: '#logo2',
          easing: 'easeOutExpo',
          translateX: [800, 0],
          opacity: [0, 1],
          delay:600,
          loop: false
        })
        logo2.removeAttribute("id")
        anime({
          targets: '#logo3',
          easing: 'easeOutExpo',
          translateX: [-800, 0],
          opacity: [0, 1],
          delay:300,
          loop: false
        })
        logo3.removeAttribute("id")
      })
    
      barra ?

       anime({
          targets: '#barra-cabecera',
          opacity:1,
          easing: 'easeOutExpo',
          duration: 2000,
          translateX: [-800, 0]
      })
      : null
      
      cabeceraH1 ?

       anime({
          targets: '#cabecera-h1',
          opacity:1,
          easing: 'easeOutExpo',
          duration: 1000,
          translateX: [-800, 0]
      })
      : null
  // document.addEventListener('DOMContetntLoaded', ()=>{
  //   let waypoint = new Waypoint({
  //     element: document.querySelector('#p4'),
  //     handler: () =>{
  //     return anime({
  //       targets: '#p4',
  //       easing: 'easeOutExpo',
  //       translateX: [-100, 0],
  //       opacity: [0, 1],
  //       delay: 300
  //     })
      
  //   },
  //   context: document.querySelector('.info-art'),
  //   offset: '100%'
  //   })
    
  // }
  // )