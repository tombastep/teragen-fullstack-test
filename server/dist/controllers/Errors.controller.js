export const handleErrors = async (err, _req, res, _next) => {
    var _a, _b, _c;
    if (err) {
        const status = err.status || ((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) || 500;
        const message = err.message ||
            ((_c = (_b = err.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) ||
            'Internal server error';
        res.status(status).send({ message });
    }
};
//# sourceMappingURL=Errors.controller.js.map