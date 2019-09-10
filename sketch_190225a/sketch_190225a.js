Perceptron p;
function setup() {
  size(200, 200);
  p = new Perceptron();
  float[] inputs = {-1, 0.5};
  int guess = p.guessResult(inputs);
  println(guess);
}


function draw() {

}
