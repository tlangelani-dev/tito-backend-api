const getHome = (req, res) => {
    return res.json({
        success: true,
        data: 'Hello World!',
    });
}

module.exports = {
    getHome
};
