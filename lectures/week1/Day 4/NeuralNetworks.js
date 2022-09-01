/*
    Rock, Paper, Scissors
    
    Prompt: John and Marie play rock-paper-scissors 10 times. You know that:
    
    * John uses rock three times, scissors six times, and paper once.
    * Marie uses rock twice, scissors four times, and paper four times.
    * There are no ties in all 10 games.
    * The order of games is unknown.
    
    Who wins? By how much?

    Solution:
    The key to solving this riddle is realizing that John played scissors six times. Because there were no ties, that means Marie didn't play scissors in any of those six games. Now look at the various hands Marie did play. Because she played scissors four times, and none of those could line up with one of the six times John played scissors, she must have played all six of her other hands on John's six scissors.
    Therefore, six of the games, not necessarily in order, were as follows:
    John: scissors vs. Marie: rock [Winner: Marie]
    John: scissors vs. Marie: rock [Winner: Marie]
    John: scissors vs. Marie: paper [Winner: John]
    John: scissors vs. Marie: paper [Winner: John]
    John: scissors vs. Marie: paper [Winner: John]
    John: scissors vs. Marie: paper [Winner: John]
    Now look at what is left over. We see that Marie has only scissors left. Therefore, the other four games are:
    John: rock vs. Marie: scissors [Winner: John]
    John: rock vs. Marie: scissors [Winner: John]
    John: rock vs. Marie: scissors [Winner: John]
    John: paper vs. Marie: scissors [Winner: Marie]
    Tally it all up, and John wins, 7 to 3. 

*/
