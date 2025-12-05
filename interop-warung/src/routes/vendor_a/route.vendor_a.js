import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([
    {
      kd_produk: "A001",
      nm_brg: "Kopi Bubuk 100g",
      hrg: "15000",
      ket_stok: "ada",
    },
  ]);
});

export default router;
