interface UpdateWithOptions {
  description?: string;
  name?: string;
  price?: number;
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}

  updateWith({ description, name, price }: UpdateWithOptions) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
  }
}
