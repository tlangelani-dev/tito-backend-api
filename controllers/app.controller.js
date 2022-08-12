const getHome = (req, res) => {
    return res.json({
        success: true,
        data: 'Hello World!',
    });
}

const notFound = (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'Resource not found!'
    });
}

module.exports = {
    getHome,
    notFound,
};
