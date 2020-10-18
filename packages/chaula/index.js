const actionNoOne = (name) => {
    console.log("I am from "+ name +" package.");
}

const actionNoTwo = () => {
    console.log("I am @nunu/chaula by the way.");
}

module.exports = {
    actionNoOne,
    actionNoTwo
};