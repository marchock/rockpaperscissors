// Generator


export default function*() {

  let counter = ['Ready', 'One', 'Two', 'Three', null];

  let count = 0;

  let loop = true;

  while(loop) {
    let restart = yield counter[count];
    count += 1;
    count = count < counter.length ? count : 0;

    if (restart) {
      yield
      count = 0;
    }
  }
}
