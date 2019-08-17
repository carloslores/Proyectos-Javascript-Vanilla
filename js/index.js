let btn = document.getElementById('cta1')
let btn2 = document.getElementById('cta2')
let article = document.getElementById('article')
  
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
      
      window.addEventListener('scroll', function(e) {
        anime({
          targets: '#p1',
          easing: 'easeOutExpo',
          translateX: [800, 0],
          opacity: [0, 1],
          delay:400,
          loop: false
        })
        anime({
          targets: '#p2',
          easing: 'easeOutExpo',
          translateX: [-800, 0],
          opacity: [0, 1],
          delay:500,
          loop: false
        }) 
        anime({
          targets: '#p3',
          easing: 'easeOutExpo',
          translateX: [800, 0],
          opacity: [0, 1],
          delay:600,
          loop: false
        })
        anime({
          targets: '#p4',
          easing: 'easeOutExpo',
          translateX: [-800, 0],
          opacity: [0, 1],
          delay:300,
          loop: false
        })
      })
     
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