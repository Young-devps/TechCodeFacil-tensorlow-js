//Activation function
int sign(float n){
  if(n >= 0){
    return 1;
  }
  else{
    return -1;
  }
}


class Perceptron{

   float weight = new float[2];

   Perceptron(){
     for (int i=0 ; i<weight.length; i++){
       weight[i] = random(-1, 1);
     }
   }


   int guessResult(float[] inputs){
     float sum = 0;
     for (int i=0; i<weight.length; i++){
       sum += inputs[i] * weight[i];
     }

     int output = sign(sum);
     return output;
   }


}
