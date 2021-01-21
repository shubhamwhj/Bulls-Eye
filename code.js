var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9a8858fa-069b-4912-8d3e-920dc7a18fb7","cd3255d7-4e08-4a62-924f-2dd603854dae","6489053a-1154-436d-b0ec-5321055a82da","5b6461ca-5447-455f-969b-628084706a26","f1d3b07c-6fc5-441c-bc3f-2a19083e493f"],"propsByKey":{"9a8858fa-069b-4912-8d3e-920dc7a18fb7":{"name":"stage","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"wZ7oVSsVH_ZluCVZeqN5q9wKz06aqv34","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9a8858fa-069b-4912-8d3e-920dc7a18fb7.png"},"cd3255d7-4e08-4a62-924f-2dd603854dae":{"name":"target_circle","sourceUrl":null,"frameSize":{"x":142,"y":142},"frameCount":1,"looping":true,"frameDelay":12,"version":"g0u33PyydKbQjbbtKUTi1QuTFTrlBun0","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":142},"rootRelativePath":"assets/cd3255d7-4e08-4a62-924f-2dd603854dae.png"},"6489053a-1154-436d-b0ec-5321055a82da":{"name":"dart","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"kU025f2yRYADGuBgrPIjFR_0l.TVjJ3s","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6489053a-1154-436d-b0ec-5321055a82da.png"},"5b6461ca-5447-455f-969b-628084706a26":{"name":"button","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":2,"looping":true,"frameDelay":12,"version":"tkKZlliO4owkhsX98Hzhm8EM6wfDegwh","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":128},"rootRelativePath":"assets/5b6461ca-5447-455f-969b-628084706a26.png"},"f1d3b07c-6fc5-441c-bc3f-2a19083e493f":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"jA69N_NSOI0NRFnKUbgL30Idn4GkShT2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f1d3b07c-6fc5-441c-bc3f-2a19083e493f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var back= createSprite(200, 200);
var target = createSprite(200, 100, 40,40);
var dart = createSprite(200, 350);
var button = createSprite(360, 360);
var topGaurd=createSprite(200,0,400,20);
var rightGaurd=createSprite(400, 0, 20, 400);
var leftGaurd=createSprite(0, 0, 20, 400);

var distance=0;
var score=0;

back.setAnimation("stage");
target.setAnimation("target_circle");
dart.setAnimation("dart");
button.setAnimation("button");

target.setCollider("rectangle", 0, 0,130,5);
dart.setCollider("rectangle",0,0,2,45);

button.pause();
target.setVelocity(5, 0);

function draw()
{

  if(mousePressedOver(button))
  {
       button.nextFrame();
       dart.setVelocity(0,-7);
  }
  
  if(dart.collide(topGaurd))
  {
       dart.x=200;
       dart.y=350;
  }
  
  if(dart.collide(target))
  {
    score=0;
    distance=target.x-dart.x;
    if(distance<0)
    {
      distance=distance*-1;
    }
    console.log(distance);
    
    if(distance<10)
    {
      score=10;
    }
    switch(true)
    {
      case (distance<10):
        score=10;
        break;
      case (distance<20):
        score=8;
        break;
    }
    
    
    
    console.log(score);
     
    target.velocityX=0;
    var wait=setInterval(function(){
                          dart.x=200;
                          dart.y=350;
                          target.velocityX=5;
                          clearInterval(wait);
                              }                , 2000);
    
  }
  
  drawSprites();
  fill("red");
  stroke("red");
  textSize(24);
  text(score, 30, 30);
  target.bounceOff(rightGaurd);
  target.bounceOff(leftGaurd);
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
