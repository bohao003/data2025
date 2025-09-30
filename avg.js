function avg(score){
    var sum=0, average=0;
    for(var i=0;i<score.length;i++)
        {
            sum += score[i];
        }
        if(score.length>0)
            average=sum/score.length;
        return average;
}

var Score=[50,20,30,15,16,21,33,11,9,27,99,22,66,55,44,33,-1];
console.log(Score.toString+" average:"+ avg(Score))