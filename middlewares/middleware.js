const jwt = require("jsonwebtoken");

const middlewareValidarJWT = (req, res, next) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
        res.status(403).json({ error: "Informe o token de acesso!" });
        return;
    }
    const token = authorization.split(' ')[1];
    const chavePrivada = "senha_secreta";

    jwt.verify(token, chavePrivada, (err, userInfo) => {
        if (err) {
            res.status(403).json({ error: "Acesso não autorizado" });
            return;
        }
        req.userInfo = userInfo;
        next();
    });
};

module.exports = {
    middlewareValidarJWT
};
