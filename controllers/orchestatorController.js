const health = (req, res) => {
    res.status(200).json({
        "status": "ok",
        "service": "orchestrator"
    });
};

const run = async () => {
    const peticionAcquire = fetch() 
}; 


module.exports = {
    health,
    run
};