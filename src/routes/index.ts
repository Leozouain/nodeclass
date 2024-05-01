import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let showOld: boolean = false;

  let user = {
    name: "Leonardo",
    age: 34,
    showWelcome: false,
  };

  if (user.age > 18) {
    showOld = true;
  }

  res.render("home", {
    user: user,
    showOld,
    products: [
      { title: "Produto X", price: 10 },
      { title: "Produto y", price: 15 },
      { title: "Produto w", price: 20 },
    ],
    frasesDoDia: ["Uma coisa qualquer", "Outra frase qualquer"],
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.render("contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.render("sobre");
});

router.get("/nome", (req: Request, res: Response) => {
  res.render("sobre");
});

export default router;
