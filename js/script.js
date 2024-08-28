"use strict"

window.addEventListener('load', windowLoad);

function windowLoad(){
    document.documentElement.classList.add('loaded');
    //Mouse Parallax//

    const page = document.querySelector('.page');
    const  parallaxItems = document.querySelectorAll('[class*="__inset"]');
    const speed = 0.05;


    let posX = 0;
    let cXprocent =0 ;

    page.addEventListener('mousemove', parallaxAnimation);
    function parallaxAnimation(e){
        const parallxWidth = window.innerWidth;
        const cX = e.pageX - parallxWidth / 2;
        cXprocent = cX / parallxWidth *100;
    } 
    
    function setparallaxAnimationStyle(e){
        const distX = cXprocent - posX;
        posX = posX +(distX * speed);

        parallaxItems.forEach(parallaxItems => {
            const value = parallaxItems.dataset.prxValue ?
                +parallaxItems.dataset.prxValue : 1;
            parallaxItems.style.cssText = `
                    transform : translateX(${posX / value}%)
                `;
        });
        requestAnimationFrame(setparallaxAnimationStyle);
    }
    setparallaxAnimationStyle();

    // Scroll parallax //
  const moon = document.querySelector('.moon');
  const building = document.querySelectorAll('.building');
  const tree = document.querySelector('.tree');
  const stairs = document.querySelector('.stairs');
  const train = document.querySelector('.train')
  const santaItems = document.querySelectorAll('.santa>*');
  
  window.addEventListener('scroll', createPosition);
  createPosition();

  function createPosition(){
    const contentElement = document.querySelector('.content__container');
    const windowHeight = window.innerHeight;
    const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 100;
    finalPos < 100 ? christmasAnimation(finalPos) : christmasAnimation(100);
  }
  function christmasAnimation(finalPos){
    const moonAnim = {
        translate: 50 /100 * finalPos,
        scale: 1+2 /100 * finalPos
    }
    moon.style.cssText =  `
    transform:
        translate(0, ${moonAnim.translate}%)
        scale(${moonAnim.scale})
    `;
    const stairsAnim = {
        translate: 70 /100 * finalPos,
        scale: 1+2 /100 * finalPos
    }
    stairs.style.cssText =  `
    transform:
        translate(0, ${stairsAnim.translate}%)
        scale(${stairsAnim.scale})
    `;
    const treeAnim = {
        translate: 70 /100 * finalPos,
        scale: 1+1.5 /100 * finalPos
    }
    tree.style.cssText =  `
    transform:
        translate(0, ${treeAnim.translate}%)
        scale(${treeAnim.scale})
    `;
    building.forEach((building, index) =>{
        const buildingAnim = {
            translate: 30 + (building.length - index) / 100 * finalPos,
            scale : 1+2 /100 *finalPos
        }
        building.style.cssText = `
        transform:
            translate(0,${buildingAnim.translate}%)
            scale(${buildingAnim.scale});
        `;
    });
    const trainAnim = {
        translate: 1 * finalPos,
        
    }
    train.style.cssText =  `
    transform: translate(-${trainAnim.translate}%, ${trainAnim.translate}%)
    `;
    santaItems.forEach((santaItems, index) =>{
        const santaAnim = {
            left: (100+(10 * index)) / 100 * finalPos
        }
        santaItems.style.left = `${santaAnim.left}%`
    })
  }
}




