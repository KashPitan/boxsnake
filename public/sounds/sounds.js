export function setupSounds() {
  var foodsound = new Howl({
    src: ["sounds/food2.wav"],
    rate: 1.5,
    volume: 3,
  });

  var bonusSound = new Howl({
    src: ["sounds/food.wav"],
    rate: 1,
    volume: 2.5,
  });

  var diesound = new Howl({
    src: ["sounds/obstacle.wav"],
    volume: 3.5,
  });

  var transition = new Howl({
    src: ["sounds/trans2.wav"],
    volume: 1.2,
    rate: 1,
  });

  var stopwatch = new Howl({
    src: ["sounds/Stopwatch.wav"],
    loop: true,
    volume: 0.3,
  });

  return [foodsound, bonusSound, diesound, transition, stopwatch];
}
