import { Injectable } from "@angular/core";
import { Product } from "./home.model";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})

export class HomeService {
  stockProduct = [];
  private product: Product[] = [
    {
      id: "p1",
      product: "CPU",
      imgUrl: [
        "https://5.imimg.com/data5/CF/RI/PJ/GLADMIN-94854285/siemens-6es7-412-2xj05-0ab0-simatic-s7-400-cpu-412-2-central-processing-unit-500x500.jpg",
      ],
      nama: "Simens",
      model: "6ES7 412-2XJ05-0AB0 Simatic",
      harga: 20000000,
      stock: 5,
      baseClock: 8,
      boostClock: 8,
      jumlahCore: 16,
      jumlahThread: 32,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: "p2",
      product: "RAM",
      imgUrl: ["https://cf.shopee.co.id/file/e5e0d16b246dae2127bf26e41fac7fab"],
      nama: "Micron",
      model: "8500",
      harga: 309920,
      stock: 20,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 1066,
      ukuran: 8,
      chipset: null,
      processor: null,
    },
    {
      id: "p3",
      product: "Motherboard",
      imgUrl: [
        "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/3/26/batch-upload/batch-upload_4ef6e97b-33c3-4354-bc3c-dd17f1357a00.jpg",
      ],
      nama: "GIGABYTE",
      model: "GIGABYTE GA-H61M-S1",
      harga: 846000,
      stock: 10,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: "GA H61M",
      processor: "H61 Socket LGA 1155 i3 i5 i7",
    },
    {
      id: "p4",
      product: "GPU",
      imgUrl: [
        "https://m.media-amazon.com/images/I/71E1EvZdZCL._AC_UY218_.jpg",
      ],
      nama: "GeForce",
      model: "VisionTek OCPC GeForce GT 710",
      harga: 700000,
      stock: 5,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
  ];

  constructor() {}

  getProduct(productId: string) {
    return {
      ...this.product.find((product) => {
        return product.id === productId;
      }),
    };
  }

  getAllProduct() {
    this.stockProduct = [];
    let jumlah = 0;
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].stock > 0) {
        this.stockProduct[jumlah] = this.product[i];
        jumlah++;
      }
    }
    return [...this.stockProduct];
  }

  addProduct(data: FormGroup) {
    let DATA = {
      id:
        "p" +
        (
          parseInt(this.product[this.product.length - 1].id.substring(1)) + 1
        ).toString(),
      product: data.value.type,
      imgUrl: [data.value.gambar],
      nama: data.value.nama,
      model: data.value.model,
      harga: data.value.harga,
      stock: data.value.stock,
      baseClock: data.value.baseClock,
      boostClock: data.value.boostClock,
      jumlahCore: data.value.core,
      jumlahThread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      processor: data.value.processor,
    };
    this.product.push(DATA);
  }

  editProduct(productId, editedProduct) {
    return {
      ...this.product.find((product) => {
        if (product.id === productId) {
          product.nama = editedProduct["editedNama"];
          product.imgUrl = [editedProduct["editedImg"]];
          product.model = editedProduct["editedModel"];
          product.harga = editedProduct["editedHarga"];
          product.stock = editedProduct["editedStock"];
          product.baseClock = editedProduct["editedBaseClock"];
          product.boostClock = editedProduct["editedBoostClock"];
          product.jumlahCore = editedProduct["editedCore"];
          product.jumlahThread = editedProduct["editedThread"];
          product.speed = editedProduct["editedSpeed"];
          product.ukuran = editedProduct["editedUkuran"];
          product.chipset = editedProduct["editedChipset"];
          product.processor = editedProduct["editedProcessor"];
        }
      }),
    };
  }

  deleteProduct(productId) {
    this.product = this.product.filter((product) => {
      return product.id !== productId;
    });
  }
}
