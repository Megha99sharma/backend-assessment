import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { Category } from './category/category.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your-db-username', // Change to your PostgreSQL username
  password: 'your-db-password', // Change to your PostgreSQL password
  database: 'mystore',
  entities: [Product, Category],
  synchronize: true, // Set to false in production
};
