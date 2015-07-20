class NumberRandomizer implements Randomizer{
    next(){
        return Math.floor(Math.random()*10)
    }
}
