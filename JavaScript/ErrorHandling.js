try {
    const flag = canVote(12);
    console.log(flag);
} catch (error) {
    console.log("An Error occurred:", error.message);
} finally {
    console.log("Finished executing the code.");
}

function canVote(age) {
    if (age < 18) {
        throw new Error("You can't vote.");
    }
    return "You can vote.";
}

canVote();