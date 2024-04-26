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
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulario de Contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Pagina Institucional sobre a empresa");
});

export default router;
