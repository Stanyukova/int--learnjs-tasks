function* pseudoRandom(seed) {
    let previous = seed;
    
    while (true) {
      let next = previous * 16807 % 2147483647;
      previous = next;
      yield next;
    }
    
  }
  
  let generator = pseudoRandom(1);
  
  alert(generator.next().value);
  alert(generator.next().value);
  alert(generator.next().value);