class RandomNumericGenerator {
    generate(){
        return (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
    }
}
