"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/addtocart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { productId, city, region, postal, country } = req.body;
    if (!productId || !city || !region || !postal || !country) {
        res.status(400).send("Missing required fields");
    }
    try {
        const submitData = yield prisma.addTOCART.create({
            data: {
                productId,
                city,
                region,
                postal,
                country,
            },
        });
        res.send(submitData);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port 3000`);
});
